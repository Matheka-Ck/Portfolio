import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'Flask'],
  },
  {
    category: 'Backend',
    skills: ['Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub', 'VS Code'],
  },
  {
    category: 'Core Competencies',
    skills: ['Problem Solving', 'System Design', 'Code Quality', 'Testing', 'Performance Optimization', 'Agile'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and skills I&apos;ve developed through professional experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((skillGroup, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
