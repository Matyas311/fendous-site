import { motion } from "framer-motion";

interface Goal {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  glowColor: string;
  img: string;
}

interface FocusSectionProps {
  heading: string;
  subheading: string;
  description: string;
  goals: Goal[];
}

export default function FocusSection({
  heading,
  subheading,
  description,
  goals,
}: FocusSectionProps) {
  return (
    <section className="grid grid-cols-4 gap-8 w-full text-white items-stretch px-25 py-25">
      {/* Header card */}
      <div className="bg-brand-card border-4 border-brand-magenta rounded-2xl py-10 pl-6">
        <div className="mb-10 pt-2">
          <h2 className="text-5xl font-semibold tracking-widest uppercase text-brand-pink mb-6">
            {heading}
          </h2>
          <p className="text-white text-m tracking-wider uppercase max-w-[60%]">
            {subheading}
          </p>
        </div>
        <div className="w-[45%] pt-1 mb-[20px] h-px bg-gradient-to-r from-brand-purple via-brand-pink to-brand-violet" />
        <div className=" w-[45%]">
          <p className="text-white text-lg">{description}</p>
        </div>
      </div>
      {/* Goal cards */}
      {goals.map((goal, i) => (
        <motion.div
          key={goal.id}
          initial={{ opacity: 0, y: i % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          className={`bg-brand-card border border-brand-purple rounded-2xl overflow-hidden flex flex-col hover:border-brand-pink transition-all duration-300 ${goal.glowColor}`}
        >
          {/* Stock image */}
          <div className="w-full h-48 overflow-hidden">
            <img
              src={goal.img}
              alt={goal.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col items-center text-center">
            <div className="mb-4">{goal.icon}</div>
            <h3 className="text-white font-black text-base tracking-wide uppercase mb-2">
              {goal.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {goal.description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
