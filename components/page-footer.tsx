import { Github } from 'lucide-react'

export function PageFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mx-auto w-full max-w-7xl">
          {/* About Section */}
          <div className="max-w-sm">
            <h3 className="font-bold text-xl mb-2">About TapClack</h3>
            <p className="text-muted-foreground leading-relaxed">
              A community-driven collection of high-quality resources for software engineers. 
              Our mission is to help developers find the best learning materials to grow their skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/AsteroSoftware/tapclack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/AsteroSoftware/tapclack/issues/new" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Suggest a Resource
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/AsteroSoftware/tapclack/blob/main/CONTRIBUTING.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contribution Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} TapClack</p>
          <p className="mt-1">Built by <a href="https://asteroengineering.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">Astero Engineering</a></p>
        </div>
      </div>
    </footer>
  )
} 