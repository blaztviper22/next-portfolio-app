import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, MapPin, Mail, Linkedin, Github, Facebook } from 'lucide-react'

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+63 930 830-9534' },
  { icon: MapPin, label: 'Address', value: 'Nellie St., Sindangan, Zamboanga Del Norter' },
  { icon: Mail, label: 'Email', value: 'blaztviper22@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/berthem-benitez-jr-452940294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { icon: Github, label: 'GitHub', value: 'https://github.com/blaztviper22' },
  { icon: Facebook, label: 'Facebook', value: 'https://web.facebook.com/hackeer123asxd/' },
]

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <item.icon className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium leading-none">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

