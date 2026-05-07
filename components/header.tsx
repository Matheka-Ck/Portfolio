import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="#" className="text-lg font-semibold text-foreground hover:text-accent-green transition-colors">
          Matheka
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
