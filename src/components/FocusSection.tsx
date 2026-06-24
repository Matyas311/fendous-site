import { motion } from "framer-motion";
import { UserPlus, HandCoins, SquareActivity } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import humanImg from "../assets/humanOriented.jpg";
import financeImg from "../assets/finance.jpg";
import healthcareImg from "../assets/healthcare.jpg";

export default function FocusSection() {
  const { t } = useLanguage();

  const goals = [
    {
      id: 1,
      icon: <UserPlus size={40} className="text-brand-pink" />,
      title: t.focus_goal1_title,
      description: t.focus_goal1_desc,
      glowColor: "hover:shadow-[0px_0px_60px_15px_rgba(233,_30,_140,_0.5)]",
      img: humanImg,
    },
    {
      id: 2,
      icon: <HandCoins size={40} className="text-brand-violet" />,
      title: t.focus_goal2_title,
      description: t.focus_goal2_desc,
      glowColor: "hover:shadow-[0px_0px_60px_15px_rgba(155,_93,_229,_0.5)]",
      img: financeImg,
    },
    {
      id: 3,
      icon: <SquareActivity size={40} className="text-brand-pink" />,
      title: t.focus_goal3_title,
      description: t.focus_goal3_desc,
      glowColor: "hover:shadow-[0px_0px_60px_15px_rgba(233,_30,_140,_0.5)]",
      img: healthcareImg,
    },
  ];

  return (
    <section className="grid grid-cols-4 gap-8 w-full text-white items-stretch px-25 py-25">
      {/* Header card */}
      <div className="bg-brand-card border-4 border-brand-magenta rounded-2xl py-10 pl-6">
        <div className="mb-10 pt-2">
          <h2 className="text-5xl font-semibold tracking-widest uppercase text-brand-pink mb-6">
            {t.focus_heading}
          </h2>
          <p className="text-white text-m tracking-wider uppercase max-w-[60%]">
            {t.focus_subheading}
          </p>
        </div>
        <div className="w-[45%] pt-1 mb-[20px] h-px bg-gradient-to-r from-brand-purple via-brand-pink to-brand-violet" />
        <div className="w-[45%]">
          <p className="text-white text-lg">{t.focus_desc}</p>
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
