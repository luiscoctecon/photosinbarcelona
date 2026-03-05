import { Link } from 'react-router-dom'
import { Camera, ChevronRight } from 'lucide-react'

interface ServicePageProps {
  title: string
  description: string
  imageCount?: number
  faqs?: Array<{
    question: string
    answer: string
  }>
}

const ServicePageTemplate: React.FC<ServicePageProps> = ({
  title,
  description,
  imageCount = 6,
  faqs = [],
}) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[450px] bg-gradient-to-r from-accent to-primary-dark flex items-center justify-center">
        <div className="text-center text-primary-light px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-primary-gray">{description}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-primary-light border-b border-primary-gray py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-primary-gray">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-primary-dark font-semibold">{title}</span>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-dark">About This Service</h2>
          <p className="text-lg text-primary-gray leading-relaxed mb-4">{description}</p>
          <p className="text-lg text-primary-gray leading-relaxed">
            We specialize in delivering exceptional results that exceed expectations. Our team brings creativity,
            technical expertise, and attention to detail to every project.
          </p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-dark">Portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[...Array(imageCount)].map((_, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-lg aspect-square bg-primary-gray cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary-dark opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="text-primary-gray group-hover:text-primary-light group-hover:scale-110 transition-all duration-300" size={48} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-dark">Our Process</h2>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: 'Consultation',
                description: 'We discuss your vision, goals, and all the details to ensure we understand exactly what you want.',
              },
              {
                step: 2,
                title: 'Planning & Preparation',
                description: 'Our team prepares everything needed, including location scouting, equipment setup, and timing.',
              },
              {
                step: 3,
                title: 'Professional Shoot',
                description: 'We capture exceptional images using professional equipment and techniques.',
              },
              {
                step: 4,
                title: 'Editing & Delivery',
                description: 'Images are carefully edited and delivered in your preferred format and timeline.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-primary-light font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-dark mb-2">{item.title}</h3>
                  <p className="text-primary-gray leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-dark">Pricing</h2>
          <div className="bg-primary-light border-2 border-accent rounded-lg p-8 text-center mb-8">
            <p className="text-lg text-primary-gray mb-4">
              Custom packages available based on your requirements. Contact us for detailed pricing.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-primary-light px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-dark">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="border border-primary-gray rounded-lg p-6 cursor-pointer group">
                  <summary className="flex items-center justify-between font-bold text-primary-dark text-lg">
                    {faq.question}
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-primary-gray mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent to-primary-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-light mb-6">Ready to Book?</h2>
          <p className="text-xl text-primary-light mb-8 opacity-90">
            Let's create amazing images together. Contact us today!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-light text-accent px-10 py-4 rounded font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicePageTemplate
