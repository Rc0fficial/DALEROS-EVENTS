import { CalendarDays, MapPin } from "lucide-react";

export default function UpcomingEvent() {
  return (
    <section id="events" className="bg-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-gold/60 mb-4 font-medium">
          Next Event
        </p>

        <div className="relative border border-white/5 rounded-2xl bg-dark-card/50 p-8 sm:p-12 overflow-hidden">
          {/* Gold left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold to-gold-dark rounded-l-2xl" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Event info */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                DECA Europe — Brussels{" "}
                <span className="inline-block">🇧🇪🇨🇦</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white/60">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} className="text-gold/70" />
                  <span className="text-sm">Wednesday, February 25, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gold/70" />
                  <span className="text-sm">
                    Eurostars Montgomery, Brussels
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#apply"
                className="px-8 py-3 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 text-sm tracking-wide text-center"
              >
                Apply to Join
              </a>
              <a
                href="#sponsor"
                className="px-8 py-3 border border-gold/40 text-gold font-semibold rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-200 text-sm tracking-wide text-center"
              >
                Sponsor This Event
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
