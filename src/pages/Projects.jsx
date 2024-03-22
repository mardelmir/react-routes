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
                {projects.map(project => {
                    const { id, name, image, description, url } = project
                    return (
                        <div className="project" key={id + name}>
                            <div>
                                <img src={image} alt={name} />
                            </div>
                            <div>
                                <p><span>ID</span>: {id}</p>
                                <p><span>Nombre</span>: {name}</p>
                                <p><span>Descripción</span>: {description}</p>
                                <p><span>Link</span>: <a href={url}>{url}</a></p>
                            </div>
                        </div>)
                })}
            </div>
        </>
    )
}

export default Projects

