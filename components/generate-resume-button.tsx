'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

export function GenerateResumeButton() {
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const generateResume = async () => {
    setIsGenerating(true)
    // Simulate PDF generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsGenerating(false)

    // In a real application, you would generate the PDF here
    // and provide a download link or trigger a download

    toast({
      title: 'Resume Generated',
      description: 'Your resume has been generated and is ready for download.',
    })

    // Simulate file download
    const link = document.createElement('a')
    link.href = '/john-doe-resume.pdf' // This should be the actual path to your generated PDF
    link.download = 'john-doe-resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button onClick={generateResume} disabled={isGenerating} variant="outline">
      <FileText className="mr-2 h-4 w-4" />
      {isGenerating ? 'Generating...' : 'Generate Resume'}
    </Button>
  )
}

