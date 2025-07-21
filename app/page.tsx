"use client"

import type React from "react"
import Head from 'next/head'
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
  Shield,
  Cloud,
  BarChart,
  Cpu,
  Trophy,
  Clock,
  FileText,
  Brain,
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
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      // Calculate scroll percentage relative to viewport height
      const scrollPosition = window.scrollY
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollPosition / windowHeight) * 100

      // Set scroll progress based on percentage thresholds
      if (scrollPercentage <= 5) {
        setScrollProgress(0) // No reduction
      } else if (scrollPercentage <= 10) {
        setScrollProgress(1) // 10% reduction
      } else if (scrollPercentage <= 15) {
        setScrollProgress(2) // 15% reduction
      } else {
        setScrollProgress(3) // 30% reduction
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getNavWidth = () => {
    switch (scrollProgress) {
      case 0:
        return 'w-[95%]'
      case 1:
        return 'w-[85%]' // 10% reduction
      case 2:
        return 'w-[80%]' // 15% reduction
      case 3:
        return 'w-[65%]' // 30% reduction
      default:
        return 'w-[95%]'
    }
  }

  const getNavHeight = () => {
    switch (scrollProgress) {
      case 0:
        return 'h-16 px-6'
      case 1:
        return 'h-14 px-5'
      case 2:
        return 'h-12 px-4'
      case 3:
        return 'h-12 px-4'
      default:
        return 'h-16 px-6'
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
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
              <span className="text-blue-600 font-medium">Praveen</span>
              <span className="text-slate-700 ml-1">Kumar</span>
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
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-700 ease-in-out ${getNavWidth()}`}>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-xl shadow-slate-900/5 dark:shadow-slate-900/20">
        <div className={`flex items-center justify-between transition-all duration-700 ease-in-out ${getNavHeight()}`}>
          <div className={`font-light transition-all duration-700 ${scrollProgress > 0 ? 'text-lg' : 'text-xl'}`}>
            <span className="text-blue-600 dark:text-blue-400 font-medium">Praveen</span>
            <span className="text-slate-700 dark:text-slate-300 ml-1">Kumar</span>
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "certifications", "skills", "projects", "interests", "contact"]
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

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />
  }

  return (
    <>
      <Head>
        <title>Praveen Kumar - Computer Engineering Student & Data Science</title>
        <meta name="description" content="Computer Engineering student specializing in Data Science, Data Science passionate about creating innovative solutions through elegant code." />
        
        {/* Keywords */}
        <meta name="keywords" content="Praveen Kumar, Full Stack Developer, Computer Engineering, AI ML, Web Development, Portfolio, Software Engineer, Kanpur" />
        
        {/* Canonical URLs */}
        <link rel="canonical" href="https://www.praveenkumar.education/" />
        <link rel="alternate" href="https://mrpraveenkumar.vercel.app/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.praveenkumar.education/" />
        <meta property="og:title" content="Praveen Kumar - Computer Engineering Student & Data Science" />
        <meta property="og:description" content="Computer Engineering student specializing in Data Science, Data Science passionate about creating innovative solutions through elegant code." />
        <meta property="og:image" content="/developer-images/1.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.praveenkumar.education/" />
        <meta property="twitter:title" content="Praveen Kumar - Computer Engineering Student & Data Science" />
        <meta property="twitter:description" content="Computer Engineering student specializing in Data Science, Data Science passionate about creating innovative solutions through elegant code." />
        <meta property="twitter:image" content="/developer-images/1.png" />
        
        {/* Additional SEO tags */}
        <meta name="author" content="Praveen Kumar" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        
        {/* Language and Region */}
        <meta property="og:locale" content="en_IN" />
        <meta name="language" content="English" />
        
        {/* Additional Meta Information */}
        <meta name="application-name" content="Praveen Kumar Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Praveen Kumar" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
      </Head>

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
                    src="/developer-images/1.png?height=160&width=160"
                    alt="Praveen Kumar"
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
                    Praveen Kumar
                  </span>
                </h1>

                <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-light">
                  Computer Engineering Student & Data Science
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
                    <a
                      href="https://drive.google.com/uc?export=download&id=1FfdSgxjxqS-eZaYPNcIXxaGEGbxEQs_A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline text-inherit"
                    >
                      Download Resume
                    </a>
                  </Button>
                </div>

                <div className="flex justify-center space-x-6 pt-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-12 h-12 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300"
                  >
                    <a href="https://github.com/mrpraveenkumar" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-12 h-12 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300"
                  >
                    <a href="https://www.linkedin.com/in/mr-praveenkumar/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-12 h-12 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300"
                  >
                    <a href="mailto:praveenkumar1202398@gmail.com">
                    <Mail className="h-6 w-6" />
                    </a>
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

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <Card3D>
                  <div className="p-8">
                    <Image
                      src="/developer-images/2.png?height=500&width=500"
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
                      I'm a dedicated Computer Science and Engineering student specializing in Data Science at Maharana Pratap Engineering College. With a strong passion for ethical hacking and web development, I strive to create secure and intelligent solutions that make a real-world impact.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                      My tech journey began with curiosity in cybersecurity and programming, and it has grown into a mission to build innovative tools, websites, and applications. Whether it's contributing to security-focused projects, experimenting with AI models, or developing full-stack platforms, I enjoy pushing my limits through hands-on learning.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <Card3D className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">MPEC Student</p>
                          <p className="text-sm text-slate-500 dark:text-slate-500">Batch of 2022</p>
                        </div>
                      </div>
                    </Card3D>

                    <Card3D className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">Kanpur, UP</p>
                          <p className="text-sm text-slate-500 dark:text-slate-500">India</p>
                        </div>
                      </div>
                    </Card3D>

                    <Card3D className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Lightbulb className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">Tech Enthusiast</p>
                          <p className="text-sm text-slate-500 dark:text-slate-500">Problem Solver</p>
                        </div>
                      </div>
                    </Card3D>

                    <Card3D className="p-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">Coding Journey</p>
                          <p className="text-sm text-slate-500 dark:text-slate-500">Since 2022</p>
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
                          <Code className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">
                            Problem Solving & Competitive Programming
                          </h3>
                          <p className="text-lg text-slate-600 dark:text-slate-400">Self-Initiated Learning • Ongoing</p>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 rounded-full px-4 py-2">
                        Fresher
                      </Badge>
                    </div>
                    <div className="space-y-4 text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <p>Solved 150+ data structure and algorithm problems on LeetCode, focusing on optimization and efficient solutions.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <p>Practiced over 30+ problems on GeeksforGeeks, strengthening fundamental algorithm concepts.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <p>Actively participated in CodeChef contests to improve problem-solving speed and accuracy.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <p>Enhanced programming skills through 100+ challenges on HackerRank, earning Achievements in domains like Problem Solving, Python, and SQL.</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <p>Strengthened debugging, time complexity analysis, and real-world algorithm implementation skills.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        LeetCode
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        GeeksforGeeks
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        CodeChef
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        HackerRank
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        DSA
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Algorithms
                      </Badge>
                    </div>
                  </div>
                </Card3D>

                <Card3D>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                          <Trophy className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">
                            Achievements & Certifications
                          </h3>
                          <p className="text-lg text-slate-600 dark:text-slate-400">Online Learning Platforms</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="rounded-full px-4 py-2 border-slate-300 dark:border-slate-600">
                        Ongoing
                      </Badge>
                    </div>
                    <div className="space-y-4 text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                        <p>Problem Solving (Basic) Certificate from HackerRank</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                        <p>Python Programming Certificate from HackerRank</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                        <p>SQL (Basic) Certificate from HackerRank</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                        <p>Consistent problem solver with daily practice commitment</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Problem Solving
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Python
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        SQL
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Certifications
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
                          <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Education</h3>
                          <p className="text-lg text-slate-600 dark:text-slate-400">Academic Background</p>
                        </div>
                      </div>
                    </div>

                    {/* Bachelor's Degree */}
                    <div className="space-y-6 mb-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-medium text-slate-800 dark:text-slate-200">
                            Bachelor of Technology in Data Science
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            Maharana Pratap Engineering College, Kanpur
                          </p>
                        </div>
                        <Badge 
                          className={`${
                            new Date() > new Date('2026-05-01') 
                              ? 'bg-green-500' 
                              : 'bg-blue-500'
                          } text-white border-0 rounded-full px-4 py-2`}
                        >
                          {new Date() > new Date('2026-05-01') ? 'Completed' : 'Pursuing'}
                      </Badge>
                    </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                          Aug 2022 - May 2026
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 font-medium">
                          CGPA: 8.09
                        </span>
                      </div>
                    </div>

                    {/* Intermediate */}
                    <div className="space-y-4 mb-8 border-t border-slate-200 dark:border-slate-700 pt-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-medium text-slate-800 dark:text-slate-200">
                            Intermediate (XII)
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            Pt Deendayal Inter College, Chikasi Hamirpur
                          </p>
                        </div>
                        <Badge 
                          className="bg-green-500 text-white border-0 rounded-full px-4 py-2"
                        >
                          Completed
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                          Completed March 2022
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 font-medium">
                          Percentage: 77%
                        </span>
                      </div>
                    </div>

                    {/* High School */}
                    <div className="space-y-4 border-t border-slate-200 dark:border-slate-700 pt-8">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-medium text-slate-800 dark:text-slate-200">
                            High School (X)
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400">
                            Pt Deendayal Inter College, Chikasi Hamirpur
                          </p>
                        </div>
                        <Badge 
                          className="bg-green-500 text-white border-0 rounded-full px-4 py-2"
                        >
                          Completed
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600 dark:text-slate-400">
                          Completed March 2020
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 font-medium">
                          Percentage: 87%
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Data Science
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        B.Tech
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Computer Science
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Academic Excellence
                      </Badge>
                    </div>
                  </div>
                </Card3D>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-light text-slate-800 dark:text-slate-100 mb-6">Certifications</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-light">Professional development and achievements</p>
              </div>

              <div className="space-y-8">
                <Card3D>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                          <Award className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">
                            HTML & CSS Bootcamp
                          </h3>
                          <p className="text-lg text-slate-600 dark:text-slate-400">
                            LetsUpgrade, in collaboration with NSDC, GDG MAD & ITM Edutech Training Pvt. Ltd.
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 rounded-full px-4 py-2">
                        3 Days
                      </Badge>
                    </div>
                    <div className="space-y-4 text-slate-600 dark:text-slate-400 mb-6">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-blue-500" />
                        <p>Duration: 6 Jan 2025 – 8 Jan 2025</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <p>Issued on: 24 Jan 2025</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <p>Certificate No.: LUEHTMLJAN1252774</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <ExternalLink className="h-5 w-5 text-blue-500" />
                        <a 
                          href="https://verify.letsupgrade.in/certificate/LUEHTMLJAN1252774"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 transition-colors"
                        >
                          Verify Certificate
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        HTML
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        CSS
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Web Development
                      </Badge>
                    </div>
                  </div>
                </Card3D>

                <Card3D>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                          <Brain className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">
                            Artificial Intelligence Workshop
                          </h3>
                          <p className="text-lg text-slate-600 dark:text-slate-400">
                            Techkriti'25, IIT Kanpur
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline" className="rounded-full px-4 py-2 border-slate-300 dark:border-slate-600">
                        Workshop
                      </Badge>
                    </div>
                    <div className="space-y-4 text-slate-600 dark:text-slate-400 mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-green-500" />
                        <p>IIT Kanpur</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-green-500" />
                        <p>Issued by: Techkriti'25</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Artificial Intelligence
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Machine Learning
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-4 py-2 bg-slate-100 dark:bg-slate-800">
                        Workshop
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
                      <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Programming</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">Python</span>
                          <span className="text-slate-500 dark:text-slate-500">50%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">C/C++</span>
                          <span className="text-slate-500 dark:text-slate-500">80%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">Docker</span>
                          <span className="text-slate-500 dark:text-slate-500">20%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">Kubernetes</span>
                          <span className="text-slate-500 dark:text-slate-500">20%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{ width: "20%" }}
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
                        <BarChart className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Data Visualization</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">Excel</span>
                          <span className="text-slate-500 dark:text-slate-500">50%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">PowerPoint</span>
                          <span className="text-slate-500 dark:text-slate-500">90%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">Power BI</span>
                          <span className="text-slate-500 dark:text-slate-500">30%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">Word</span>
                          <span className="text-slate-500 dark:text-slate-500">90%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
                            style={{ width: "90%" }}
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
                        <Cpu className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Computer Fundamentals</h3>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">AI/ML</span>
                          <span className="text-slate-500 dark:text-slate-500">20%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">Cloud Computing</span>
                          <span className="text-slate-500 dark:text-slate-500">40%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">Computer Networks</span>
                          <span className="text-slate-500 dark:text-slate-500">50%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-3">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">Operating Systems</span>
                          <span className="text-slate-500 dark:text-slate-500">50%</span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                            style={{ width: "50%" }}
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
                      src="/developer-images/Projects/w3forcast.png"
                      alt="W3FORCAST - Weather Prediction Website"
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">W3FORCAST</h3>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <a href="https://w3forcast.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      Advanced weather prediction and forecast platform powered by AI. Features real-time weather updates, 
                      5-day forecasts, and machine learning-based weather predictions with an intuitive interface.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                        Weather API
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                        TailwindCSS
                      </Badge>
                    </div>
                  </div>
                </Card3D>

                <Card3D className="group">
                  <div className="overflow-hidden rounded-t-3xl">
                    <Image
                      src="/developer-images/Projects/codehex.png"
                      alt="CODEHEX - Tech Blog Website"
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">CODEHEX</h3>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <a href="https://codehex-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      Modern tech blog platform built with Next.js, featuring a sleek design, dynamic content loading, 
                      and comprehensive coverage of programming and technology topics.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                        React
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                        TypeScript
                      </Badge>
                    </div>
                  </div>
                </Card3D>

                <Card3D className="group">
                  <div className="overflow-hidden rounded-t-3xl">
                    <Image
                      src="/developer-images/Projects/portfolio.png"
                      alt="Personal Portfolio Website"
                      width={400}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Portfolio</h3>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <a href="https://mrpraveenkumar.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      Personal portfolio website showcasing my projects and skills. Features a modern UI, smooth animations, 
                      dark mode support, and responsive design across all devices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                        TailwindCSS
                      </Badge>
                      <Badge variant="secondary" className="rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800">
                        Framer Motion
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
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Hackathons</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Passionate about participating in hackathons to solve real-world problems, innovate new solutions, and collaborate with fellow developers.
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
                      Exploring AI and ML applications, with a focus on deep learning, neural networks, and practical implementations in real-world scenarios.
                    </p>
                  </div>
                </Card3D>

                <Card3D className="text-center">
                  <div className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Code className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Data Structures</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Passionate about algorithmic problem-solving and implementing efficient data structures to optimize software performance.
                    </p>
                  </div>
                </Card3D>

                <Card3D className="text-center">
                  <div className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Cyber Security</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Dedicated to understanding and implementing security best practices, ethical hacking, and protecting digital assets from cyber threats.
                    </p>
                  </div>
                </Card3D>

                <Card3D className="text-center">
                  <div className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Github className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Open Source</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Contributing to open source projects and building tools that help the developer community grow and innovate together.
                    </p>
                  </div>
                </Card3D>

                <Card3D className="text-center">
                  <div className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Cloud className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 dark:text-slate-200 mb-4">Cloud Computing</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Exploring cloud technologies and platforms to build scalable, reliable, and efficient cloud-native applications.
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
                            <p className="text-slate-600 dark:text-slate-400">
                              <a href="mailto:praveenkumar1202398@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                praveenkumar1202398@gmail.com
                              </a>
                            </p>
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
                            <p className="text-slate-600 dark:text-slate-400">+91 74609 62164</p>
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
                            <p className="text-slate-600 dark:text-slate-400">Kanpur, UP</p>
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
                        <a href="https://github.com/mrpraveenkumar" target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-14 h-14 border-2 hover:scale-110 transition-all duration-300 bg-transparent"
                      >
                        <a href="https://www.linkedin.com/in/mr-praveenkumar/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-14 h-14 border-2 hover:scale-110 transition-all duration-300 bg-transparent"
                      >
                        <a href="mailto:praveenkumar1202398@gmail.com">
                        <Mail className="h-6 w-6" />
                        </a>
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
                © {new Date().getFullYear()} Praveen Kumar. Crafted with passion using Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
