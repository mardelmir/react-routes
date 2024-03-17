import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { studies, experiences } from '../data/resume'

function Resume() {
    return (
        <>
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Proyectos</Link>
        </nav>
            <h1>Currículum</h1>
        </>
    )
}

export default Resume