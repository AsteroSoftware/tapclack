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

  const handleCategoryClick = (categoryId: string) => {
    window.location.hash = categoryId;
    onCategoryClick(categoryId);
  };

  return (
    <nav className="mt-8">
      {/* Mobile: Collapsible menu */}
      <div className="lg:hidden">
        <div className={`rounded-md bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_-2px_rgba(37,99,235,0.2)] border border-slate-200 dark:border-slate-800 transition-all duration-300 ${isExpanded ? 'rounded-b-none border-b-0' : ''}`}>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <span className="font-semibold text-lg text-slate-900 dark:text-white uppercase tracking-wide">
              Categories
            </span>
            <ChevronDown className={`h-5 w-5 text-slate-600 dark:text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {isExpanded && (
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-b-md p-4 border border-t-0 border-slate-200 dark:border-slate-800 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_-4px_rgba(37,99,235,0.2)]">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    handleCategoryClick(category.id);
                    setIsExpanded(false);
                  }}
                  className={`
                    relative shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium 
                    transition-all duration-200 hover:scale-[1.02] group
                    ${activeSection === category.id 
                      ? 'bg-primary text-primary-foreground shadow-[0_4px_12px_-2px_rgba(37,99,235,0.3)]' 
                      : 'bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-100/0 dark:hover:bg-slate-700/0 shadow-sm hover:shadow-[0_4px_12px_-2px_rgba(37,99,235,0.2)]'
                    }
                  `}
                >
                  <span className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                    !activeSection || activeSection !== category.id 
                      ? '[background:linear-gradient(var(--cat-hover-bg,rgba(255,255,255,0)),var(--cat-hover-bg,rgba(255,255,255,0)))_padding-box,linear-gradient(135deg,hsl(229,100%,62%),hsl(229,100%,85%))_border-box] border-2 border-transparent'
                      : ''
                  }`} />
                  <span className="relative">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Desktop: Vertical stack */}
      <div className="hidden lg:block w-64">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white uppercase tracking-wide mb-4 px-3">
          Categories
        </h3>
        <div className="flex flex-col gap-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-800 p-2 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_-4px_rgba(37,99,235,0.2)]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`
                relative text-left px-3 py-2 rounded-md text-sm font-medium 
                transition-all duration-200 hover:scale-[1.02] group
                ${activeSection === category.id 
                  ? 'bg-primary text-primary-foreground shadow-[0_4px_12px_-2px_rgba(37,99,235,0.3)]' 
                  : 'hover:bg-slate-100/0 dark:hover:bg-slate-700/0 hover:shadow-[0_4px_12px_-2px_rgba(37,99,235,0.2)]'
                }
              `}
            >
              <span className={`absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                !activeSection || activeSection !== category.id 
                  ? '[background:linear-gradient(var(--cat-hover-bg,rgba(255,255,255,0)),var(--cat-hover-bg,rgba(255,255,255,0)))_padding-box,linear-gradient(135deg,hsl(229,100%,62%),hsl(229,100%,85%))_border-box] border-2 border-transparent'
                  : ''
              }`} />
              <span className="relative">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
} 