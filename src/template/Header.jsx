import { Link, Outlet } from "react-router-dom";
function Header () {
  return ( 
    <>
  <ul>
    <li>
      <Link to="/">Home </Link>
    </li>
    <li>
      <Link to="/projects">Project</Link>
    </li>
    <li>
      <Link to="/resume">Resume</Link>
    </li>
  </ul>
  <Outlet />
  </>
  )
}

export default Header