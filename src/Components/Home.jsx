import {React, useState} from "react"
import Navbar from "./Navbar"

function Home(){
    const [navBar, setNavBar] = useState(false)

    function toggleNav(){
        return(
            setNavBar(!navBar)
        )
    }
    return (
        <div>
            <h1>Hello</h1>
            <h2>Welcome to My Portfolio</h2>
            <button onClick = {toggleNav}>{navBar ? '>>>' : '<<<'}</button>
            {navBar ? <Navbar/> : null}
        </div>
    )
}

export default Home