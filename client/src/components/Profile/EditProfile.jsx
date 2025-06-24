import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../context/DataContext'
import AvatarSelection from './AvatarSelection';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

const EditProfile = () => {
    const navigate = useNavigate();
    const avatarList = ['female_Av0', 'female_Av1', 'female_Av2', 'female_Av3', 'male_Av0', 'male_Av1', 'male_Av2', 'male_Av3',]
    const { user, setUser } = useContext(DataContext)
    const [userAvatar, setUserAvatar] = useState(null)

    useEffect(() => {
        if (!user) {
            navigate("/auth/login", { replace: true })
        }
        else {
            setUserAvatar(user.gender + "_Av" + user.avatar)
        }
    }, [user, navigate])

    const selectAvatar = (i) => {
        setUserAvatar(avatarList[i])
    }

    if (!user) return null;
    return (
        <>
            {
                (!userAvatar)
                    ? <Loader />
                    : <div className='px-8 py-5 md:px-20 xl:px-40 lg:py-10 flex gap-3 md:gap-5 items-center justify-center md:justify-start'>
                        {/* Avatar Selection */}
                        <AvatarSelection userAvatar={userAvatar} selectAvatar={selectAvatar} avatarList={avatarList} />

                    </div>
            }
        </>
    )
}

export default EditProfile