import Projects from "./NavbarComponents/Projects"
import AboutMe from "./NavbarComponents/AboutMe"
function Navbar() {
    return(
        <nav>
            <div>
                <AboutMe/>
            </div>
            <div>
                <Projects/>
            </div>
            <div>

            </div>
        </nav>
    )
}

export default Navbar