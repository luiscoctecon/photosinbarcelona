import { Link } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  link: string
  cta: string
}

export default function ServiceCard({ icon: Icon, title, description, link, cta }: ServiceCardProps) {
  return (
    <div className="bg-primary-light border border-primary-gray rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-accent group">
      {/* Icon */}
      <div className="mb-6 text-accent">
        <Icon size={48} className="group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 text-primary-dark group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-primary-gray mb-6 leading-relaxed">{description}</p>

      {/* CTA Button */}
      <Link
        to={link}
        className="inline-block text-accent font-semibold hover:gap-2 transition-all duration-300 group/cta flex items-center gap-1"
      >
        {cta}
        <span className="group-hover/cta:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  )
}
