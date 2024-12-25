/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Github, Mail, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { ContactModal } from '@/components/contact-modal'
import { GenerateResumeButton } from '@/components/generate-resume-button'

export const metadata: Metadata = {
  title: 'Berthem S. Benitez Jr. | Full Stack Developer',
  description: 'Portfolio of John Doe, a passionate Full Stack Developer',
}

const githubStats = {
  repositories: 25,
  stars: 150,
  contributions: 1000,
}

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl">
      <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <Image
            src="/BENITEZ, BERTHEM S JR100294.jpg"
            alt="John Doe"
            width={300}
            height={300}
            priority
            className="rounded-full"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="mb-4 text-4xl font-bold">Berthem S. Benitez Jr.</h1>
          <h2 className="mb-6 text-2xl font-semibold text-muted-foreground">Full Stack Developer</h2>
          <p className="mb-6 text-lg">
            Hello! I'm a passionate Full Stack Developer with a years of experience in freelance building web applications.
            I specialize in React, Node.js, and cloud technologies. Welcome to my portfolio!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="https://github.com/blaztviper22">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://www.linkedin.com/in/berthem-benitez-jr-452940294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <ContactModal>
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </ContactModal>
            <GenerateResumeButton />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">GitHub Stats</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>{githubStats.repositories}</CardTitle>
              <CardDescription>Repositories</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{githubStats.stars}</CardTitle>
              <CardDescription>Stars</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{githubStats.contributions}</CardTitle>
              <CardDescription>Contributions</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  )
}

