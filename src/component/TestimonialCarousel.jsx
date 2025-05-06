import { useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import AnimateOnScroll  from "../component/AnimateOnScroll"
import "../Styles/testimonialcarousel.css"

const testimonials = [
  {
    id: 1,
    name: "Colin Victor",
    role: "Marketing Director",
    company: "CreativeMinds",
    image: "/images/profilepix.jpg",
    quote:
      "Working with this developer was an absolute pleasure! She transformed our vision into a beautiful, functional website that exceeded our expectations. Her attention to detail and creative approach made all the difference.",
    rating: 5,
  },
  {
    id: 2,
    name: "Cynthia Chioma",
    role: "Startup Founder",
    company: "TechLaunch",
    image: "/images/pix3.jpg",
    quote:
      "I was blown away by the quality of work. Not only did she deliver a stunning website, but she also provided valuable insights that improved our user experience. The project was completed ahead of schedule and the communication was excellent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Terse Majesty",
    role: "E-commerce Manager",
    company: "StyleBoutique",
    image: "/images/pix2.jpg",
    quote:
      "Our online store has never looked better! The responsive design works flawlessly across all devices, and our conversion rate has increased by 40% since the redesign. I highly recommend her services to anyone looking for quality front-end development.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Creative Director",
    company: "DesignHub",
    image: "/images/pix1.jpg",
    quote:
      "As a design agency, we have high standards for the developers we work with. She not only met but exceeded those standards with her technical skills and eye for design. Our clients have been thrilled with the results of our collaboration.",
    rating: 4,
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "Product Owner",
    company: "InnovateApp",
    image: "/images/picture.jpg",
    quote:
      "The attention to detail and commitment to creating a seamless user experience was impressive. Our app's interface is now intuitive, beautiful, and performs exceptionally well. We'll definitely be working together on future projects.",
    rating: 5,
  },
]

const TestimonialCarousel =() => {
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const autoplayOptions = {
    delay: 5000,
    stopOnInteraction: true,
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay(autoplayOptions)])

  useEffect(() => {
    if (emblaApi) {
      setCount(emblaApi.slideNodes().length)
      emblaApi.on("select", () => {
        setCurrent(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  const handlePrevious = () => {
    if (emblaApi) emblaApi.scrollPrev()
  }

  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext()
  }

  const goToSlide = (index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  return (
    <div className="testimonial-section">
      <div className="testimonial-decoration pink-circle"></div>
      <div className="testimonial-decoration purple-circle"></div>

      <div className="testimonial-container">
        <AnimateOnScroll animation="fade-up">
          <h2 className="testimonial-title">What my Clients Say</h2>
        </AnimateOnScroll>

        <AnimateOnScroll className="testimonial-carousel-container" animation="fade-up" delay={0.2}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial) => (
                <div className="embla__slide" key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-arrow carousel-arrow-prev"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button className="carousel-arrow carousel-arrow-next" onClick={handleNext} aria-label="Next testimonial">
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </AnimateOnScroll>

        <AnimateOnScroll className="carousel-dots" animation="fade-up" delay={0.3}>
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${current === index ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </AnimateOnScroll>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar-container">
          <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="testimonial-avatar" />
          <div className="testimonial-quote-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
          </div>
        </div>

        <div className="testimonial-author">
          <div className="testimonial-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`star ${i < testimonial.rating ? "filled" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={i < testimonial.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
            ))}
          </div>
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-role">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>

      <div className="testimonial-content">
        <p className="testimonial-quote">
          <span className="quote-mark opening">"</span>
          {testimonial.quote}
          <span className="quote-mark closing">"</span>
        </p>
      </div>
    </div>
  )
}
export default TestimonialCarousel