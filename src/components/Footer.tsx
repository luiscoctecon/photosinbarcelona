import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-primary-light mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Photos Barcelona</h3>
            <p className="text-primary-gray text-sm">
              Professional photography services capturing your most important moments in Barcelona.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-gray">
              <li>
                <Link to="/events" className="hover:text-accent transition-colors">
                  Events Photography
                </Link>
              </li>
              <li>
                <Link to="/brand" className="hover:text-accent transition-colors">
                  Brand Photography
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-accent transition-colors">
                  Product Photography
                </Link>
              </li>
              <li>
                <Link to="/real-estate" className="hover:text-accent transition-colors">
                  Real Estate Photography
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-gray">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-primary-gray hover:text-accent transition-colors">
                <Mail size={16} />
                <a href="mailto:info@photosbarcelona.com">info@photosbarcelona.com</a>
              </li>
              <li className="flex items-center gap-2 text-primary-gray hover:text-accent transition-colors">
                <Phone size={16} />
                <a href="https://wa.me/15035591769">+1 503-559-1769</a>
              </li>
              <li className="flex items-center gap-2 text-primary-gray">
                <MapPin size={16} />
                <span>Barcelona, Spain</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-primary-gray pt-8 mb-8">
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/luiscaptures_/"
              aria-label="Instagram"
              className="text-primary-gray hover:text-accent transition-colors"
            >
              <Instagram size={24} />
            </a>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-gray pt-8 text-center text-sm text-primary-gray">
          <p>&copy; {currentYear} Photos Barcelona. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
