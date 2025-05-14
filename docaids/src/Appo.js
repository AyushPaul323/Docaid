import React from "react";
import Navbarr from './main/Navbarr'
import Pic from './main/Pic';
import Bed from './main/Bed';
import Bed1 from './main/Bed1';
import Footerr from './main/Footer';
import Slide from './main/Slides';
import Social from './main/Social';
import Sidenav from "./main/Sidenav";
import Chat from "./main/Chat";
function Appo(props){
    React.useEffect(()=>{
        console.log(props.user);
    },[])
    return(
    <div>
    {(props.user)?<Sidenav Pic={props.user.picture} />:<Navbarr />}
    <Pic />
    {(props.user)?<Bed />:<Bed1 />}
    <Slide />
    <Footerr />
    <Social />
    <Chat />
    </div>
    );
}

export default Appo;