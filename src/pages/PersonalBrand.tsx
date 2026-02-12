import { HeroSlider } from '../components/HeroSlider';
import { Check } from 'lucide-react';
import { Link } from 'react-router';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1770058428104-9dab343b7ccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGJyYW5kJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwOTA5OTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Personal Brand Photography',
    subtitle: 'Build your brand with authentic, professional portraits',
  },
];

export default function PersonalBrand() {
  return (
    <div>
      <HeroSlider slides={heroSlides} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Personal Brand Photography</h2>
            <p className="text-xl text-gray-600 mb-8">
              In today's digital world, your personal brand is everything. Stand out with professional portraits that capture your personality, expertise, and authenticity. Perfect for entrepreneurs, executives, and content creators.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {[
                    'Professional headshots',
                    'Lifestyle brand photos',
                    'Social media content',
                    'Behind-the-scenes shots',
                    'Multiple outfit changes',
                    'Various locations in Barcelona',
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
                    'Entrepreneurs and founders',
                    'Coaches and consultants',
                    'Content creators and influencers',
                    'Real estate agents',
                    'Corporate professionals',
                    'Artists and creatives',
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
              <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-6">
                We believe authentic personal branding photography should feel natural, not forced. Our sessions are collaborative and relaxed, ensuring you feel comfortable and confident in front of the camera.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Brand Discovery</h4>
                    <p className="text-gray-600">Understanding your brand, target audience, and how you want to be perceived.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Planning & Styling</h4>
                    <p className="text-gray-600">Selecting locations, outfits, and props that align with your brand identity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Photoshoot</h4>
                    <p className="text-gray-600">Relaxed, guided session capturing authentic moments and professional portraits.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Delivery</h4>
                    <p className="text-gray-600">Professionally edited images ready for your website, social media, and marketing materials.</p>
                  </div>
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
