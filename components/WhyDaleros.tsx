import { Users, Globe, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Curated Connections",
    description:
      "Private, invite-style events with vetted professionals. Every attendee is handpicked to ensure meaningful interactions and high-caliber networking.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Events across Europe and North America. From Brussels to Vancouver, we bring together leaders from diverse industries on two continents.",
  },
  {
    icon: TrendingUp,
    title: "Real Results",
    description:
      "Sponsors and attendees leave with tangible opportunities. Our events are designed for outcomes — partnerships, deals, and lasting relationships.",
  },
];

export default function WhyDaleros() {
  return (
    <section id="about" className="bg-light-bg py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-medium">
            Why Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
            Why Leaders Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-dark">
              DALEROS EVENTS
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 sm:p-10 border border-black/5 hover:border-gold/20 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon size={24} className="text-gold" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-dark/60 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
