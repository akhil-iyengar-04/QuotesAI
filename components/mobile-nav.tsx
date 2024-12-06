"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Navigate through the site
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-full">
          <nav className="flex flex-col space-y-4">
            {/* Operand Logo in the Drawer */}
            <MobileLink
              href="/"
              className="flex items-center justify-center"
              onOpenChange={setOpen}
            >
              <Image
                src="/operandlogo.svg"
                alt="Operand Logo"
                width={200} // Adjust as needed
                height={200} // Adjust as needed
                className="h-48 w-48 object-contain"
              />
            </MobileLink>
            {/* "Request Demo" Tab */}
            <MobileLink
              href="/request-demo"
              className="text-lg font-medium text-center text-gray-700 hover:text-gray-900"
              onOpenChange={setOpen}
            >
              Request Demo
            </MobileLink>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
