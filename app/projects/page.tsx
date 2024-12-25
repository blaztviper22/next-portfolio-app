import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects | Berthem S. Benitez Jr. Portfolio',
  description: 'Showcase of projects by John Doe, Full Stack Developer',
}

const projects = [
  {
    name: 'AI-Powered Task Manager',
    description: 'An intelligent task management application that uses machine learning to prioritize and categorize tasks.',
    details: `This project was built using React for the frontend and Node.js with Express for the backend. I integrated a machine learning model using TensorFlow.js to analyze task descriptions and automatically suggest priorities and categories.

    One of the main challenges I faced was optimizing the ML model to run efficiently in the browser. I solved this by implementing a worker thread to handle the ML processing, ensuring the main thread remained responsive.

    The innovation in this project lies in its ability to learn from user behavior over time, continuously improving its task categorization and priority suggestions. This creates a uniquely personalized experience for each user.`,
    link: 'https://github.com/johndoe/ai-task-manager',
    techStack: ['React', 'Node.js', 'Express', 'TensorFlow.js', 'MongoDB']
  },
  {
    name: 'Decentralized Social Media Platform',
    description: 'A blockchain-based social media platform that gives users full control over their data and content.',
    details: `This project was developed using React Native for cross-platform mobile support, with a backend built on Ethereum smart contracts. I used IPFS (InterPlanetary File System) for decentralized content storage.

    One of the biggest challenges was ensuring fast content delivery despite the decentralized nature of the storage. I overcame this by implementing a caching layer and content delivery network (CDN) for frequently accessed content, while still maintaining the benefits of decentralized storage.

    The innovative aspect of this project is its use of blockchain technology to create a censorship-resistant platform where users truly own their data. Users can monetize their content directly, without intermediaries, through integrated cryptocurrency transactions.`,
    link: 'https://github.com/johndoe/decentra-social',
    techStack: ['React Native', 'Ethereum', 'Solidity', 'IPFS', 'Web3.js']
  },
  {
    name: 'Real-Time Collaborative Code Editor',
    description: 'A web-based code editor that allows multiple developers to work on the same codebase simultaneously.',
    details: `This project was built using Next.js for the frontend, with a Node.js and Socket.io backend for real-time communication. I integrated Monaco Editor for a rich code editing experience.

    The main challenge was maintaining consistency across multiple clients editing the same file simultaneously. I solved this using Operational Transformation (OT) algorithms, ensuring that all clients converge to the same final state regardless of network latency.

    The innovation in this project is the integration of AI-powered code suggestions and real-time error checking. By leveraging OpenAI's Codex, the editor can provide context-aware code completions and suggestions, significantly boosting developer productivity in collaborative sessions.`,
    link: 'https://github.com/johndoe/collab-code',
    techStack: ['Next.js', 'Node.js', 'Socket.io', 'Monaco Editor', 'OpenAI Codex']
  },
]

const techStackLogos: { [key: string]: string } = {
  'React': '/logos/react.svg',
  'Node.js': '/logos/nodejs.svg',
  'Express': '/logos/express.svg',
  'TensorFlow.js': '/logos/tensorflow.svg',
  'MongoDB': '/logos/mongodb.svg',
  'React Native': '/logos/react.svg',
  'Ethereum': '/logos/ethereum.svg',
  'Solidity': '/logos/solidity.svg',
  'IPFS': '/logos/ipfs.svg',
  'Web3.js': '/logos/web3.svg',
  'Next.js': '/logos/nextjs.svg',
  'Socket.io': '/logos/socketio.svg',
  'Monaco Editor': '/logos/monaco.svg',
  'OpenAI Codex': '/logos/openai.svg',
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold">My Projects</h1>
      <div className="space-y-8">
        {projects.map((project) => (
          <Card key={project.name}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm whitespace-pre-line">{project.details}</p>
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="flex items-center bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                      {techStackLogos[tech] && (
                        <Image
                          src={techStackLogos[tech]}
                          alt={`${tech} logo`}
                          width={16}
                          height={16}
                          className="mr-2"
                        />
                      )}
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <Button asChild variant="outline">
                <Link href={project.link}>View on GitHub</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

