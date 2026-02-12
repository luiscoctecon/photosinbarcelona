import { HeroSlider } from '../components/HeroSlider';
import { ServiceCard } from '../components/ServiceCard';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1627764164847-eb86d3ed27c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBwaG90b2dyYXBoeSUyMGNpdHl8ZW58MXx8fHwxNzcwOTA5OTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Photos in Barcelona',
    subtitle: 'Capturing moments that tell your unique story',
  },
  {
    image: 'https://images.unsplash.com/photo-1676979314455-4a8477176b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBhcmNoaXRlY3R1cmUlMjBnb3RoaWN8ZW58MXx8fHwxNzcwOTA5OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Professional Photography',
    subtitle: 'From products to personal brands, we bring your vision to life',
  },
  {
    image: 'https://images.unsplash.com/photo-1745848038063-bbb6fc8c8867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzA5MDk5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Quality & Creativity',
    subtitle: 'Experience photography that converts viewers into clients',
  },
];

const services = [
  {
    title: 'Product Photography',
    description: 'Showcase your products with stunning, high-quality images that drive sales.',
    image: 'https://images.unsplash.com/photo-1682078234868-412ec5566118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzcwODA3MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/product-photography',
  },
  {
    title: 'Personal Brand Photography',
    description: 'Build your personal brand with professional portraits that capture your essence.',
    image: 'https://images.unsplash.com/photo-1770058428104-9dab343b7ccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGJyYW5kJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcwOTA5OTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/personal-brand',
  },
  {
    title: 'Events Photography',
    description: 'Preserve the magic of your special events with dynamic, candid photography.',
    image: 'https://images.unsplash.com/photo-1709131518045-0aa4d3b90e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwcGFydHl8ZW58MXx8fHwxNzcwOTA5OTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/events',
  },
  {
    title: 'Real Estate Photography',
    description: 'Sell properties faster with professional photography that highlights every detail.',
    image: 'https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaW50ZXJpb3IlMjBsdXh1cnl8ZW58MXx8fHwxNzcwOTA5OTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/real-estate',
  },
  {
    title: 'Couples Photography',
    description: 'Capture the love and connection between you and your partner in beautiful Barcelona.',
    image: 'https://images.unsplash.com/photo-1621797005674-48e0150206da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwaG90b2dyYXBoeSUyMHJvbWFudGljfGVufDF8fHx8MTc3MDg5NjA2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/couples',
  },
];

export default function Home() {
  return (
    <div>
      <HeroSlider slides={heroSlides} />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of professional photography services designed to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 mb-12">
              We combine technical expertise with creative vision to deliver photography that not only looks stunning but also drives results for your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className="text-lg font-semibold mb-1">Projects Completed</div>
                <div className="text-gray-600">Satisfied clients across Barcelona</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <div className="text-lg font-semibold mb-1">Years Experience</div>
                <div className="text-gray-600">Mastering the art of photography</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-lg font-semibold mb-1">Client Satisfaction</div>
                <div className="text-gray-600">Dedicated to exceeding expectations</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
