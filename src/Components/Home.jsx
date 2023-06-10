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
            <button className = "Dropdown-Button"onClick = {toggleNav}>{navBar ? '>>>' : '<<<'}</button>
            {navBar ? <Navbar/> : null}
            <div className = "center">
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