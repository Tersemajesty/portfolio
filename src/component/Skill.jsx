import { useState } from "react"
import  AnimateOnScroll from "../component/AnimateOnScroll"
import "../Styles/skill.css"

const Skill = () => {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills = [
    { name: "HTML5", level: 90, color: "pink" },
    { name: "CSS3", level: 85, color: "purple" },
    { name: "JavaScript", level: 90, color: "pink" },
    { name: "TypeScript", level: 80, color: "purple" },
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
      case "technical":
        return technicalSkills
      case "design":
        return designSkills
      case "other":
        return otherSkills
      default:
        return technicalSkills
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
            <button
              className={`skills-tab ${activeTab === "technical" ? "active" : ""}`}
              onClick={() => setActiveTab("technical")}
            >
              Technical
            </button>
            <button
              className={`skills-tab ${activeTab === "design" ? "active" : ""}`}
              onClick={() => setActiveTab("design")}
            >
              Design
            </button>
            <button
              className={`skills-tab ${activeTab === "other" ? "active" : ""}`}
              onClick={() => setActiveTab("other")}
            >
              Other
            </button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="skills-chart-container" animation="fade-up" delay={0.3}>
          <div className="skills-chart">
            <div className="skills-radar-chart">
              <div className="skills-radar-circles">
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
              <div className="skills-radar-shape">
                {getSkills().map((skill, index) => {
                  const angle = (Math.PI * 2 * index) / getSkills().length
                  const radius = (skill.level / 100) * 120
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius

                  return (
                    <div
                      key={`point-${skill.name}`}
                      className={`skills-radar-point skills-radar-${skill.color}`}
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                      data-skill={skill.name}
                      data-level={skill.level}
                    >
                      <span className="skills-radar-label">{skill.name}</span>
                    </div>
                  )
                })}
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
            </div>
          </div>

          <div className="skills-list">
            {getSkills().map((skill, index) => (
              <div className="skill-item" key={skill.name} style={{ "--delay": `${index * 0.1}s` }}>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className={`skill-progress skill-${skill.color}`} style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="skills-radar-container" animation="fade-up" delay={0.4}>
          <div className="skills-radar">
            <div className="skills-radar-circles">
              <div className="skills-radar-circle"></div>
              <div className="skills-radar-circle"></div>
              <div className="skills-radar-circle"></div>
              <div className="skills-radar-circle"></div>
            </div>
            <div className="skills-radar-lines">
              <div className="skills-radar-line"></div>
              <div className="skills-radar-line"></div>
              <div className="skills-radar-line"></div>
              <div className="skills-radar-line"></div>
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
            <div className="skills-radar-shape">
              {getSkills().map((skill, index) => {
                const angle = (Math.PI * 2 * index) / getSkills().length
                const radius = (skill.level / 100) * 120
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const nextIndex = (index + 1) % getSkills().length
                const nextSkill = getSkills()[nextIndex]
                const nextAngle = (Math.PI * 2 * nextIndex) / getSkills().length
                const nextRadius = (nextSkill.level / 100) * 120
                const nextX = Math.cos(nextAngle) * nextRadius
                const nextY = Math.sin(nextAngle) * nextRadius

                return (
                  <svg
                    key={`line-${skill.name}`}
                    className="skills-radar-line-segment"
                    width="100%"
                    height="100%"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <line
                      x1={x + 120}
                      y1={y + 120}
                      x2={nextX + 120}
                      y2={nextY + 120}
                      stroke={`var(--${skill.color})`}
                      strokeWidth="2"
                      strokeOpacity="0.7"
                    />
                  </svg>
                )
              })}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
export default Skill