import {React, useState} from "react"
import Navbar from "./Navbar"
import Hello from "./Hello"
import MiniAbtMe from "./MiniAbtMe"
import ProfilePicture from "./ProfilePicture"

function Home(){
    const [navBar, setNavBar] = useState(false)

    function toggleNav(){
        return(
            setNavBar(!navBar)
        )
    }
    return (
        <div className="Home">
             {navBar ? <Navbar/> : null}
            <button className = "Dropdown-Button"onClick = {toggleNav}>{navBar ? '>>>' : '<<<'}</button>
           
            <div className = "main-container">
                <ProfilePicture/>
                <div className = "Main">
                    <Hello/>
                    <MiniAbtMe/>
                </div>
            </div>
   
        </div>
    )
}

export default Home