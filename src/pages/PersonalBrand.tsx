import ServicePageTemplate from '../components/ServicePageTemplate'

const faqs = [
  {
    question: 'What is included in a brand photography session?',
    answer:
      'Our brand photography packages include professional headshots, team photos, lifestyle shots, and branded content tailored to your business needs.',
  },
  {
    question: 'How many final images do we receive?',
    answer:
      'Package sizes vary, but typically include 50-150 edited images depending on the scope and session length you select.',
  },
  {
    question: 'Can you help with creative direction?',
    answer:
      'Absolutely! Our creative team works with you to develop concepts that align with your brand identity and marketing goals.',
  },
  {
    question: 'How can we use these photos?',
    answer:
      'Your brand photos can be used for websites, social media, marketing materials, presentations, and any other business communications with unlimited usage rights.',
  },
]

export default function PersonalBrand() {
  return (
    <ServicePageTemplate
      title="Brand Photography"
      description="Strengthen your brand with stunning professional photography that tells your story and connects with your audience."
      imageCount={8}
      faqs={faqs}
    />
  )
}
