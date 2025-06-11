import React from 'react'
import AnimateOnScroll from '../component/AnimateOnScroll'
import "../Styles/hero.css"

 const Hero = () => {
    return (
        <section className="section hero-section">
          <div className="decoration decoration-pink hero-decoration-1"></div>
          <div className="decoration decoration-purple hero-decoration-2"></div>
    
          <div className="container hero-container">
            <div className="hero-content">
              <AnimateOnScroll animation="fade-up">
                <div className="hero-tag">Front-End Developer</div>
              </AnimateOnScroll>
    
              <AnimateOnScroll animation="fade-up" delay={0.2}>
                <h1 className="hero-title">
                  Hi, I'm{" "}
                  <span className="text-reveal">
                    <span className="text-reveal-content hero-name">Okeke chidera</span>
                  </span>
                </h1>
              </AnimateOnScroll>
    
              <AnimateOnScroll animation="fade-up" delay={0.4}>
                <p className="hero-description">
                  Turning ideas into sleek, responsive 
                websites with a focus on clarity, elegance, and smooth user experience.                </p>
              </AnimateOnScroll>
    
              <AnimateOnScroll animation="fade-up" delay={0.6}>
                <div className="hero-buttons">
                  <a href="#projects" className="btn btn-primary">
                    View My Work
                    <span className="btn-icon">✨</span>
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Get In Touch
                    <span className="btn-icon">❤️</span>
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
    
            <AnimateOnScroll className="hero-image-container" animation="fade-left" delay={0.4}>
              <div className="hero-image-wrapper">
                <img src="/images/mine.jpg" alt="Profile" className="hero-image" />
              </div>
            </AnimateOnScroll>
          </div>
    
          <a href="#about" className="scroll-down">
            <span className="scroll-arrow"></span>
          </a>
        </section>
      )
}
export default Hero