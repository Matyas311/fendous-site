import logoImg from "../assets/logo.png";
import { PartyPopper } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <main className="h-[vh80] text-white flex flex-col items-center justify-center px-6 py-18 relative">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={logoImg} alt="Logo" className="w-48" />
      </div>

      {/* Language toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 border border-brand-purple px-4 py-2 rounded-full text-sm text-brand-violet hover:border-brand-pink hover:text-brand-pink transition-all duration-300"
        >
          {language === "en" ? "English" : "Dansk"}
        </button>
      </div>

      {/* Party popper */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2">
        <PartyPopper size={180} className="text-brand-purple opacity-40" />
      </div>

      {/* Main title */}
      <div className="flex items-center gap-6 mb-6">
        <h1 className="text-[18rem] font-black leading-none bg-gradient-to-b from-brand-pink via-brand-magenta to-brand-violet bg-clip-text text-transparent">
          4
        </h1>
        <div className="flex flex-col">
          <span className="text-6xl md:text-8xl font-black tracking-tight text-white/80">
            YEARS OF
          </span>
          <span className="text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-brand-pink to-brand-violet bg-clip-text text-transparent">
            FENDOUS
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-brand-violet text-sm tracking-[0.3em] uppercase mb-6">
        {t.hero_pillars.map((pillar, i) => (
          <span key={pillar} className="flex items-center gap-4">
            {pillar}
            {i < t.hero_pillars.length - 1 && (
              <span className="text-brand-pink mx-2">·</span>
            )}
          </span>
        ))}
      </div>

      <p className="text-center text-white/60 text-lg max-w-xl mb-8">
        {t.hero_tagline}
      </p>

      <div className="border border-brand-purple px-6 py-2 rounded-full text-brand-violet text-sm tracking-widest">
        {t.hero_date_range}
      </div>
    </main>
  );
}
