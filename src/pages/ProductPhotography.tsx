import ServicePageTemplate from '../components/ServicePageTemplate'

const faqs = [
  {
    question: 'What types of products do you photograph?',
    answer:
      'We photograph all types of products including fashion, electronics, jewelry, cosmetics, food, and more. Our studio can handle various sizes and styles.',
  },
  {
    question: 'Do you provide product styling?',
    answer:
      'Yes, our team includes professional stylists who can style your products beautifully. We can also work with your creative direction.',
  },
  {
    question: 'What lighting equipment do you use?',
    answer:
      'We use professional studio lighting including softboxes, ring lights, and reflectors to ensure perfect lighting for every product shot.',
  },
  {
    question: 'Can you create lifestyle images with products?',
    answer:
      'Yes, we create both studio shots for e-commerce and lifestyle images showing products in real-world contexts for marketing materials.',
  },
]

export default function ProductPhotography() {
  return (
    <ServicePageTemplate
      title="Product Photography"
      description="Make your products shine with high-quality photography that increases sales and engagement on all platforms."
      imageCount={8}
      faqs={faqs}
    />
  )
}
