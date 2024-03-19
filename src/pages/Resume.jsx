import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { studies, experiences } from '../data/resume'

function Resume() {
    return (
        <>
            <div className='nav-container'>
                <nav className='nav'>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Proyectos</Link>
                </nav>
            </div>
            <h1>Currículum</h1>
            <div className='cv-container'>
                <div className='studies-container'>
                    <h3>Estudios</h3>
                    {studies.map(element =>
                        <div className='studies' key={element.id}>
                            <p><span>ID</span>: {element.id}</p>
                            <p><span>Título</span>: {element.title}</p>
                            <p><span>Institución</span>: {element.institution}</p>
                            <p><span>Fecha</span>: {element.date}</p>
                        </div>
                    )}
                </div>
                <div className='experiences-container'>
                    <h3>Experiencia</h3>
                    {experiences.map(element =>
                        <div className='experience' key={element.id}>
                            <p><span>ID</span>: {element.id}</p>
                            <p><span>Título</span>: {element.title}</p>
                            <p><span>Empresa</span>: {element.company}</p>
                            <p><span>Fecha</span>: {element.date}</p>
                        </div>)}
                </div>
            </div>
        </>
    )
}

export default Resume