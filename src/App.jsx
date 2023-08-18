import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import {BsArrowUpSquareFill} from 'react-icons/bs'

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>

      <Home />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <AboutMe />
      <ContactMe />

      <footer>
        <Footer />
      </footer>

      <a className="gotoTop" href='#navbar'>
        Back to Top <BsArrowUpSquareFill style={{color: '#ddd', fontSize: '1.2rem'}}/>
      </a>
    </>
  )
}

export default App
