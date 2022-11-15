import { HashRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Team from './components/Team'
import Tecnology from './components/Tecnology'
import './App.css'
import Project from './components/Project'

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <a href=''>Inicio</a>
            </li>
            <li>
              <a href=''>Contactos</a>
            </li>
            <li>
              <a href=''>Blog</a>
            </li>
            <li>
              <a href=''>Sobre nosotros</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/' element={<Home />} />
          <Route path='/tecnology' element={<Tecnology />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
export default App
