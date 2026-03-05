import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FloatingBookingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-40 flex gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/34600000000?text=I'm%20interested%20in%20booking%20a%20photoshoot"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Booking Button */}
      <Link
        to="/contact"
        className="flex items-center justify-center px-4 py-3 rounded-full bg-accent text-primary-light shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 font-semibold text-sm whitespace-nowrap animate-pulse"
      >
        Book Now
      </Link>
    </div>
  )
}
