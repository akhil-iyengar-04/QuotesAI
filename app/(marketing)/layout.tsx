import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <header className="h-16 container sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between py-6 w-full">
            <MobileNav />
            <MainNav />
            <nav>
              <div className="md:flex">
                <div className="flex gap-4">
                  <Link
                    href="https://calendly.com/akhiliyengar2004/operand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default", size: "sm" }),
                      "px-4"
                    )}
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>

      {/* Footer */}
      <SiteFooter />
    </>
  );
}
