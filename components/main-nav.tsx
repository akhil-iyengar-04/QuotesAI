"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "./ui/badge";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Features",
    href: "/#features",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  // Additional components can be added here if needed
];

export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-between mr-4 md:flex relative">
      {/* Logo Section */}
      <Link href="/" className="flex items-center mt-3"> {/* Adjusted top margin */}
        <Image
          src="/operandlogo.svg" // Ensure this file is in the public folder
          alt="Operand Logo"
          width={170} // Logo width
          height={170} // Logo height
          className="object-contain transition-transform duration-200 hover:scale-105"
        />
      </Link>

      {/* Desktop Navigation Menu */}
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            {/* Removed the "Price" Link */}
          </NavigationMenuItem>
          {/* Additional NavigationMenuItems can be added here if needed */}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Hamburger Menu */}


      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden z-10">
          <NavigationMenuList>
          </NavigationMenuList>
        </div>
      )}
    </div>
  );
}

// Rest of your code remains unchanged...

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href="https://calendly.com/akhiliyengar2004/operand" // Calendly URL
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practices
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
