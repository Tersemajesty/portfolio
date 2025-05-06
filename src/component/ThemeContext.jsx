
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    } else if (prefersDark) {
      setTheme("dark")
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
