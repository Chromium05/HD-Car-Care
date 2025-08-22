"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { MenuIcon, XIcon } from "lucide-react"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const navigationItems = [
    { name: "Beranda", path: "/", id: "home" },
    { name: "Tentang Kami", path: "/", id: "about" },
    { name: "Layanan", path: "/layanan", id: null },
    { name: "Galeri", path: "/", id: "gallery" },
    { name: "Testimoni", path: "/", id: "testimonials" },
    { name: "Hubungi Kami", path: "/", id: "contact" },
  ]

  const handleNavClick = (item: (typeof navigationItems)[0]) => {
    if (item.path === "/layanan") {
      setMobileMenuOpen(false)
      return
    }

    if (item.id) {
      scrollToSection(item.id)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-900/95 backdrop-blur-sm py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className={`text-2xl font-bold tracking-wide ${isScrolled ? "text-green-400" : "text-white"}`}>
            HD <span className="text-white">Car Care</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) =>
            item.path === "/layanan" ? (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium hover:text-green-400 transition-colors ${
                  location.pathname === item.path
                    ? "text-green-400"
                    : isScrolled
                      ? "text-gray-200"
                      : "text-white hover:text-green-300"
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium hover:text-green-400 transition-colors ${
                  isScrolled ? "text-gray-200" : "text-white hover:text-green-300"
                }`}
              >
                {item.name}
              </button>
            ),
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-gray-200" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-sm absolute top-full left-0 right-0 py-6 shadow-lg">
          <div className="container mx-auto px-6">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) =>
                item.path === "/layanan" ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium py-2 hover:text-green-400 transition-colors text-left ${
                      location.pathname === item.path ? "text-green-400" : "text-gray-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-medium text-gray-200 py-2 hover:text-green-400 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ),
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}