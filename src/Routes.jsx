import Resume from "./pages/Resume.jsx";
import Home from "./pages/Home.jsx";
import Help from './pages/Help.jsx'
import Faqs from './pages/Faqs.jsx'
import Test from './pages/Test.jsx'
import Error from './pages/Error.jsx'
import Projects from "./pages/Projects.jsx";
import { createBrowserRouter } from "react-router-dom";
import Header from "./template/Header.jsx";
import HeaderApp from "./template/HeaderApp.jsx";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const RoutesApp = createBrowserRouter(
    [
        {
            path: "/",
            element: <Header />,
            errorElement: <Error />,
            children: [
                {path: '/', element: <Home />},
                {path: '/projects', element: <Projects />},
                {path: '/resume', element: <Resume />},
                {path: '/test', element: <Test />}
            ]
        },
        {
            path: "/help",
            element: <HeaderApp />,
            children: [
                {path: 'help', element: <Help />},
                {path: 'faqs', element: <Faqs />}
            ]
        }
    ]
) 


// function RoutesApp() {
//   return (
//     <Router>
//       <ul>
//           <li>
//             <Link to="/">Home </Link>
//           </li>
//           <li>
//             <Link to="/projects">Project</Link>
//           </li>
//           <li>
//             <Link to="/resume">Resume</Link>
//           </li>
//         </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/test" element={<Test />} />
//       </Routes>
//     </Router>
//   );
// }

export default RoutesApp // esto es para ponerlo en App()
