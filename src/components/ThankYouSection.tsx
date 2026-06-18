interface ThankYouSectionProps {
  thankYouHeading: string;
  thankYouMessage: string;
  quote: string;
  closingLine: string;
  logo: string;
  tagline: string;
  footerItems: { icon: React.ReactNode; label: string }[];
  websiteUrl: string;
  socialLinks: { icon: React.ReactNode; url: string }[];
}

export default function ThankYouSection({
  thankYouHeading,
  thankYouMessage,
  quote,
  closingLine,
  logo,
  tagline,
  footerItems,
  websiteUrl,
  socialLinks,
}: ThankYouSectionProps) {
  return (
    <section className="text-white flex flex-col items-center justify-center  pt-32 pb-8">
      {/* Thank You */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-brand-pink mb-4">
          {thankYouHeading}
        </h2>
        <p className="text-white/60 text-lg max-w-xl">{thankYouMessage}</p>
      </div>

      <div className="w-32 h-px bg-gradient-to-r from-brand-purple via-brand-pink to-brand-violet mb-16" />

      {/* Quote */}
      <div className="text-center max-w-2xl mb-12">
        <p className="text-2xl font-semibold text-white/90 leading-relaxed mb-6">
          "{quote}"
        </p>
        <p className="text-brand-pink text-xl font-bold">{closingLine}</p>
      </div>

      {/* Logo + tagline */}
      <div className="flex flex-col items-center mb-24">
        <img src={logo} alt="Fendous logo" className="w-24 mb-4" />
        <p className="text-brand-violet font-bold text-lg tracking-wide">
          {tagline}
        </p>
      </div>

      {/* Footer */}
      <div className="w-full px-64 border-t border-brand-purple pt-8 flex flex-wrap items-center justify-between">
        {/* Footer items */}
        <div className="flex gap-8">
          {footerItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-white/60 text-sm"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a
            href={`https://${websiteUrl}`}
            className="text-white/60 text-sm hover:text-brand-pink transition-colors"
          >
            {websiteUrl}
          </a>
          {socialLinks.map((social, i) => (
            <a
              key={i}
              href={social.url}
              className="text-white/60 hover:text-brand-pink transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
