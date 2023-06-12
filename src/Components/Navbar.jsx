import AboutMe from "./NavbarComponents/AboutMe"
import ProjectList from "./NavbarComponents/ProjectList"
import {React} from 'react'
import {BrowserRoutes} from "react-router-dom"

function Navbar() {
    return(
        <div className="Navbar">
            <div>
                <AboutMe/>
            </div>
            <div>
                <ProjectList/>
            </div>
        </div>
    )
}

export default Navbar