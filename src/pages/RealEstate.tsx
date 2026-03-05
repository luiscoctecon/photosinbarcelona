import ServicePageTemplate from '../components/ServicePageTemplate'

const faqs = [
  {
    question: 'How long does a real estate photography session take?',
    answer:
      'Typically 1-3 hours depending on property size. Larger properties may require more time. We work efficiently without disrupting the space.',
  },
  {
    question: 'Do you offer drone photography?',
    answer:
      'Yes, we offer aerial drone photography to showcase exterior views, gardens, and surrounding areas. Additional licensing may apply.',
  },
  {
    question: 'Can you schedule a shoot around tenant schedules?',
    answer:
      'We understand tenant schedules and can arrange shoots at convenient times. We work professionally to minimize disruptions.',
  },
  {
    question: 'How many photos do we get?',
    answer:
      'Typically 30-50 edited photos per property depending on size. All images are optimized for MLS, web listings, and marketing materials.',
  },
]

export default function RealEstate() {
  return (
    <ServicePageTemplate
      title="Real Estate Photography"
      description="Showcase properties in their best light with stunning real estate photography that helps sell homes faster and at better prices."
      imageCount={8}
      faqs={faqs}
    />
  )
}
