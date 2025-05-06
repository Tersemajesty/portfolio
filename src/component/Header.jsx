import React from 'react'
import "../Styles/header.css"
import { useState, useEffect } from 'react'
import ThemeToggle from '../component/ThemeToggle'

 const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
  
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [])
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  
    return (
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          <a href="#" className="logo">
            <span className="logo-highlight">Okeke's</span>Portfolio
            <span className="logo-sparkle">✨</span>
          </a>
  
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
            <span className={`menu-bar ${isMenuOpen ? "open" : ""}`}></span>
          </button>
  
          <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </nav>
  
          <div className="header-actions">
            <ThemeToggle />
  
            <div className="social-links">
              <a href="https://github.com/Tersemajesty" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/okeke-chidera1/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    )
}
export default Header