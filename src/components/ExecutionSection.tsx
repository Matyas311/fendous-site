import { motion } from "framer-motion";
import { GraduationCap, Handshake, Users, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ExecutionSection() {
  const { t } = useLanguage();

  const cards = [
    {
      id: 1,
      icon: <GraduationCap size={48} className="text-brand-violet" />,
      title: t.execution_card1_title,
      subtitle: t.execution_card1_subtitle,
      description: t.execution_card1_desc,
    },
    {
      id: 2,
      icon: <Handshake size={48} className="text-brand-violet" />,
      title: t.execution_card2_title,
      subtitle: t.execution_card2_subtitle,
      description: t.execution_card2_desc,
    },
    {
      id: 3,
      icon: <Users size={48} className="text-brand-pink" />,
      title: t.execution_card3_title,
      subtitle: t.execution_card3_subtitle,
      description: t.execution_card3_desc,
    },
    {
      id: 4,
      icon: <Globe size={48} className="text-brand-violet" />,
      title: t.execution_card4_title,
      subtitle: t.execution_card4_subtitle,
      description: t.execution_card4_desc,
    },
    {
      id: 5,
      icon: <Users size={48} className="text-brand-violet" />,
      title: t.execution_card5_title,
      subtitle: t.execution_card5_subtitle,
      description: t.execution_card5_desc,
    },
  ];

  return (
    <section className="h-[vh80] text-white flex flex-col items-center justify-center px-12 py-20">
      {/* Header */}
      <h2 className="text-4xl font-black tracking-widest uppercase text-white/80 mb-16">
        {t.execution_heading}
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
