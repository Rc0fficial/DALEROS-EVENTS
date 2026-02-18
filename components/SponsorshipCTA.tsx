import { ArrowRight } from "lucide-react";

export default function SponsorshipCTA() {
  return (
    <section id="sponsorship" className="relative bg-[#0F0F0F] py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] via-transparent to-gold/[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl border border-gold/15 bg-[#141414] p-10 sm:p-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gold/60 mb-4 font-medium">
            Sponsorship
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Put Your Brand in Front of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              Decision-Makers
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/45 leading-relaxed mb-10 max-w-2xl mx-auto">
            Align your company with the highest caliber of business leaders.
            DALEROS EVENTS sponsorship offers unmatched visibility, curated
            introductions, and direct access to executives shaping the future
            of their industries.
          </p>
          <a
            href="#packages"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 text-sm tracking-wide group"
          >
            View Sponsorship Packages
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
