import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='nav-container'>
                <nav className='nav'>
                    <Link to='/projects'>Proyectos</Link>
                    <Link to='/resume'>Currículum</Link>
                </nav>
            </div>
            <h1>Bienvenidos</h1>
            <p>¡Bienvenidos a mi pequeño portfolio!</p>
            <h2>Sobre mí</h2>
            <p>Esta es una pequeña descripción sobre mí. En la navegación de arriba podrás encontrar más información</p>
        </>
    )
}

export default Home