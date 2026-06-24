import logoImg from "../assets/logo.png";
import { PartyPopper, Balloon } from "lucide-react";

interface HeroSectionProps {
  years: number;
  tagline: string;
  dateRange: string;
  threeIs: string[];
}

export default function HeroSection({
  years,
  tagline,
  dateRange,
  threeIs,
}: HeroSectionProps) {
  return (
    <main className="h-[vh80] text-white flex flex-col items-center justify-center px-6 py-18 relative">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={logoImg} alt="Logo" className="w-48" />
      </div>

      <div className="absolute left-16 top-1/2 -translate-y-1/2">
        <PartyPopper
          size={500}
          className="absolute text-brand-purple opacity-40"
        />
      </div>
      <div className="absolute left-330 top-1/2 -translate-y-1/2">
        <Balloon size={500} className="absolute text-brand-purple opacity-40" />
      </div>

      {/* Main title */}
      <div className="flex items-center gap-6 mb-6">
        <h1 className="text-[18rem] font-black leading-none bg-gradient-to-b from-brand-pink via-brand-magenta to-brand-violet bg-clip-text text-transparent">
          {years}
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
        {threeIs.map((pillar, i) => (
          <span key={pillar} className="flex items-center gap-4">
            {pillar}
            {i < threeIs.length - 1 && (
              <span className="text-brand-pink mx-2">·</span>
            )}
          </span>
        ))}
      </div>

      <p className="text-center text-white/60 text-lg max-w-xl mb-8">
        {tagline}
      </p>

      <div className="border border-brand-purple px-6 py-2 rounded-full text-brand-violet text-sm tracking-widest">
        {dateRange}
      </div>
    </main>
  );
}
