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
                    {studies.map(element => {
                        const { id, name, title, institution, date } = element
                        return (
                            <div className='studies' key={id + name}>
                                <p><span>ID</span>: {id}</p>
                                <p><span>Título</span>: {title}</p>
                                <p><span>Institución</span>: {institution}</p>
                                <p><span>Fecha</span>: {date}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='experiences-container'>
                    <h3>Experiencia</h3>
                    {experiences.map(element => {
                        const { id, name, title, company, date } = element
                        return (
                            <div className='experience' key={id + name}>
                                <p><span>ID</span>: {id}</p>
                                <p><span>Título</span>: {title}</p>
                                <p><span>Empresa</span>: {company}</p>
                                <p><span>Fecha</span>: {date}</p>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </>
    )
}

export default Resume