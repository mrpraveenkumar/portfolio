"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Lightbulb,
  Heart,
  Calendar,
  Award,
  Zap,
  ArrowRight,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

// Preloader Component with Apple-style animation
function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 800)
          return 100
        }
        return prev + 1.5
      })
    }, 40)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 z-50 flex items-center justify-center">
      <div className="text-center space-y-12">
        {/* Apple-style loading animation */}
        <div className="relative">
          <div className="w-24 h-24 relative">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-700"></div>
            {/* Progress ring */}
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 transition-transform duration-300 ease-out"
              style={{ transform: `rotate(${progress * 3.6}deg)` }}
            ></div>
            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center">
              <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-light text-slate-800 dark:text-slate-200">Loading Portfolio</h2>
          <div className="w-80 mx-auto bg-slate-200 dark:bg-slate-700 rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  )
}

// Navigation Component with Apple-style glass morphism
function Navigation({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "interests", label: "Interests" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  if (!mounted) {
    return (
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-4xl px-4">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-xl shadow-slate-900/5">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="font-light text-xl">
              <span className="text-blue-600 font-medium">Alex</span>
              <span className="text-slate-700 ml-1">Johnson</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-light text-slate-600"
                >
                  {item.label}
                </button>
              ))}
              <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse"></div>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse"></div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-full">
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-4xl px-4">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-xl shadow-slate-900/5 dark:shadow-slate-900/20">
        <div className="flex items-center justify-between h-16 px-6">
          <div className="font-light text-xl">
            <span className="text-blue-600 dark:text-blue-400 font-medium">Alex</span>
            <span className="text-slate-700 dark:text-slate-300 ml-1">Johnson</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-light transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative ${
                  activeSection === item.id ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                )}
              </button>
            ))}
            {/* Desktop Navigation theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                console.log("Current theme:", theme) // Debug log
                setTheme(theme === "dark" ? "light" : "dark")
              }}
              className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 transition-all duration-300" />
              ) : (
                <Moon className="h-4 w-4 transition-all duration-300" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Navigation theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                console.log("Current theme:", theme) // Debug log
                setTheme(theme === "dark" ? "light" : "dark")
              }}
              className="rounded-full transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 transition-all duration-300" />
              ) : (
                <Moon className="h-4 w-4 transition-all duration-300" />
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-full">
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 text-sm font-light transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// 3D Card Component
function Card3D({ children, className = "", ...props }: any) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height
    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const rotateX = mousePosition.y * -10
  const rotateY = mousePosition.x * 10

  return (
    <div
      className={`transform-gpu transition-all duration-300 ease-out ${className}`}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/30 hover:shadow-3xl transition-shadow duration-300">
        {children}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "interests", "contact"]
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="w-40 h-40 mx-auto mb-8 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Alex Johnson"
                  width={160}
                  height={160}
                  className="relative rounded-full border-4 border-white/50 dark:border-slate-700/50 shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-light text-slate-800 dark:text-slate-100 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-medium">
                  Alex Johnson
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-light">
                Computer Engineering Student & Full-Stack Developer
              </p>

              <p className="text-lg text-slate-500 dark:text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                Passionate about creating innovative solutions through elegant code. Currently pursuing my degree in
                Computer Engineering while building amazing web applications and exploring cutting-edge technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button
                  size="lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-light shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 rounded-full px-8 py-6 text-lg font-light bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              <div className="flex justify-center space-x-6 pt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-12 h-12 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300"
                >
                  <Github className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-12 h-12 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-12 h-12 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300"
                >
                  <Mail className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-6">About Me</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light">Get to know me better</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Card3D>
                <div className="p-8">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="About me"
                    width={500}
                    height={500}
                    className="rounded-2xl w-full"
                  />
                </div>
              </Card3D>

              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    I'm a passionate Computer Engineering student at MIT with a love for creating innovative solutions
                    through technology. My journey in programming started in high school, and since then, I've been
                    constantly learning and building projects that solve real-world problems.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or working on personal projects that challenge my skills and creativity.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <Card3D className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 dark:text-slate-200">MIT Student</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">Class of 2025</p>
                      </div>
                    </div>
                  </Card3D>

                  <Card3D className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 dark:text-slate-200">Boston, MA</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">United States</p>
                      </div>
                    </div>
                  </Card3D>

                  <Card3D className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 dark:text-slate-200">Experience</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">3+ Years</p>
                      </div>
                    </div>
                  </Card3D>

                  <Card3D className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-800 dark:text-slate-200">Dean's List</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500">Academic Excellence</p>
                      </div>
                    </div>
                  </Card3D>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-6">Experience</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light">My professional journey</p>
            </div>

            <div className="space-y-8">
              <Card3D>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <Briefcase className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">
                          Software Engineering Intern
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Google • Summer 2024</p>
                      </div>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 rounded-full px-4 py-2">
                      Internship
                    </Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Worked on the Chrome team to improve web performance metrics and user experience. Developed features
                    using C++ and JavaScript that impacted millions of users worldwide.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      C++
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      Chrome DevTools
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      Performance
                    </Badge>
                  </div>
                </div>
              </Card3D>

              <Card3D>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">
                          Full-Stack Developer
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                          TechStart Inc. • Part-time (2023-2024)
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline" className="rounded-full px-4 py-2 border-slate-300 dark:border-slate-600">
                      Part-time
                    </Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Built and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with
                    designers and product managers to deliver user-centric solutions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      React
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      PostgreSQL
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      AWS
                    </Badge>
                  </div>
                </div>
              </Card3D>

              <Card3D>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                        <GraduationCap className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Research Assistant</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400">MIT AI Lab • 2023-Present</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="rounded-full px-4 py-2 border-slate-300 dark:border-slate-600">
                      Research
                    </Badge>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Conducting research on machine learning algorithms for computer vision applications. Published 2
                    papers in peer-reviewed conferences.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      TensorFlow
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      Computer Vision
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                      Research
                    </Badge>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-6">Skills</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light">Technologies I work with</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card3D>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Frontend</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">React/Next.js</span>
                        <span className="text-slate-500 dark:text-slate-500">90%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">TypeScript</span>
                        <span className="text-slate-500 dark:text-slate-500">85%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Tailwind CSS</span>
                        <span className="text-slate-500 dark:text-slate-500">95%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>

              <Card3D>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Backend</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Node.js</span>
                        <span className="text-slate-500 dark:text-slate-500">88%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Python</span>
                        <span className="text-slate-500 dark:text-slate-500">92%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">PostgreSQL</span>
                        <span className="text-slate-500 dark:text-slate-500">80%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>

              <Card3D>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Tools</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">AWS/Cloud</span>
                        <span className="text-slate-500 dark:text-slate-500">75%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Docker</span>
                        <span className="text-slate-500 dark:text-slate-500">70%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-3">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Git/GitHub</span>
                        <span className="text-slate-500 dark:text-slate-500">95%</span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-6">Projects</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light">Some of my recent work</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card3D className="group">
                <div className="overflow-hidden rounded-t-3xl">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="E-commerce Platform"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">E-commerce Platform</h3>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory
                    management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                      Next.js
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                      Stripe
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                      PostgreSQL
                    </Badge>
                  </div>
                </div>
              </Card3D>

              <Card3D className="group">
                <div className="overflow-hidden rounded-t-3xl">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="AI Chat Application"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">AI Chat Application</h3>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Real-time chat application with AI-powered responses, file sharing, and group chat functionality.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                      React
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                      Socket.io
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                      OpenAI
                    </Badge>
                  </div>
                </div>
              </Card3D>

              <Card3D className="group">
                <div className="overflow-hidden rounded-t-3xl">
                  <Image
                    src="/placeholder.svg?height=250&width=400"
                    alt="Task Management App"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Task Management App</h3>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Collaborative task management application with drag-and-drop functionality and team collaboration
                    features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                      Vue.js
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                      Node.js
                    </Badge>
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                      MongoDB
                    </Badge>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-6">Interests</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light">What I'm passionate about</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card3D className="text-center">
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Code className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Open Source</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Contributing to open source projects and building tools that help the developer community.
                  </p>
                </div>
              </Card3D>

              <Card3D className="text-center">
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Machine Learning</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Exploring AI and ML applications, particularly in computer vision and natural language processing.
                  </p>
                </div>
              </Card3D>

              <Card3D className="text-center">
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Photography</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Capturing moments and exploring the world through the lens, with a focus on landscape and street
                    photography.
                  </p>
                </div>
              </Card3D>

              <Card3D className="text-center">
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Robotics</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Building and programming robots, participating in competitions and exploring automation
                    technologies.
                  </p>
                </div>
              </Card3D>

              <Card3D className="text-center">
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Mentoring</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Teaching and mentoring junior students in programming and helping them start their tech journey.
                  </p>
                </div>
              </Card3D>

              <Card3D className="text-center">
                <div className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Hackathons</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Participating in hackathons and coding competitions to challenge myself and build innovative
                    solutions.
                  </p>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-6">Get In Touch</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-light">
                Let's work together on something amazing
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-8">Contact Information</h3>
                  <div className="space-y-6">
                    <Card3D>
                      <div className="p-6 flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">Email</p>
                          <p className="text-slate-600 dark:text-slate-400">alex.johnson@mit.edu</p>
                        </div>
                      </div>
                    </Card3D>

                    <Card3D>
                      <div className="p-6 flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">Phone</p>
                          <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                        </div>
                      </div>
                    </Card3D>

                    <Card3D>
                      <div className="p-6 flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">Location</p>
                          <p className="text-slate-600 dark:text-slate-400">Boston, MA</p>
                        </div>
                      </div>
                    </Card3D>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-8">Follow Me</h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-14 h-14 border-2 hover:scale-110 transition-all duration-300 bg-transparent"
                    >
                      <Github className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-14 h-14 border-2 hover:scale-110 transition-all duration-300 bg-transparent"
                    >
                      <Linkedin className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-14 h-14 border-2 hover:scale-110 transition-all duration-300 bg-transparent"
                    >
                      <Mail className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </div>

              <Card3D>
                <div className="p-8">
                  <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-2">Send me a message</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8">I'll get back to you as soon as possible</p>

                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-slate-700 dark:text-slate-300">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="mt-2 rounded-xl border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-slate-700 dark:text-slate-300">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="mt-2 rounded-xl border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="mt-2 rounded-xl border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-slate-700 dark:text-slate-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Project Collaboration"
                        className="mt-2 rounded-xl border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={4}
                        className="mt-2 rounded-xl border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-xl py-6 text-lg font-light shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-500 dark:text-slate-500 font-light">
              © {new Date().getFullYear()} Alex Johnson. Crafted with passion using Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
