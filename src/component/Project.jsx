import AnimateOnScroll  from "../component/AnimateOnScroll"
import "../Styles/project.css"

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Next.js", "CSS", "Stripe"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A weather application that provides real-time weather data and forecasts for any location using the OpenWeather API.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["JavaScript", "React", "CSS", "API Integration"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A full-featured task management application with drag-and-drop functionality, filters, and user authentication.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["TypeScript", "React", "Redux", "Firebase"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and CSS to showcase projects and skills.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "CSS", "Animation"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description:
        "A recipe search application that allows users to find recipes based on ingredients they have at home.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["JavaScript", "React", "API Integration"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Movie Database",
      description:
        "A movie database application that allows users to search for movies, view details, and save favorites.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "CSS", "TMDB API"],
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <AnimateOnScroll animation="fade-up">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
        </AnimateOnScroll>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} className="project-card-wrapper" animation="fade-up" delay={index * 0.1}>
              <div className="project-card">
                <div className="project-image-container">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span className="project-tag" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Project