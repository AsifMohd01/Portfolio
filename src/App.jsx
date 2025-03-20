"use client"

import { useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Loader from "./components/Loader"
import Experience from "./components/Experience"
import "./App.css"

function App() {
const [darkMode, setDarkMode] = useState(true)
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  // Simulate loading time
  const timer = setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  return () => clearTimeout(timer)
}, [])

const toggleTheme = () => {
  setDarkMode(!darkMode)
}

if (isLoading) {
  return <Loader />
}

return (
  <main className={darkMode ? "dark" : ""}>
    <div className="relative z-0 bg-primary dark:bg-gray-900 transition-colors duration-300 ">
      <div className="relative z-10 ">
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <div className="relative z-0 Main-Section">
          <section id="hero" className="relative w-full h-screen mx-auto Hero-Section">
            <Hero />
          </section>

          <section id="about" className="relative w-full mx-auto py-20 About-Section">
            <About />
          </section>

          <section id="projects" className="relative w-full mx-auto py-20 Projects-Section">
            <Projects />
          </section>

          <section id="skills" className="relative w-full mx-auto py-20 Skills-Section">
            <Skills />
          </section>

          <section id="contact" className="relative w-full mx-auto py-20 Contact-Section">
            <Contact />
          </section>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
          <Suspense fallback={null}>
            <Experience darkMode={darkMode} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  </main>
)
}

export default App
