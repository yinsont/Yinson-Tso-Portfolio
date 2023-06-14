import React from 'react'

export default function Project({project}){
    // console.log(project.resources, project.id)
    return(
        <div className="project-container">
            {/* <img src={project.gif} alt={project.gif} className="project-img"/> */}
            <h1>{project.title}</h1>
            <p className='description'>{project.description}</p>
            <div className='languages'>  
                <h3>Languages Used</h3> 
                <ul>
                {project.resources.map(language =><li>{language}</li>)}
                </ul>
            </div>
            <h3>Status: {project.status ? 'Completed' : 'Still being worked on'}</h3>
            <a href={project.GithubLink}>{project.title} Github</a>
            
        </div>
    )
}