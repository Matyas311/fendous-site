interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

interface PhotoCarouselSectionProps {
  heading: string;
  subheading: string;
  images: CarouselImage[];
}

export default function PhotoCarouselSection({
  heading,
  subheading,
  images,
}: PhotoCarouselSectionProps) {
  // Duplicate the images so the marquee loops seamlessly
  const loopedImages = [...images, ...images];

  return (
    <section className="text-white flex flex-col items-center justify-center px-12 py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-widest uppercase text-white/80 mb-3">
          {heading}
        </h2>
        <p className="text-brand-pink text-sm tracking-wider uppercase">
          {subheading}
        </p>
      </div>

      {/* Marquee */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {loopedImages.map((image, i) => (
            <div
              key={`${image.id}-${i}`}
              className="flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden border border-brand-purple"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
