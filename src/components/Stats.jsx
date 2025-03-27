import React, {useContext} from 'react';
import Avatar from "./Avatar.jsx";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {
        user,
        stats,
        changeFollowers,
        changeFollowing
    } = useContext(TwitterContext)
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar user={user}/>
                {user.name}
            </div>

            <div className={'stats'}>
                <div
                    onClick={() => changeFollowers(1)}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        changeFollowers(-1);
                    }}>Followers: {stats.followers}</div>
                <div

                    onClick={() => changeFollowing(1)}
                    onContextMenu={(e) => {
                        e.preventDefault()
                        changeFollowing(-1);
                    }}>Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;