import './App.css'
import Navigation from './components/Navigation'
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        name: 'Robo',
        avatar: 'https://gravatar.com/avatar/000?d=robohash'
    });
    const [stats, setStats] = useState({
        followers: 10,
        following: 20
    });

    /*const changeAvatar = (url) => {
        setUser({...user, avatar: url ||  user.avatar});
    }

    если вычисление производится в предыдущем результате или State
    состоит из нескольких полей надо использовать callbackfuncvtion
    */

    const changeAvatar = (url) => {
        setUser(prevState => ({...prevState, avatar: url || prevState.avatar}));
    }

    const changeName = (name) => {

        setUser(prevState => ({...prevState, name: name || prevState.name}));
    }


    const changeFollowers = (sum) => {
        setStats(prevState =>
            ({...prevState, followers: prevState.followers + sum < 0 ? 0 : prevState.followers + sum}))
    }




    const changeFollowing = (sum) => {
        setStats(prevState =>
            ({...prevState, following: prevState.following +sum < 0 ? 0 : prevState.following +sum}))
    }
    return (
        <div className={'app'}>
            <TwitterContext value={{
                user, stats,
                changeAvatar,
                changeName,
                changeFollowers,
                changeFollowing
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext>

        </div>
    )
}

export default App
