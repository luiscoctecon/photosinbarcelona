import { HeroSlider } from '../components/HeroSlider';
import { Check } from 'lucide-react';
import { Link } from 'react-router';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1709131518045-0aa4d3b90e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwcGFydHl8ZW58MXx8fHwxNzcwOTA5OTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Events Photography',
    subtitle: 'Preserve the magic of your special moments',
  },
];

export default function Events() {
  return (
    <div>
      <HeroSlider slides={heroSlides} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Events Photography</h2>
            <p className="text-xl text-gray-600 mb-8">
              Every event tells a story, and we're here to capture every meaningful moment. From corporate gatherings to celebrations, we document the energy, emotion, and connections that make your event special.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">What We Cover</h3>
                <ul className="space-y-3">
                  {[
                    'Corporate events and conferences',
                    'Product launches',
                    'Birthday parties and celebrations',
                    'Networking events',
                    'Workshops and seminars',
                    'Private parties',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {[
                    'Candid and posed photography',
                    'Key moments and details',
                    'Group and individual shots',
                    'Venue and decoration photos',
                    'Fast turnaround time',
                    'High-resolution images',
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
              <h3 className="text-2xl font-bold mb-4">Our Event Photography Style</h3>
              <p className="text-gray-600 mb-6">
                We blend into your event, capturing authentic moments as they naturally unfold while also ensuring we get the important formal shots you need. Our unobtrusive approach means your guests can enjoy the event while we document it beautifully.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Pre-Event</h4>
                  <p className="text-gray-600">Venue details, setup, and atmosphere before guests arrive</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">During Event</h4>
                  <p className="text-gray-600">Candid moments, key speeches, interactions, and activities</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Highlights</h4>
                  <p className="text-gray-600">Important moments, group photos, and memorable interactions</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
              >
                Book Event Coverage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
