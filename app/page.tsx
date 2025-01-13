'use client'

import { useRef, useState, useEffect } from 'react'
import { TooltipProvider } from "@/components/ui/tooltip"
import { NavigationBar } from '@/components/navigation-bar'
import { SectionNavigation } from '@/components/section-navigation'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'
import { ResourceSection } from '@/components/resource-section'
import { ContributeSection } from '@/components/contribute-section'
import { ScrollToTop } from '@/components/scroll-to-top'
import { categories, resources } from '@/lib/data'

export default function EngineeringResources() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null)
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const [viewedResources, setViewedResources] = useState<Set<string>>(new Set())
  const [copiedCategoryLink, setCopiedCategoryLink] = useState<string | null>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const savedViewedResources = localStorage.getItem('viewedResources')
    if (savedViewedResources) {
      setViewedResources(new Set(JSON.parse(savedViewedResources)))
    }

    if (window.location.hash) {
      const categoryId = window.location.hash.slice(1)
      scrollToSection(categoryId)
      setHighlightedSection(categoryId)
    }

    const handleHashChange = () => {
      const categoryId = window.location.hash.slice(1)
      setHighlightedSection(categoryId || null)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setShowScrollTop(scrollPercentage > 0.1)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyToClipboard = (link: string) => {
    navigator.clipboard.writeText(link)
    setCopiedLink(link)
    setTimeout(() => setCopiedLink(null), 2000)
  }

  const copyCategoryLink = (categoryId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${categoryId}`
    navigator.clipboard.writeText(url)
    setCopiedCategoryLink(categoryId)
    setTimeout(() => setCopiedCategoryLink(null), 2000)
  }

  const scrollToSection = (categoryId: string) => {
    const element = sectionRefs.current[categoryId]
    if (!element) return
    
    const isMobile = window.innerWidth < 1024
    const navbarOffset = isMobile ? 260 : 80
    
    const elementPosition = element.offsetTop - navbarOffset

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }

  const markAsViewed = (resourceLink: string) => {
    const newViewedResources = new Set(viewedResources)
    newViewedResources.add(resourceLink)
    setViewedResources(newViewedResources)
    localStorage.setItem('viewedResources', JSON.stringify(Array.from(newViewedResources)))
  }

  const scrollToContribute = () => {
    const element = sectionRefs.current['contribute']
    if (!element) return
    
    const navbarOffset = 80
    const elementPosition = element.offsetTop - navbarOffset

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTapClackClick = () => {
    history.pushState("", document.title, window.location.pathname);
    setHighlightedSection(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleContributeClick = () => {
    history.pushState("", document.title, window.location.pathname);
    setHighlightedSection(null);
    scrollToContribute();
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <NavigationBar
          onTitleClick={handleTapClackClick}
          onContributeClick={handleContributeClick}
        />
        <div className="flex-1 pt-16">
          <div className="container mx-auto px-4">
            <div className="lg:flex gap-8">
              <aside className="lg:h-[calc(100vh-4rem)] lg:sticky lg:top-16">
                <SectionNavigation
                  categories={categories}
                  activeSection={highlightedSection}
                  onCategoryClick={scrollToSection}
                />
              </aside>
              <main className="flex-1 min-w-0">
                <div className="py-8">
                  <PageHeader />
                  {categories.map((category) => {
                    const categoryResources = resources[category.id] || []
                    return (
                      <ResourceSection
                        key={category.id}
                        title={category.name}
                        categoryId={category.id}
                        resources={categoryResources}
                        copiedLink={copiedLink}
                        copiedSectionLink={copiedCategoryLink === category.id}
                        isHighlighted={highlightedSection === category.id}
                        onCopy={copyToClipboard}
                        onSectionCopy={() => copyCategoryLink(category.id)}
                        onView={markAsViewed}
                        onCategoryClick={scrollToSection}
                        sectionRef={(el: HTMLDivElement | null) => sectionRefs.current[category.id] = el}
                      />
                    )
                  })}
                  <ContributeSection 
                    sectionRef={(el: HTMLDivElement | null) => sectionRefs.current['contribute'] = el}
                  />
                </div>
              </main>
            </div>
          </div>
        </div>
        <PageFooter />
        {showScrollTop && <ScrollToTop visible={true} onClick={scrollToTop} />}
      </div>
    </TooltipProvider>
  )
} 