import AnimateOnScroll from "../component/AnimateOnScroll"
import "../Styles/contact.css"
import { useState } from "react"

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.email.includes("@") || formData.message.trim().length < 10) {
      alert("Please enter a valid email and a message with at least 10 characters.")
      setIsSubmitting(false)
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormData(initialFormData)
      
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="decoration decoration-pink contact-decoration-1"></div>
      <div className="decoration decoration-purple contact-decoration-2"></div>

      <div className="container">
        <AnimateOnScroll animation="fade-up">
          <div className="section-tag">Say Hello</div>
          <h2 className="section-title">Get In Touch</h2>
        </AnimateOnScroll>

        <div className="contact-container">
          <AnimateOnScroll className="contact-info" animation="fade-right" delay={0.2}>
            <div className="contact-card">
              <h3 className="contact-card-title">Let's Connect</h3>
              <p className="contact-card-text">
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to
                say hi, I'll do my best to get back to you!
              </p>

              <div className="contact-methods">
                {/* Email */}
                <div className="contact-method">
                  <div className="contact-method-icon">{/* Email SVG */}</div>
                  <div className="contact-method-content">
                    <h4 className="contact-method-title">Email</h4>
                    <a href="mailto:okekechidera992@gmail.com" className="contact-method-value">
                      okekechidera992@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="contact-method">
                  <div className="contact-method-icon">{/* LinkedIn SVG */}</div>
                  <div className="contact-method-content">
                    <h4 className="contact-method-title">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/okeke-chidera1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method-value"
                    >
                      linkedin.com/in/okeke-chidera
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="contact-method">
                  <div className="contact-method-icon">{/* GitHub SVG */}</div>
                  <div className="contact-method-content">
                    <h4 className="contact-method-title">GitHub</h4>
                    <a
                      href="https://github.com/Tersemajesty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-method-value"
                    >
                      github.com/Tersemajesty
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll className="contact-form-container" animation="fade-left" delay={0.3}>
            <div className="contact-card">
              {submitted ? (
                <div className="form-success">
                  {/* Success Icon SVG */}
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-text">Thank you for your message. I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <h3 className="contact-card-title">Send Me a Message</h3>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        aria-label="Your Name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        aria-label="Your Email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        aria-label="Subject"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        rows="5"
                        aria-label="Your Message"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary form-submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="loading-text">
                          <span className="loading-spinner"></span>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <svg className="btn-icon" ></svg>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

export default Contact
