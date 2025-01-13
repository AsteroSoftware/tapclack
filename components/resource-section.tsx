import { ResourceCard } from '@/components/resource-card'
import { Resource } from '@/lib/types'

interface ResourceSectionProps {
  title: string
  categoryId?: string
  resources: Resource[]
  copiedLink: string | null
  copiedSectionLink: boolean
  isHighlighted: boolean
  onCopy: (link: string) => void
  onSectionCopy: () => void
  onView: (link: string) => void
  onCategoryClick?: (categoryId: string) => void
  sectionRef: (el: HTMLDivElement | null) => void
}

export function ResourceSection({
  title,
  categoryId,
  resources,
  copiedLink,
  copiedSectionLink,
  isHighlighted,
  onCopy,
  onSectionCopy,
  onView,
  onCategoryClick,
  sectionRef
}: ResourceSectionProps) {
  const handleTitleClick = () => {
    if (categoryId) {
      window.location.hash = categoryId;
    }
    onSectionCopy();
    if (onCategoryClick && categoryId) {
      onCategoryClick(categoryId);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`mb-12 rounded-lg transition-colors p-4 ${
        isHighlighted ? 'bg-primary/20' : ''
      }`}
    >
      <div className="flex items-center gap-2 mb-4 group">
        <h2 
          className="text-2xl font-semibold cursor-pointer hover:text-primary transition-colors"
          onClick={handleTitleClick}
        >
          {title}
          {copiedSectionLink && (
            <span className="text-green-500 text-sm ml-4">Copied!</span>
          )}
        </h2>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.title}
            resource={resource}
            categoryId={categoryId || ''}
            copiedLink={copiedLink}
            copyToClipboard={onCopy}
            markAsViewed={() => onView(resource.link)}
          />
        ))}
      </div>
    </section>
  )
} 