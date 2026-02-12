import { Link } from 'react-router';
import { Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Photos in <span className="text-accent">Barcelona</span>
            </h3>
            <p className="text-gray-400">
              Professional photography services in Barcelona, capturing your moments with creativity and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/product-photography" className="text-gray-400 hover:text-accent transition-colors">
                  Product Photography
                </Link>
              </li>
              <li>
                <Link to="/personal-brand" className="text-gray-400 hover:text-accent transition-colors">
                  Personal Brand
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/real-estate" className="text-gray-400 hover:text-accent transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/couples" className="text-gray-400 hover:text-accent transition-colors">
                  Couples
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@photosinbarcelona.com" className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
                  <Mail size={18} />
                  hello@photosinbarcelona.com
                </a>
              </li>
              <li>
                <a href="tel:+34612345678" className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
                  <Phone size={18} />
                  +34 612 345 678
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors">
                  <Instagram size={18} />
                  @photosinbarcelona
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Photos in Barcelona. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
