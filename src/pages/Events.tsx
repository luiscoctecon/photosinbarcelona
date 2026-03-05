import ServicePageTemplate from '../components/ServicePageTemplate'

const faqs = [
  {
    question: 'How long does an event photography session last?',
    answer:
      'Our event photography packages typically range from 2 to 10+ hours depending on your needs. We can customize the duration to match your event schedule.',
  },
  {
    question: 'Do you offer same-day edits?',
    answer:
      'Yes, we offer same-day edit services for additional cost. Selected images can be edited and displayed during your reception.',
  },
  {
    question: 'When will we get our photos?',
    answer:
      'Typically, edited images are delivered within 2-3 weeks of the event. Timelines can be adjusted based on package and requirements.',
  },
  {
    question: 'Do you provide albums or prints?',
    answer:
      'Yes, we offer premium leather-bound albums, fine art prints, and metal prints. These can be customized with your selected images.',
  },
]

export default function Events() {
  return (
    <ServicePageTemplate
      title="Events Photography"
      description="Capture the magic of your special moments. From weddings and celebrations to corporate events, we preserve memories that last a lifetime."
      imageCount={8}
      faqs={faqs}
    />
  )
}
