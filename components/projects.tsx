import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management and payment integration.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard providing actionable insights with interactive charts and filters.',
    tags: ['React', 'D3.js', 'Express', 'MongoDB'],
    link: '#',
  },
  {
    title: 'Content Management System',
    description: 'Headless CMS with intuitive UI for managing digital content across multiple platforms.',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent-green-light/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-green/10 mb-4">
            <span className="text-sm font-medium text-accent-green">Featured Work</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects that showcase my skills and experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="link" className="justify-start p-0 h-auto">
                  View Project →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
