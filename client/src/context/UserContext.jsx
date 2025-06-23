import axios from "axios";
import { useEffect, useState } from "react";
import DataContext from "./DataContext";

const baseURL = import.meta.env.VITE_BASE_URL;

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setLoading(false)
            return;
        }
        try {
            const userAuth = await axios.get(`${baseURL}/users/profile`, {
                headers: {
                    Authorization: token
                }
            });
            if (!userAuth.data.err) {
                setUser(userAuth.data.userData)
            }
        } catch (err) {
            localStorage.removeItem("token");
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        checkAuth()
    }, [])

    return (
        <DataContext.Provider value={{ user, setUser, loading, checkAuth }}>
            {children}
        </DataContext.Provider>
    );
};

export default UserContext;
