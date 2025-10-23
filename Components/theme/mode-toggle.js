"use client"

import { useState, useEffect } from "react"

export function ModeToggle() {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const initialTheme = savedTheme || systemTheme
    
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!mounted) {
    return <div className="h-10 w-10 rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="h-10 w-10 rounded-md border border-gray-300 bg-white p-2 transition-all hover:bg-gray-100 hover:scale-105 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700"
      aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="h-5 w-5 flex items-center justify-center text-sm">
        {theme === 'dark' ? '🌙' : '☀️'}
      </div>
    </button>
  )
}