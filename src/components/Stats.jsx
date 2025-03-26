import React, {useContext} from 'react';
import Avatar from "./Avatar.jsx";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
  const {user, stats} = useContext(TwitterContext)
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar user={user}/>
                {user.name}
            </div>

            <div className={'stats'}>
                <div>Followers: {stats.followers}</div>
                <div>Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;