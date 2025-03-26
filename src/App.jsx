
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
    followers:10,
    following:20
});

  return (
    <div className={'app'}>
        <TwitterContext.Provider value={{user, stats}}>
            <Navigation />
            <Body  />
        </TwitterContext.Provider>

    </div>
  )
}

export default App
