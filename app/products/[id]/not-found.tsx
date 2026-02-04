import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Product Not Found</h1>
          <p className="text-lg text-foreground/70">
            We couldn't find the product you're looking for.
          </p>
        </div>

        <div className="bg-muted p-8 rounded-lg">
          <p className="text-6xl">🔍</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            The product may have been removed or the URL might be incorrect.
          </p>
          <Link href="/catalog">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Catalog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
