import { ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ScrollToTopProps {
  visible: boolean
  onClick: () => void
}

export function ScrollToTop({ visible, onClick }: ScrollToTopProps) {
  return (
    <Button
      variant="default"
      size="icon"
      className={`fixed bottom-12 right-12 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={onClick}
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  )
} 