const stats = [
  { number: "1,600+", label: "Leaders" },
  { number: "10+", label: "Events Hosted" },
  { number: "2", label: "Continents" },
  { number: "F500", label: "Attendees" },
];

export default function StatBar() {
  return (
    <section className="bg-dark py-16 sm:py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-2">
                {stat.number}
              </p>
              <p className="text-sm sm:text-base text-white/50 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
