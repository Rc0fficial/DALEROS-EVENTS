import { Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "Events", href: "#events" },
  { label: "Sponsorship", href: "#sponsorship" },
  { label: "Corporate", href: "#corporate" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Left — Brand */}
          <div className="space-y-4">
            <span className="text-gold font-bold text-xl tracking-wide">
              DALEROS EVENTS
            </span>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The world&apos;s premier platform for business networking —
              connecting leaders across Europe and Canada.
            </p>
            <a
              href="mailto:join@dalerosevents.com"
              className="inline-block text-sm text-gold/70 hover:text-gold transition-colors duration-200"
            >
              join@dalerosevents.com
            </a>
          </div>

          {/* Center — Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-6 font-medium">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Social + CTA */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-6 font-medium">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/40 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <a
              href="#book"
              className="inline-flex items-center px-6 py-2.5 bg-gold text-dark text-sm font-semibold rounded-full hover:bg-gold-light transition-colors duration-200"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-center text-xs text-white/30">
            &copy; 2026 DALEROS EVENTS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
