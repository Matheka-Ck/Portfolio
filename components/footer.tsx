export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {currentYear} Matheka. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy_terms" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#privacy_terms" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#sitemap" className="hover:text-foreground transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  )
}
