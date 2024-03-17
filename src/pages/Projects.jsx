import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'

function Projects() {
    return (
        <>
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/resume'>Currículum</Link>
        </nav>
            <h1>Proyectos</h1>
        </>
    )
}

export default Projects