import { HeroSlider } from '../components/HeroSlider';
import { Check } from 'lucide-react';
import { Link } from 'react-router';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzcwOTA5OTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Real Estate Photography',
    subtitle: 'Sell properties faster with stunning visuals',
  },
];

export default function RealEstate() {
  return (
    <div>
      <HeroSlider slides={heroSlides} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Real Estate Photography</h2>
            <p className="text-xl text-gray-600 mb-8">
              First impressions matter in real estate. Our professional photography showcases properties at their absolute best, helping you attract more buyers and close deals faster. Studies show that professionally photographed properties sell 32% faster.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Services Included</h3>
                <ul className="space-y-3">
                  {[
                    'Interior and exterior photography',
                    'HDR photography for balanced lighting',
                    'Wide-angle shots to showcase space',
                    'Twilight/dusk photography',
                    'Aerial drone photography',
                    'Virtual staging options',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Perfect For</h3>
                <ul className="space-y-3">
                  {[
                    'Residential properties',
                    'Luxury apartments and villas',
                    'Commercial real estate',
                    'Vacation rentals',
                    'New developments',
                    'Property management companies',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4">Why Professional Photography Matters</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">32%</div>
                  <p className="text-gray-600">Faster property sales</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">47%</div>
                  <p className="text-gray-600">Higher asking price achieved</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">118%</div>
                  <p className="text-gray-600">More online views</p>
                </div>
              </div>
              <p className="text-gray-600">
                Professional real estate photography is an investment that pays for itself many times over. Stand out from the competition and make every listing count.
              </p>
            </div>

            <div className="bg-accent/10 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Pre-Shoot Preparation</h4>
                    <p className="text-gray-600">We provide guidance on staging and preparing the property for the best results.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Photography Session</h4>
                    <p className="text-gray-600">Comprehensive shoot covering all rooms, features, and exterior areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Professional Editing</h4>
                    <p className="text-gray-600">HDR processing, color correction, and enhancement to make spaces shine.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Delivery</h4>
                    <p className="text-gray-600">24-48 hour turnaround for listing-ready images.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
              >
                Schedule a Shoot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
