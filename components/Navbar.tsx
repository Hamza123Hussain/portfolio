'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gray-900 text-gray-200 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">Hamza Hussain</div>
          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="/"
              className={`hover:text-teal-400 transition-colors ${
                pathname === '/' ? 'text-teal-400' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`hover:text-teal-400 transition-colors ${
                pathname === '/about' ? 'text-teal-400' : ''
              }`}
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className={`hover:text-teal-400 transition-colors ${
                pathname === '/projects' ? 'text-teal-400' : ''
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`hover:text-teal-400 transition-colors ${
                pathname === '/contact' ? 'text-teal-400' : ''
              }`}
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              download
              className="bg-teal-400 text-gray-900 py-2 px-4 rounded hover:bg-gray-900 hover:text-teal-400 transition-colors"
            >
              Download Resume
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-teal-400 transition-colors focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-teal-400 transition-colors ${
                pathname === '/' ? 'text-teal-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-teal-400 transition-colors ${
                pathname === '/about' ? 'text-teal-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-teal-400 transition-colors ${
                pathname === '/projects' ? 'text-teal-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-teal-400 transition-colors ${
                pathname === '/contact' ? 'text-teal-400' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="/resume.pdf"
              download
              className="block bg-teal-400 text-gray-900 py-2 px-3 rounded-md text-base font-medium hover:bg-gray-900 hover:text-teal-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
