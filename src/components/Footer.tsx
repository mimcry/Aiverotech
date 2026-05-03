import Image from "next/image";
import { Globe, Link2, GitBranch, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "Web Platforms", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "AI Systems", href: "#services" },
    { name: "Automation", href: "#services" },
    { name: "Cloud & DevOps", href: "#services" },
  ],
  Company: [
    { name: "About Us", href: "#why" },
    { name: "Our Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Careers", href: "#" },
  ],
  Resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#work" },
    { name: "Tech Stack", href: "#technology" },
    { name: "Contact", href: "#contact" },
  ],
};

const socials = [
  { icon: Globe, href: "#", label: "Twitter" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: GitBranch, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex flex-row items-center ">
              <Image
                src="/logo.png"
                alt="AiveroTech"
                width={40}
                height={40}
                className="rounded-lg w-20 h-20 object-contain"
              />
              <span className="text-lg font-semibold tracking-tight leading-none -ml-4">
                Aivero<span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Tech</span>
              </span>
            </div>
            <p className="text-sm text-muted max-w-xs leading-relaxed mb-6">
              AI-first technology partner helping businesses design, build,
              automate, and scale digital products for the global market.
            </p>
            <div className="space-y-2 text-sm text-muted">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <a href="tel:+9779860428022" className="hover:text-white transition-colors">
                  +977 9860428022
                </a>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} AiveroTech. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted hover:text-white transition-colors duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
