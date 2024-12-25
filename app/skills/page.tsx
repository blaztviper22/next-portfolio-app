import type { Metadata } from 'next'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ReactIcon, NextJsIcon, NodeJsIcon, PythonIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Skills | Berthem S. Benitez Jr. Portfolio',
  description: 'Showcase of John Doe\'s technical skills, learning journey, and certifications',
}

const skills = [
  {
    name: 'React.js',
    icon: ReactIcon,
    description: `I mastered React.js through a combination of online courses and hands-on projects. I started with the official React documentation and then took an in-depth course on Udemy. The biggest challenge was understanding complex state management, which I overcame by building a large-scale application using Redux and Context API. This practical experience solidified my understanding of React's component lifecycle and hooks.`,
    certificates: ['React - The Complete Guide (Udemy)', 'Advanced React and Redux (Udemy)']
  },
  {
    name: 'Next.js',
    icon: NextJsIcon,
    description: `My Next.js journey began after I was comfortable with React. I learned through the excellent Next.js documentation and by migrating an existing React project to Next.js. The main challenge was grasping server-side rendering and static site generation concepts. I overcame this by participating in a hackathon where I built a blog platform using Next.js, which helped me understand these concepts in a practical context.`,
    certificates: ['Building Applications with Next.js (Frontend Masters)']
  },
  {
    name: 'Node.js',
    icon: NodeJsIcon,
    description: `I learned Node.js through a bootcamp that focused on full-stack JavaScript development. The bootcamp provided a structured learning path and real-world projects. My biggest hurdle was understanding asynchronous programming and callback hell. I conquered this by deep-diving into Promises and async/await, and by refactoring a complex API to use modern asynchronous patterns.`,
    certificates: ['The Complete Node.js Developer Course (Udemy)', 'Node.js, Express, MongoDB & More: The Complete Bootcamp (Udemy)']
  },
  {
    name: 'Python',
    icon: PythonIcon,
    description: `I picked up Python through a combination of self-study and an online course from MIT on edX. The challenge was switching mindset from JavaScript to Python's syntax and conventions. I overcame this by working on a data analysis project that leveraged Python's powerful libraries like Pandas and NumPy. This project helped me appreciate Python's strengths in data manipulation and scientific computing.`,
    certificates: ['Introduction to Computer Science and Programming Using Python (edX)', 'Python for Data Science and Machine Learning Bootcamp (Udemy)']
  },
]

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="mb-8 text-4xl font-bold">My Skills</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <Card key={skill.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <skill.icon className="h-6 w-6" />
                {skill.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              <div className="mt-auto">
                <h3 className="font-semibold mb-2">Certifications:</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.certificates.map((cert, index) => (
                    <Badge key={index} variant="secondary">{cert}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

