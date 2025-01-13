import { LinkIcon } from 'lucide-react'
import { Resource } from '@/lib/types'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

interface ResourceCardProps {
  resource: Resource
  copiedLink: string | null
  copyToClipboard: (link: string) => void
  markAsViewed: () => void
}

export function ResourceCard({
  resource,
  copiedLink,
  copyToClipboard,
  markAsViewed,
}: ResourceCardProps) {
  return (
    <div className="group relative rounded-xl">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.slate.50)),var(--quick-links-hover-bg,theme(colors.slate.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div
        className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer h-[160px]"
        onClick={() => {
          window.open(resource.link, '_blank')
          markAsViewed()
        }}
      >
        <TooltipProvider>
          <Tooltip delayDuration={150}>
            <TooltipTrigger asChild>
              <Button
                variant="link"
                onClick={(e) => {
                  e.stopPropagation()
                  copyToClipboard(resource.link)
                }}
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all z-10 h-8 w-8 p-0 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 shadow-md hover:shadow-lg rounded-full border border-slate-200 dark:border-slate-700 hover:scale-110"
              >
                {copiedLink === resource.link ? (
                  <span className="text-green-500 text-sm font-medium">✓</span>
                ) : (
                  <LinkIcon className="h-4 w-4 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="tooltip-fast">
              <p>Copy &quot;{resource.title}&quot; URL to clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="flex flex-row items-center gap-4 h-full p-5">
          {resource.image && (
            <div className="h-24 w-24 shrink-0 relative rounded-md overflow-hidden">
              <Image
                src={resource.image}
                alt={resource.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="max-h-[40px]">
              <h2 className="font-display text-base text-slate-900 dark:text-white leading-tight line-clamp-2">
                {resource.title}
              </h2>
            </div>
            <p className="mt-1.5 text-sm text-slate-700 dark:text-slate-400 line-clamp-3 flex-1">
              {resource.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 