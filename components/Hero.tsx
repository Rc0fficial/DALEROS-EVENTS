export default function Hero() {
  const stats = [
    { number: "1,600+", label: "Attendees" },
    { number: "10+", label: "Events" },
    { number: "2", label: "Continents" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/3" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs text-gold/80 uppercase tracking-widest font-medium">
            Premium Business Networking
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Where Ambition Meets{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
            Opportunity
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed mb-10">
          The world&apos;s premier platform for business networking — connecting
          executives, entrepreneurs, and leaders across Europe and Canada.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#events"
            className="px-8 py-3.5 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 text-sm tracking-wide"
          >
            Explore Events
          </a>
          <a
            href="#sponsorship"
            className="px-8 py-3.5 border border-gold/40 text-gold font-semibold rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-200 text-sm tracking-wide"
          >
            Become a Sponsor
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gold">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-white/50 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
