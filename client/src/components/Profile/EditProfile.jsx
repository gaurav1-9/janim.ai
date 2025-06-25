import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/DataContext'
import AvatarSelection from './AvatarSelection';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import Footer from '../Footer';
import ProfileTextEditing from './ProfileTextEditing';
import axios from 'axios';
const baseURL = import.meta.env.VITE_BASE_URL

const EditProfile = () => {
    const navigate = useNavigate();
    const avatarList = ['female_Av0', 'female_Av1', 'female_Av2', 'female_Av3', 'male_Av0', 'male_Av1', 'male_Av2', 'male_Av3',]
    const { user, checkAuth } = useContext(DataContext)
    const [userAvatar, setUserAvatar] = useState(null)
    const [editedUser, setEditedUser] = useState({ name: user.name, username: user.username, gender: user.gender })
    const [isEditting, setIsEditting] = useState(false)
    const [emptyInputs, setEmptyInputs] = useState(false)
    const [serverMsg, setServerMsg] = useState({})

    useEffect(() => {
        if (!user) {
            navigate("/auth/login", { replace: true })
        }
        else {
            setUserAvatar(user.avatar)
        }
    }, [user, navigate])

    const selectAvatar = (i) => {
        setUserAvatar(avatarList[i])
    }

    const fullProfileEdit = async (e) => {
        e.preventDefault()
        if (isEditting) return;
        if (!editedUser.name.trim() || !editedUser.gender.trim() || !editedUser.username.trim()) {
            setEmptyInputs(true)
            setTimeout(() => {
                setEmptyInputs(false)
            }, 3000);
            return
        }
        setIsEditting(true)
        try {
            const token = localStorage.getItem("token");
            await axios.patch(`${baseURL}/users/edit`,
                { ...editedUser, avatar: userAvatar },
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
            await checkAuth()
            navigate("/profile", { replace: true })
            console.log(editedUser)
        } catch (err) {
            console.log(err)
            setServerMsg(err.response.data)
            setTimeout(() => {
                setServerMsg(prev => ({
                    ...prev,
                    err: false
                }))
                setTimeout(() => {
                    setServerMsg({});
                }, 300);
            }, 3000);
            return
        } finally {
            setIsEditting(false)
        }
    }

    if (!user) return null;
    return (
        <>
            {
                (!userAvatar)
                    ? <Loader />
                    : <>
                        <div className='px-8 py-5 md:px-20 xl:px-40 lg:py-10 flex flex-col md:flex-row gap-3 md:gap-5 items-center justify-center md:justify-start'>
                            <AvatarSelection userAvatar={userAvatar} selectAvatar={selectAvatar} avatarList={avatarList} gender={editedUser.gender} />
                            <ProfileTextEditing editedUser={editedUser} setEditedUser={setEditedUser} emptyInputs={emptyInputs} serverMsg={serverMsg} isEditting={isEditting} fullProfileEdit={fullProfileEdit} />
                        </div>
                        <Footer />
                    </>
            }
        </>
    )
}

export default EditProfile