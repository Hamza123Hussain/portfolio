// components/Navbar.js
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="bg-gray-900 text-gray-200 flex justify-between items-center p-4 fixed w-full top-0 left-0 z-50">
      <div className="text-xl font-bold">Hamza Hussain</div>
      <div className="flex gap-6 items-center">
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
          href="/resume.pdf" // Pointing to the resume file in the public directory
          download // This attribute suggests to the browser that it should download the file instead of opening it
          className="bg-teal-400 text-gray-900 py-2 px-4 rounded hover:bg-gray-900 hover:text-teal-400 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar
