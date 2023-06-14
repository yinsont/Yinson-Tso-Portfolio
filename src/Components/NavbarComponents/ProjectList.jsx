import {React, useState, useEffect} from 'react'
import Project from './Project'

function ProjectList(){

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:3500/projects')
        .then(response => response.json())
        .then(data => setProjects(data))
    }, [])

    return(
            <div className = 'Projects'>
                {projects.map(project => 
                    <Project project = {project}></Project>
                )}
            </div>
    )
}

export default ProjectList
