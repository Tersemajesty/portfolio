import { useState } from "react"
import AnimateOnScroll from "../component/AnimateOnScroll"
import "../Styles/skill.css"

const Skill = () => {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills = [
    { name: "HTML5", level: 90, color: "pink" },
    { name: "CSS3", level: 85, color: "purple" },
    { name: "JavaScript", level: 90, color: "pink" },
    // { name: "TypeScript", level: 80, color: "purple" },
    { name: "React", level: 85, color: "pink" },
    { name: "Next.js", level: 80, color: "purple" },
  ]

  const designSkills = [
    { name: "Responsive Design", level: 90, color: "pink" },
    { name: "UI/UX", level: 80, color: "purple" },
    { name: "Figma", level: 75, color: "pink" },
    { name: "CSS Animations", level: 85, color: "purple" },
  ]

  const otherSkills = [
    { name: "Git", level: 85, color: "pink" },
    { name: "Accessibility", level: 80, color: "purple" },
    { name: "Performance Optimization", level: 75, color: "pink" },
    { name: "SEO Basics", level: 70, color: "purple" },
  ]

  const getSkills = () => {
    switch (activeTab) {
      case "design": return designSkills
      case "other": return otherSkills
      default: return technicalSkills
    }
  }

  return (
    <section id="skills" className="section skills-section">
      <div className="decoration decoration-pink skills-decoration-1"></div>
      <div className="decoration decoration-purple skills-decoration-2"></div>

      <div className="container">
        <AnimateOnScroll animation="fade-up">
          <div className="section-tag">My Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={0.2}>
          <div className="skills-tabs">
            {["technical", "design", "other"].map(tab => (
              <button
                key={tab}
                className={`skills-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="skills-chart-container" animation="fade-up" delay={0.3}>
          <div className="skills-radar">
            <div className="skills-radar-circles">
              <div className="skills-radar-circle"></div>
              <div className="skills-radar-circle"></div>
              <div className="skills-radar-circle"></div>
              <div className="skills-radar-circle"></div>
            </div>
            <div className="skills-radar-lines">
              {getSkills().map((_, index) => {
                const angle = (Math.PI * 2 * index) / getSkills().length
                return (
                  <div
                    key={`line-${index}`}
                    className="skills-radar-line"
                    style={{ transform: `rotate(${(angle * 180) / Math.PI}deg)` }}
                  ></div>
                )
              })}
            </div>
            <div className="skills-radar-points">
              {getSkills().map((skill, index) => {
                const angle = (Math.PI * 2 * index) / getSkills().length
                const radius = (skill.level / 100) * 120
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                return (
                  <div
                    key={skill.name}
                    className={`skills-radar-point skills-radar-${skill.color}`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <span className="skills-radar-tooltip">{skill.name}</span>
                  </div>
                )
              })}
            </div>
            <svg className="skills-radar-polygon" viewBox="-150 -150 300 300">
              <polygon
                className="skills-radar-polygon-shape"
                points={getSkills()
                  .map((skill, index) => {
                    const angle = (Math.PI * 2 * index) / getSkills().length
                    const radius = (skill.level / 100) * 120
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius
                    return `${x},${y}`
                  })
                  .join(" ")}
              />
            </svg>
          </div>

          <div className="skills-list">
            {getSkills().map((skill, index) => (
              <div className="skill-item" key={skill.name} style={{ "--delay": `${index * 0.1}s` }}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-progress skill-${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

export default Skill
