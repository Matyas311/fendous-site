import { motion } from "framer-motion";

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
    <section className="h-[vh80] text-white flex flex-col items-center justify-center px-12 py-20">
      {/* Header */}
      <h2 className="text-4xl font-black tracking-widest uppercase text-white/80 mb-16">
        {heading}
      </h2>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-5 gap-8 w-full max-w-6xl">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-brand-card border border-brand-purple rounded-2xl p-8 flex flex-col items-center text-center hover:border-brand-pink hover:shadow-[0_0_30px_rgba(233,30,140,0.2)] transition-all duration-300"
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-white font-black text-base tracking-wide uppercase mb-2">
                {card.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {card.subtitle}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
