import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <About/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
