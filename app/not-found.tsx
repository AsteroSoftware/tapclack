import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-7xl font-bold text-primary">404</CardTitle>
          <CardDescription className="text-2xl">Page Not Found</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6 pt-2">
          <p className="text-muted-foreground text-center">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span>Return Home</span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
} 