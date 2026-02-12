import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <Link
      to={link}
      className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-2xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end">
        <div className="p-6 text-white w-full">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-200 mb-4">{description}</p>
          <div className="flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
            <span>Learn More</span>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
}
