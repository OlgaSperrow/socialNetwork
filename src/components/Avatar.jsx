import React, {useContext} from 'react';
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user,  changeAvatar, changeName  } = useContext(TwitterContext);



    return (
              <img className={`user-avatar ${size || ''}`} src={user.avatar} alt={user.name}
                   onClick={ ()=>{
                  const url = prompt(" Enter url")
                       changeAvatar(url); }}

                   onContextMenu={ (e)=>{
                       e.preventDefault();
                      const name = prompt("Enter new name")
                       changeName(name);
                   }}






              />
    );
};

export default Avatar;