"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

type ThemeMode = "light" | "dark"

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light")

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as ThemeMode) ||
      "light"
    setTheme(current)
  }, [])

  const toggleTheme = () => {
    const next: ThemeMode = theme === "light" ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("theme", next)
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface2 px-3 py-2 text-sm font-medium text-foreground transition hover:bg-surface"
    >
      {theme === "light" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  )
}
