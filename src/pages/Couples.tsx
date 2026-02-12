import { HeroSlider } from '../components/HeroSlider';
import { Check } from 'lucide-react';
import { Link } from 'react-router';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1621797005674-48e0150206da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwaG90b2dyYXBoeSUyMHJvbWFudGljfGVufDF8fHx8MTc3MDg5NjA2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Couples Photography',
    subtitle: 'Capture your love story in beautiful Barcelona',
  },
];

export default function Couples() {
  return (
    <div>
      <HeroSlider slides={heroSlides} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Couples Photography</h2>
            <p className="text-xl text-gray-600 mb-8">
              Celebrate your love with a professional couples photoshoot in the stunning city of Barcelona. Whether you're visiting, celebrating an engagement, or simply want to document your relationship, we create beautiful, authentic images you'll treasure forever.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Session Types</h3>
                <ul className="space-y-3">
                  {[
                    'Engagement photoshoots',
                    'Anniversary sessions',
                    'Vacation couples photos',
                    'Proposal photography',
                    'Save-the-date photos',
                    'Just because sessions',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Iconic Barcelona Locations</h3>
                <ul className="space-y-3">
                  {[
                    'Park Güell',
                    'Gothic Quarter',
                    'Barceloneta Beach',
                    'Sagrada Familia area',
                    'El Born neighborhood',
                    'Montjuïc gardens',
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
              <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
              <p className="text-gray-600 mb-6">
                Our couples sessions are relaxed, fun, and natural. We guide you through poses and prompts that bring out genuine emotion and connection, ensuring you feel comfortable and look amazing.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Pre-Session Planning</h4>
                    <p className="text-gray-600">We'll discuss your vision, choose the perfect location, and plan the best time for lighting.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">The Photoshoot</h4>
                    <p className="text-gray-600">1-2 hour session at your chosen Barcelona location(s) with gentle guidance and direction.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Image Selection</h4>
                    <p className="text-gray-600">Review and select your favorite images from a curated online gallery.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Final Delivery</h4>
                    <p className="text-gray-600">Professionally edited high-resolution images delivered within one week.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-4">Session Tips</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">What to Wear</h4>
                  <p className="text-gray-600">Coordinate colors without being too matchy. Choose outfits that reflect your personal style and make you feel confident.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Best Times</h4>
                  <p className="text-gray-600">Golden hour (sunrise or sunset) provides the most beautiful, flattering light for outdoor sessions.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Bring Props</h4>
                  <p className="text-gray-600">Consider bringing items that are meaningful to your relationship - a blanket, flowers, or champagne.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Relax & Have Fun</h4>
                  <p className="text-gray-600">The best photos come when you're relaxed and enjoying each other's company. Trust the process!</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
              >
                Book Your Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
