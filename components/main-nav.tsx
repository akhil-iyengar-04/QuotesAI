"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <nav className="w-full bg-background">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center justify-start translate-y-[2px]">
              <Image
                src="/images/logos/operand-logo.svg"
                alt="Operand Logo"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Request a Demo Button */}
          <div className="flex-1 flex justify-end items-center gap-8">
            <Link
              href="/placeholder-whitepaper.pdf"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our Whitepaper
            </Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://calendly.com/akhiliyengar2004/operand" target="_blank" rel="noopener noreferrer">
                Request a Demo
              </Link>
            </Button>
          </div>

          {/* Underline */}
          <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gray-200"></div>
        </div>
      </div>
    </nav>
  )
}

