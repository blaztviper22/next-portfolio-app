import { Metadata } from 'next'
import { ContactInfo } from '@/components/contact-info'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact | Berthem S. Benitez Jr. Portfolio',
  description: 'Get in touch with John Doe, Full Stack Developer',
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold">Contact Me</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  )
}

