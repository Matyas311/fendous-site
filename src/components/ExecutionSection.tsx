interface ExecutionCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

interface ExecutionSectionProps {
  heading: string;
  cards: ExecutionCard[];
}

export default function ExecutionSection({
  heading,
  cards,
}: ExecutionSectionProps) {
  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-12 py-20">
      {/* Header */}
      <h2 className="text-4xl font-black tracking-widest uppercase text-white/80 mb-16">
        {heading}
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-5 gap-6 w-full max-w-5xl">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-brand-card border border-brand-purple rounded-xl p-6 flex flex-col items-center text-center hover:border-brand-pink hover:shadow-[0_0_20px_rgba(233,30,140,0.2)] transition-all duration-300"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-white font-black text-sm tracking-wide uppercase mb-1">
              {card.title}
            </h3>
            <p className="text-brand-pink text-xs font-bold mb-3">
              {card.subtitle}
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
