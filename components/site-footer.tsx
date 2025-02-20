import type * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SocialIcons } from "@/components/social-icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t border-border py-4", className)}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Operand. All rights reserved.</span>
          <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </div>
        <SocialIcons />
      </div>
    </footer>
  )
}

