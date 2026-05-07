import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="w-20 h-20 rounded-full bg-muted mb-8"></div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Software Developer & Problem Solver
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8 text-balance">
            I build elegant, user-focused applications that solve real problems. With expertise in modern web technologies, I transform ideas into high-quality digital experiences.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-accent-green hover:bg-accent-green/90 text-foreground">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-accent-green/30 text-foreground hover:bg-accent-green-light/10">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
