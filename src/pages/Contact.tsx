import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'events',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', serviceType: 'events', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 md:h-96 bg-gradient-to-r from-accent to-primary-dark flex items-center justify-center">
        <div className="text-center text-primary-light px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Let's Connect</h1>
          <p className="text-xl md:text-2xl text-primary-gray">Book your photoshoot or inquire about our services</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-primary-dark mb-8">Contact Information</h2>

            {/* Email */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0">
                <Mail className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-1">Email</h3>
                <a href="mailto:info@photosbarcelona.com" className="text-black hover:text-accent transition-colors">
                  info@photosbarcelona.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0">
                <Phone className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-1">Phone</h3>
                <a href="tel:+34637969822" className="text-black hover:text-accent transition-colors">
                  +34 637 969 822
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 mb-8">
              <div className="flex-shrink-0">
                <MapPin className="text-accent" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-primary-dark mb-1">Location</h3>
                <p className="text-black">Barcelona, Spain</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/15035591769?text=I'm%20interested%20in%20booking%20a%20photoshoot"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
            >
              <span>💬</span> WhatsApp Us
            </a>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-primary-dark mb-8">Booking Form</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded text-green-700">
                Thank you for your inquiry! We'll get back to you soon with a custom quote.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-gray rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-gray rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-primary-dark mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-primary-gray rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20"
                  placeholder="+34 600 000 000"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-primary-dark mb-2">
                  Type of Shoot *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-gray rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20"
                >
                  <option value="events">Events Photography</option>
                  <option value="brand">Brand Photography</option>
                  <option value="product">Product Photography</option>
                  <option value="real-estate">Real Estate Photography</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-primary-gray rounded focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20"
                  placeholder="Tell us about your project, date, location, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-accent text-primary-light px-8 py-4 rounded font-bold text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                Send Inquiry
              </button>
            </form>

            <p className="text-sm text-primary-gray mt-4">* Required fields</p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-20 h-96 bg-primary-gray relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-gray opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-primary-light">
            <p className="text-2xl font-bold mb-2">📍 Barcelona, Spain</p>
            <p className="text-lg opacity-75">We're located in the heart of Barcelona</p>
          </div>
        </div>
      </section>
    </div>
  )
}
