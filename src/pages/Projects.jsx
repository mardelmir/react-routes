import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Projects() {
    return (
        <>
            <div className='nav-container'>
                <nav className='nav'>
                    <Link to='/'>Home</Link>
                    <Link to='/resume'>Currículum</Link>
                </nav>
            </div>
            <h1>Proyectos</h1>
            <div className='projects-container'>
                {projects.map(project =>
                    <div className="project" key={project.id}>
                        <div>
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div>
                            <p><span>ID</span>: {project.id}</p>
                            <p><span>Nombre</span>: {project.name}</p>
                            <p><span>Descripción</span>: {project.description}</p>
                            <p><span>Link</span>: <a href={project.url}>{project.url}</a></p>
                        </div>
                    </div>)}
            </div>
        </>
    )
}

export default Projects

