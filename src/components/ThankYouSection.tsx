import {
  Lightbulb,
  Blocks,
  Target,
  BriefcaseBusiness,
  Globe,
  Play,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../assets/logo.png";

export default function ThankYouSection() {
  const { t } = useLanguage();

  const partners = [
    "Visma Dinero",
    "Vipps MobilePay",
    "International House North Denmark",
    "BusinessAalborg",
    "Caspio",
    "Danish Life Science Cluster",
    "IDA Selvstændig",
  ];

  const loopedPartners = [...partners, ...partners];

  const footerItems = [
    {
      icon: <Lightbulb size={18} className="text-brand-pink" />,
      label: t.footer_item1,
    },
    {
      icon: <Blocks size={18} className="text-brand-violet" />,
      label: t.footer_item2,
    },
    {
      icon: <Target size={18} className="text-brand-pink" />,
      label: t.footer_item3,
    },
  ];

  const socialLinks = [
    { icon: <BriefcaseBusiness size={20} />, url: "https://linkedin.com" },
    { icon: <Globe size={20} />, url: "https://fendous.live" },
    { icon: <Play size={20} />, url: "https://youtube.com" },
  ];

  return (
    <section className="text-white flex flex-col items-center justify-center pt-32">
      {/* Thank You heading + message */}
      <div className="text-center mb-12 max-w-3xl">
        <h2 className="text-4xl font-black text-brand-pink mb-6">
          {t.thankyou_heading}
        </h2>
        <p className="text-white/60 text-lg leading-relaxed">
          {t.thankyou_message}
        </p>
      </div>

      {/* With gratitude to */}
      <p className="text-white/40 text-sm tracking-widest uppercase mb-6">
        {t.thankyou_gratitude}
      </p>

      {/* Partner carousel */}
      <div className="w-full overflow-hidden mb-12">
        <div className="flex gap-12 animate-marquee-reverse">
          {loopedPartners.map((partner, i) => (
            <span
              key={`${partner}-${i}`}
              className="flex-shrink-0 text-xl font-black text-white whitespace-nowrap"
            >
              {partner}
              <span className="text-brand-pink ml-12">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Closing paragraph */}
      <div className="text-center max-w-3xl mb-16">
        <p className="text-white/60 text-lg leading-relaxed">
          {t.thankyou_closing}
        </p>
      </div>

      <div className="w-32 h-px bg-gradient-to-r from-brand-purple via-brand-pink to-brand-violet mb-16" />

      {/* Quote */}
      <div className="text-center max-w-2xl mb-12">
        <p className="text-2xl font-semibold text-white/90 leading-relaxed mb-6">
          "{t.thankyou_quote}"
        </p>
        <p className="text-brand-pink text-xl font-bold">
          {t.thankyou_closing_line}
        </p>
      </div>

      {/* Logo + tagline */}
      <div className="flex flex-col items-center mb-24">
        <img src={logoImg} alt="Fendous logo" className="w-24 mb-4" />
        <p className="text-brand-violet font-bold text-lg tracking-wide">
          {t.thankyou_tagline}
        </p>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-brand-purple pt-8 flex flex-wrap items-center justify-between gap-6 px-8 pb-4">
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
        <div className="flex gap-4">
          <a
            href="https://fendous.live"
            className="text-white/60 text-sm hover:text-brand-pink transition-colors"
          >
            fendous.live
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
