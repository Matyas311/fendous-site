interface HeroSectionProps {
  years: number;
  companyName: string;
  tagline: string;
  dateRange: string;
  pillars: string[];
}

export default function HeroSection({
  years,
  companyName,
  tagline,
  dateRange,
  pillars,
}: HeroSectionProps) {
  return (
    <main className="min-h-screen bg-brand-dark text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="mb-8 text-brand-violet text-sm tracking-widest uppercase">
        {companyName}
      </div>

      <div className="text-center mb-6">
        <h1 className="text-8xl font-black leading-none bg-gradient-to-r from-brand-pink via-brand-magenta to-brand-violet bg-clip-text text-transparent">
          {years}
        </h1>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-2">
          YEARS OF
          <span className="bg-gradient-to-r from-brand-pink to-brand-violet bg-clip-text text-transparent">
            FENDOUS
          </span>
        </h2>
      </div>

      <div className="flex items-center gap-4 text-brand-violet text-sm tracking-[0.3em] uppercase mb-6">
        {pillars.map((pillar, i) => (
          <>
            <span key={pillar}>{pillar}</span>
            {i < pillars.length - 1 && (
              <span className="text-brand-pink">·</span>
            )}
          </>
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
