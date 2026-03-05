import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-accent' : 'text-primary-dark hover:text-accent'
  }

  return (
    <header className="sticky top-0 z-50 bg-primary-light border-b border-primary-gray shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-primary-dark">
            <span className="text-accent">📸</span>
            <span>Photos Barcelona</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`transition-colors ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/events" className={`transition-colors ${isActive('/events')}`}>
              Events
            </Link>
            <Link to="/brand" className={`transition-colors ${isActive('/brand')}`}>
              Brand
            </Link>
            <Link to="/product" className={`transition-colors ${isActive('/product')}`}>
              Product
            </Link>
            <Link to="/real-estate" className={`transition-colors ${isActive('/real-estate')}`}>
              Real Estate
            </Link>
            <Link to="/contact" className={`transition-colors ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-accent text-primary-light px-6 py-2 rounded hover:bg-opacity-90 transition-all font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-dark hover:text-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-primary-gray space-y-3">
            <Link
              to="/"
              className="block py-2 px-4 rounded hover:bg-primary-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/events"
              className="block py-2 px-4 rounded hover:bg-primary-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/brand"
              className="block py-2 px-4 rounded hover:bg-primary-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Brand
            </Link>
            <Link
              to="/product"
              className="block py-2 px-4 rounded hover:bg-primary-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link
              to="/real-estate"
              className="block py-2 px-4 rounded hover:bg-primary-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Real Estate
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4 rounded hover:bg-primary-gray transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block w-full bg-accent text-primary-light px-4 py-2 rounded hover:bg-opacity-90 transition-all font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
