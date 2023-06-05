import AboutMe from "./NavbarComponents/AboutMe"
import ProjectList from "./NavbarComponents/ProjectList"

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