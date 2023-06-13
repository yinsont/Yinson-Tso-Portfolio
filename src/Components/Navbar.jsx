import AboutMe from "./NavbarComponents/AboutMe"
import ProjectList from "./NavbarComponents/ProjectList"
import {React} from 'react'
import {BrowserRoutes, Link} from "react-router-dom"

function Navbar() {
    return(
        <div className="Navbar">
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>About Me</Link>
            <Link to='/projects'>Projects</Link>
        </div>
    )
}

export default Navbar