import { motion } from "framer-motion";

interface Pillar {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  glowColor: string;
}

interface PillarsSectionProps {
  heading: string;
  subheading: string;
  pillars: Pillar[];
}

export default function PillarsSection({
  heading,
  subheading,
  pillars,
}: PillarsSectionProps) {
  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-12 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black tracking-widest uppercase text-white/80 mb-3">
          {heading}
        </h2>
        <p className="text-brand-pink text-sm tracking-wider uppercase">
          {subheading}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div
              key={pillar.id}
              className={`bg-brand-card border border-brand-purple rounded-2xl p-10 flex flex-col items-center text-center hover:border-brand-pink transition-all duration-300 ${pillar.glowColor}`}
            >
              <div className="mb-6">{pillar.icon}</div>
              <h3 className="text-2xl font-black text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
