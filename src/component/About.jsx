import React from 'react'
import AnimateOnScroll from '../component/AnimateOnScroll'
import "../Styles/about.css"


 const About = () => {
    return (
        <section id="about" className="section about-section">
          <div className="container about-container">
            <AnimateOnScroll className="about-image-container" animation="fade-right">
              <div className="about-image-wrapper">
                <img src="public/profilepix.jpg" alt="About Me" className="about-image" />
              </div>
            </AnimateOnScroll>
    
            <div className="about-content">
              <AnimateOnScroll animation="fade-up">
                <div className="section-tag">About Me</div>
                <h2 className="about-title">My Story</h2>
              </AnimateOnScroll>
    
              <AnimateOnScroll className="about-text stagger-children" animation="fade-up" delay={0.2}>
                <p>
                  Hello! I'm a passionate front-end developer with a keen eye for creating engaging and intuitive user
                  interfaces. My journey in web development started 3 years ago, and I've been in love with crafting digital
                  experiences ever since.
                </p>
                <p>
                  I specialize in JavaScript, React, and modern front-end technologies. I enjoy turning complex problems
                  into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or enjoying outdoor activities.
                </p>
                <p>I'm always open to new opportunities and challenges that allow me to expand my skills and knowledge.</p>
              </AnimateOnScroll>
    
              <AnimateOnScroll animation="fade-up" delay={0.4}>
                <a href="/resume.pdf" target="_blank" className="btn btn-outline about-resume-btn" rel="noreferrer">
                  Download Resume
                </a>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      )
}
export default About