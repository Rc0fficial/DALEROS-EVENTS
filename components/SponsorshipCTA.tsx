import { ArrowRight } from "lucide-react";

export default function SponsorshipCTA() {
  return (
    <section id="sponsorship" className="relative bg-gold py-20 sm:py-28 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-black/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
          Put Your Brand in Front of Decision-Makers
        </h2>
        <p className="text-lg sm:text-xl text-dark/70 leading-relaxed mb-10 max-w-2xl mx-auto">
          Align your company with the highest caliber of business leaders.
          DALEROS EVENTS sponsorship offers unmatched visibility, curated
          introductions, and direct access to executives shaping the future
          of their industries.
        </p>
        <a
          href="#packages"
          className="inline-flex items-center gap-2 px-8 py-4 bg-dark text-white font-semibold rounded-full hover:bg-dark-card hover:shadow-2xl transition-all duration-200 text-sm tracking-wide group"
        >
          View Sponsorship Packages
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </a>
      </div>
    </section>
  );
}
