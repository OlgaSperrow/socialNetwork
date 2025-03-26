import React, {useContext} from 'react';
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user,  setUser } = useContext(TwitterContext);

    const changeAvatar = () => {
        const newAvatar = prompt("Please, enter url for new avatar ");
        if(newAvatar){
            setUser(userData => ({...userData, avatar: newAvatar}));
        }
    }

    return (
              <img className={`user-avatar ${size || ''}`} src={user.avatar} alt={user.name} onClick={changeAvatar} style={{cursor: 'pointer'}}/>
    );
};

export default Avatar;