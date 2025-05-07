import React from 'react'
import "../Styles/header.css"
import { useState, useEffect } from 'react'
import ThemeToggle from '../component/ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto"
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <span className="logo-highlight">my</span>Portfolio
          <span className="logo-sparkle">✨</span>
        </a>

        <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
          </button>
          <div className="social-links">
            <a href="https://github.com/Tersemajesty" target="_blank" rel="noopener noreferrer" className="social-link">
              {/* GitHub Icon */}
             
            </a>
            <a href="https://www.linkedin.com/in/okeke-chidera1/" target="_blank" rel="noopener noreferrer" className="social-link">
              {/* LinkedIn Icon */}
           
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
