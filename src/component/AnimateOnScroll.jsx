import { useEffect, useRef, useState } from "react"
import "../Styles/animateOnScroll.css"


const AnimateOnScroll = ({ children, animation = "fade-up", delay = 0, className = "", ...props })=> {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )
  
      const currentRef = ref.current
      if (currentRef) {
        observer.observe(currentRef)
      }
  
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef)
        }
      }
    }, [])
  
    return (
      <div
        ref={ref}
        className={`animate-on-scroll ${isVisible ? "visible" : ""} ${animation} ${className}`}
        style={{ "--delay": `${delay}s` }}
        {...props}
      >
        {children}
      </div>
    )
  }
export default AnimateOnScroll