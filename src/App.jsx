import React from 'react'
import './App.css'
import Header from "./component/Header"
import Hero from "./component/Hero"
import About from "./component/About"
import Skill from "./component/Skill"
import Project from "./component/Project"
import Contact from "./component/Contact"
import Footer from "./component/Footer"
import TestimonialCarousel from "./component/TestimonialCarousel"
import { ThemeProvider } from "./component/ThemeContext"

 const App = () => {
  return (
<ThemeProvider>
      <div className="portfolio-container">
        <Header />

        <main className="main-content">
          <Hero />
          <About />
          <Skill />
          <Project/>

          <section id="testimonials" className="section testimonials-section">
            <TestimonialCarousel />
          </section>

          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider> 
  )
}
export default App