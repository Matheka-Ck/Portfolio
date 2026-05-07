import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <Card className="border-accent-green/20 bg-accent-green-light/5">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl mb-4">Let&apos;s Work Together</CardTitle>
            <CardDescription className="text-lg">
              I&apos;m always interested in hearing about new projects and opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-8">
            <div className="flex gap-4 flex-wrap justify-center">
              <Button asChild size="lg" className="bg-accent-green hover:bg-accent-green/90 text-foreground">
                <a href="mailto:hello@example.com">Email Me</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent-green/30 hover:bg-accent-green/5">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent-green/30 hover:bg-accent-green/5">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Feel free to reach out at hello@example.com or connect with me on social media
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
