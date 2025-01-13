import { Category } from '@/lib/types'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface SectionNavigationProps {
  categories: Category[]
  activeSection: string | null
  onCategoryClick: (categoryId: string) => void
}

export function SectionNavigation({
  categories,
  activeSection,
  onCategoryClick
}: SectionNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <nav className="mt-8">
      {/* Mobile: Collapsible menu */}
      <div className="lg:hidden">
        <div className={`rounded-md bg-muted transition-[border-radius] duration-200 ${isExpanded ? 'rounded-b-none' : ''}`}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-muted/80 transition-colors"
          >
            <span className="font-semibold text-lg text-muted-foreground uppercase tracking-wide">
              Categories
            </span>
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {isExpanded && (
          <div className="bg-muted/60 rounded-b-md p-3 border-t border-muted-foreground/10">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryClick(category.id)
                    setIsExpanded(false)
                  }}
                  className={`
                    shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium 
                    transition-colors
                    ${activeSection === category.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-background hover:bg-background/90'
                    }
                  `}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Desktop: Vertical stack */}
      <div className="hidden lg:block w-64 sticky top-24">
        <h3 className="font-semibold text-lg text-muted-foreground uppercase tracking-wide mb-3">
          Categories
        </h3>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className={`
                text-left px-3 py-2 rounded-md text-sm font-medium 
                transition-colors
                ${activeSection === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted hover:bg-muted/80'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
} 