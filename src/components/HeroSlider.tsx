import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Events Photography',
    description: 'Capture the magic of your special moments with professional event photography.',
    cta: 'Book Event Photography',
    link: '/events',
    bgColor: 'bg-gradient-to-r from-primary-dark to-primary-dark',
  },
  {
    id: 2,
    title: 'Brand Photography',
    description: 'Elevate your brand with stunning professional photography.',
    cta: 'Book Brand Shoot',
    link: '/brand',
    bgColor: 'bg-gradient-to-r from-accent to-primary-dark',
  },
  {
    id: 3,
    title: 'Product Photography',
    description: 'Showcase your products in the best light with professional product photography.',
    cta: 'Book Product Photography',
    link: '/product',
    bgColor: 'bg-gradient-to-r from-primary-dark to-accent',
  },
  {
    id: 4,
    title: 'Real Estate Photography',
    description: 'Present your properties beautifully with professional real estate photography.',
    cta: 'Book Real Estate Photography',
    link: '/real-estate',
    bgColor: 'bg-gradient-to-r from-accent to-accent',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoplay(false)
  }

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoplay(false)
  }

  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-primary-dark overflow-hidden group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background */}
          <div className={`absolute inset-0 ${slide.bgColor}`} />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-light px-4 animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-gray max-w-2xl mx-auto">
                {slide.description}
              </p>
              <Link
                to={slide.link}
                className="inline-block bg-accent text-primary-light px-8 py-4 rounded text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-accent bg-opacity-50 hover:bg-opacity-100 text-primary-light p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-accent bg-opacity-50 hover:bg-opacity-100 text-primary-light p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-accent w-8' : 'bg-primary-light bg-opacity-50 hover:bg-opacity-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
