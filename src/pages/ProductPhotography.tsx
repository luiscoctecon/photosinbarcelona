import { HeroSlider } from '../components/HeroSlider';
import { Check } from 'lucide-react';
import { Link } from 'react-router';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1682078234868-412ec5566118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzcwODA3MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Product Photography',
    subtitle: 'Elevate your products with professional imagery that sells',
  },
];

export default function ProductPhotography() {
  return (
    <div>
      <HeroSlider slides={heroSlides} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Professional Product Photography</h2>
            <p className="text-xl text-gray-600 mb-8">
              Stand out in a competitive marketplace with stunning product photography that showcases your items in the best light. Our expertise helps brands increase conversions and build trust with customers.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {[
                    'Studio product photography',
                    'Lifestyle product shots',
                    'E-commerce ready images',
                    '360° product views',
                    'Detail and close-up shots',
                    'White background images',
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
                    'E-commerce businesses',
                    'Fashion and jewelry brands',
                    'Food and beverage products',
                    'Cosmetics and beauty',
                    'Electronics and gadgets',
                    'Handmade and artisan goods',
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
              <h3 className="text-2xl font-bold mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Consultation</h4>
                    <p className="text-gray-600">We discuss your product, brand, and vision to create the perfect shoot plan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Shoot Day</h4>
                    <p className="text-gray-600">Professional lighting, styling, and multiple angles to capture your product perfectly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Editing & Delivery</h4>
                    <p className="text-gray-600">Professional retouching and delivery of high-resolution, web-optimized images.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
