import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-gray-50 relative">
      <Navbar />
      <Hero isVisible={isVisible.hero} />
      <About isVisible={isVisible.about} />
      <Skills isVisible={isVisible.skills} />
      <Experience isVisible={isVisible.experience} />
      <Projects isVisible={isVisible.projects} />
      <Education isVisible={isVisible.education} />
      <Certifications isVisible={isVisible.certifications} />
      <Achievements isVisible={isVisible.achievements} />
      <Testimonials isVisible={isVisible.testimonials} />
      <Contact isVisible={isVisible.contact} />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
