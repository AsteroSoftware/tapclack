import { Link as LinkIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ResourceCard } from '@/components/resource-card'
import { Resource } from '@/lib/types'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ResourceSectionProps {
  title: string
  resources: Resource[]
  copiedLink: string | null
  copiedSectionLink: boolean
  isHighlighted: boolean
  onCopy: (link: string) => void
  onSectionCopy: () => void
  onView: (link: string) => void
  sectionRef: (el: HTMLDivElement | null) => void
}

export function ResourceSection({
  title,
  resources,
  copiedLink,
  copiedSectionLink,
  isHighlighted,
  onCopy,
  onSectionCopy,
  onView,
  sectionRef
}: ResourceSectionProps) {
  return (
    <section 
      ref={sectionRef}
      className={`mb-12 rounded-lg transition-colors p-4 ${
        isHighlighted ? 'bg-primary/20' : ''
      }`}
    >
      <div className="flex items-center gap-2 mb-4 group">
        <h2 className="text-2xl font-semibold">
          {title}
        </h2>
        <TooltipProvider>
          <Tooltip delayDuration={150}>
            <TooltipTrigger asChild>
              <Button
                variant="link"
                size="icon"
                onClick={onSectionCopy}
                className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
              >
                {copiedSectionLink ? (
                  <span className="text-green-500 text-sm ml-4">Copied!</span>
                ) : (
                  <LinkIcon className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="tooltip-fast">
              <p>Copy link to {title} section to clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.title}
            resource={resource}
            copiedLink={copiedLink}
            copyToClipboard={onCopy}
            markAsViewed={() => onView(resource.link)}
          />
        ))}
      </div>
    </section>
  )
} 