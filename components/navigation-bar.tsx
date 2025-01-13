import { Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

interface NavigationBarProps {
  onTitleClick: () => void
  onContributeClick: () => void
}

export function NavigationBar({ 
  onTitleClick,
  onContributeClick
}: NavigationBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <h2 
            className="text-2xl font-bold cursor-pointer hover:text-primary transition-colors"
            onClick={onTitleClick}
          >
            TapClack
          </h2>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={onContributeClick}
              variant="ghost"
              size="icon"
              className="hover:text-accent"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">Contribute on GitHub</span>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 