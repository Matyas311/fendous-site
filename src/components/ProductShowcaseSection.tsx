interface FeatureItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductShowcaseSectionProps {
  eyebrow: string;
  productName: string;
  tagline: string;
  subtagline: string;
  features: FeatureItem[];
  image: string;
}

export default function ProductShowcaseSection({
  eyebrow,
  productName,
  tagline,
  subtagline,
  features,
  image,
}: ProductShowcaseSectionProps) {
  return (
    <section
      className="min-h-screen text-white flex flex-col items-center justify-center px-12 py-20"
      bg-brand-PSbg
    >
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-brand-pink text-sm tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
        <h2 className="text-6xl font-black mb-3">
          {productName.split(".")[0]}.
          <span className="bg-brand-pink text-white px-2 rounded-md">
            {productName.split(".")[1]}
          </span>
        </h2>
        <p className="text-2xl font-bold text-white/80 mb-2">{tagline}</p>
        <p className="text-brand-violet text-lg font-semibold">{subtagline}</p>
      </div>

      {/* Features + Image side by side */}
      <div className="flex items-center justify-between gap-16 w-full max-w-6xl">
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
            src={image}
            alt="Fendous Live product showcase"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
