import { motion } from "framer-motion";
import { CodeXml, BrainCircuit, Lock, Sprout } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function PillarsSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      id: 1,
      icon: <CodeXml size={56} className="text-brand-violet" />,
      title: t.pillars_1_title,
      description: t.pillars_1_desc,
      glowColor: "hover:shadow-[0px_0px_60px_15px_rgba(155,_93,_229,_0.5)]",
    },
    {
      id: 2,
      icon: <BrainCircuit size={56} className="text-brand-pink" />,
      title: t.pillars_2_title,
      description: t.pillars_2_desc,
      glowColor: "hover:shadow-[0px_0px_60px_15px_rgba(233,_30,_140,_0.5)]",
    },
    {
      id: 3,
      icon: <Lock size={56} className="text-brand-violet" />,
      title: t.pillars_3_title,
      description: t.pillars_3_desc,
      glowColor: "hover:shadow-[0px_0px_60px_15px_rgba(155,_93,_229,_0.5)]",
    },
    {
      id: 4,
      icon: <Sprout size={56} className="text-brand-pink" />,
      title: t.pillars_4_title,
      description: t.pillars_4_desc,
      glowColor: "hover:shadow-[0px_0px_60px_15px_rgba(233,_30,_140,_0.5)]",
    },
  ];

  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-12 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-black tracking-widest uppercase text-white/80 mb-3">
          {t.pillars_heading}
        </h2>
        <p className="text-brand-pink text-sm tracking-wider uppercase">
          {t.pillars_subheading}
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
