import { Link } from 'react-router-dom'
import { Camera } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-accent mb-6">
          <Camera size={80} className="mx-auto" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-primary-dark mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">Page Not Found</p>
        <p className="text-lg text-primary-gray mb-8 max-w-2xl mx-auto">
          Sorry, we couldn't find the page you're looking for. Let's get you back on track with our photography services.
        </p>
        <Link
          to="/"
          className="inline-block bg-accent text-primary-light px-8 py-4 rounded font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
