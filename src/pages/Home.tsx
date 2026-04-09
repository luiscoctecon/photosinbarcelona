import { Link } from 'react-router-dom'
import { Camera, Sparkles, Package, Building2, Star } from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    icon: Camera,
    title: 'Events Photography',
    description: 'From weddings to corporate events, we capture every magical moment with professional precision.',
    link: '/events',
    cta: 'Learn More',
    
  },
  {
    icon: Sparkles,
    title: 'Brand Photography',
    description: 'Strengthen your brand with stunning professional photography that tells your story.',
    link: '/brand',
    cta: 'Learn More',
    
  },
  {
    icon: Package,
    title: 'Product Photography',
    description: 'Make your products shine with high-quality photography that increases sales and engagement.',
    link: '/product',
    cta: 'Learn More',
    
  },
  {
    icon: Building2,
    title: 'Real Estate Photography',
    description: 'Showcase properties in their best light with stunning real estate photography.',
    link: '/real-estate',
    cta: 'Learn More',
    
  },
]

const testimonials = [
  {
    name: 'Sarah Martinez',
    role: 'Wedding Planner',
    text: 'The best photographer I\'ve worked with. Professional, creative, and captured every moment beautifully.',
    rating: 5,
  },
  {
    name: 'Juan Garcia',
    role: 'Business Owner',
    text: 'Transformed our brand with stunning photography. Highly recommend for anyone serious about their brand.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Real Estate Agent',
    text: 'Our properties look incredible! The photography helped us sell faster and at better prices.',
    rating: 5,
  },
]

const portfolio = [
  {
    title: 'Couples Photo',
    image: 'https://res.cloudinary.com/dg6q2kxea/image/upload/v1773930736/_MG_1072_qhfqmp.webp',
  },
  {
    title: 'Event',
    image: 'https://res.cloudinary.com/dg6q2kxea/image/upload/v1770755847/photo3_inbib9.webp',
  },
  {
    title: 'Product Showcase',
    image: 'https://res.cloudinary.com/dg6q2kxea/image/upload/v1770747347/photo2_glwje8.jpg',
  },

  {
    title: 'Brand Campaign',
    image: 'https://res.cloudinary.com/dg6q2kxea/image/upload/v1770747382/product4_zs2nj9.jpg',
  },
  {
    title: 'Real Estate Property',
    image: 'https://res.cloudinary.com/dg6q2kxea/image/upload/v1767717488/samples/chair-and-coffee-table.jpg',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Our Services</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Professional photography services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Recent Work</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Explore our latest photography projects
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {portfolio.map((project) => (
              <div key={project.title} className="relative group overflow-hidden rounded-lg aspect-square bg-primary-gray">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary-dark opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <p className="text-primary-light font-semibold text-lg">{project.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-accent text-primary-light px-8 py-4 rounded font-semibold hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              Book a Photoshoot
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">What Clients Say</h2>
            <p className="text-xl text-primary-gray max-w-2xl mx-auto">
              Trusted by hundreds of satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-primary-gray bg-opacity-10 border border-primary-gray border-opacity-30 rounded-lg p-8 hover:border-accent transition-colors duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary-light mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-primary-light">{testimonial.name}</p>
                  <p className="text-primary-gray text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent to-primary-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-light mb-6">
            Ready to Book Your Photoshoot?
          </h2>
          <p className="text-xl text-primary-light mb-8 opacity-90">
            Let's create amazing images together. Get in touch to discuss your photography needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-light text-accent px-10 py-4 rounded font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
