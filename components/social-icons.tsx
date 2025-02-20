import Image from "next/image"
import Link from "next/link"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/tryoperand",
    icon: "/images/logos/linkedin-logo.svg",
  },
]

export function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity duration-150"
        >
          <Image src={social.icon || "/placeholder.svg"} alt={social.name} width={24} height={24} className="w-6 h-6" />
        </Link>
      ))}
    </div>
  )
}

