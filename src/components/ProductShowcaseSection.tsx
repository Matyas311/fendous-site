import { motion } from "framer-motion";
import { useState } from "react";
import { QrCode, Smartphone, CalendarHeart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import productImg from "../assets/product-showcase.png";

export default function ProductShowcaseSection() {
  const { t } = useLanguage();
  const [shimmer, setShimmer] = useState(false);

  const features = [
    {
      id: 1,
      icon: <QrCode size={56} className="text-brand-violet" />,
      title: t.product_feature1_title,
      description: t.product_feature1_desc,
    },
    {
      id: 2,
      icon: (
        <div className="relative">
          <Smartphone size={56} className="text-brand-violet" />
          <span className="absolute -bottom-1 -right-3 bg-[#635BFF] text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
            stripe
          </span>
        </div>
      ),
      title: t.product_feature2_title,
      description: t.product_feature2_desc,
    },
    {
      id: 3,
      icon: <CalendarHeart size={56} className="text-brand-violet" />,
      title: t.product_feature3_title,
      description: t.product_feature3_desc,
    },
  ];

  return (
    <section className="h-fit text-white flex flex-col items-center justify-center px-12 py-20">
      <motion.div
        className={`relative overflow-hidden flex-1 ${shimmer ? "shimmer-effect play" : "shimmer-effect"}`}
        onViewportEnter={() => setShimmer(true)}
        onViewportLeave={() => setShimmer(false)}
        viewport={{ amount: 0.5 }}
      >
        <div className="animated-gradient-border rounded-3xl p-[5px]">
          <div className="w-full max-w-6xl bg-brand-card border border-brand-purple rounded-3xl p-16">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-brand-pink text-sm tracking-widest uppercase mb-4">
                {t.product_eyebrow}
              </p>
              <h2 className="text-6xl font-black mb-3">
                Fendous.
                <span className="bg-brand-pink text-white px-2 rounded-md">
                  Live
                </span>
              </h2>
              <p className="text-2xl font-bold text-white/80 mb-2">
                {t.product_tagline}
              </p>
              <p className="text-brand-violet text-lg font-semibold">
                {t.product_subtagline}
              </p>
            </div>

            {/* Features + Image side by side */}
            <div className="flex items-center justify-between gap-16">
              {/* Features column */}
              <div className="flex flex-col gap-12 max-w-sm">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-start gap-5">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-white font-black text-lg tracking-wide uppercase mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/50 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Product image */}
              <div className="flex-1">
                <img
                  src={productImg}
                  alt="Fendous Live product showcase"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
