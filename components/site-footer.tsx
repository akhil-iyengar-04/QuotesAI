import type * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t border-border py-4", className)}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left text-sm text-muted-foreground">
          © {new Date().getFullYear()} Operand. All rights reserved.
        </div>
        <div className="flex items-center justify-end gap-2">
          <Link href="https://www.linkedin.com/company/tryoperand" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/logos/linkedin-logo.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:opacity-80 transition-opacity duration-150"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

