import { forwardRef } from 'react'
import { Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ContributeSectionProps {
  sectionRef?: (el: HTMLDivElement | null) => void
}

export const ContributeSection = forwardRef<HTMLDivElement, ContributeSectionProps>(
  function ContributeSection({ sectionRef }, ref) {
    return (
      <Card 
        ref={(el) => {
          if (typeof ref === 'function') ref(el)
          if (sectionRef) sectionRef(el)
        }} 
        className="mt-8 mb-16" 
        id="contribute-section"
      >
        <CardHeader>
          <CardTitle>Contribute to this list!</CardTitle>
          <CardDescription>
            Help us grow this resource by suggesting new links or improvements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We&apos;re always looking for valuable resources to add to this list. If you know of a great tool, article, or resource that could benefit new engineers and computer scientists, we&apos;d love to hear about it!
          </p>
          <Button asChild>
            <a href="https://github.com/AsteroSoftware/tapclack" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Contribute on GitHub
            </a>
          </Button>
        </CardContent>
      </Card>
    )
  }
)

ContributeSection.displayName = 'ContributeSection' 