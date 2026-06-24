import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

interface PhotoCarouselSectionProps {
  images: CarouselImage[];
}

export default function PhotoCarouselSection({
  images,
}: PhotoCarouselSectionProps) {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(
    null,
  );
  const loopedImages = [...images, ...images];

  return (
    <section className="text-white flex flex-col items-center justify-center px-12 py-20 overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-widest uppercase text-white/80 mb-3">
          {t.carousel_heading}
        </h2>
        <p className="text-brand-pink text-sm tracking-wider uppercase">
          {t.carousel_subheading}
        </p>
      </div>

      {/* Marquee */}
      <div className="w-full overflow-hidden">
        <div className={`flex gap-6 ${selectedImage ? "" : "animate-marquee"}`}>
          {loopedImages.map((image, i) => (
            <div
              key={`${image.id}-${i}`}
              onClick={() => setSelectedImage(image)}
              className="flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden border border-brand-purple cursor-pointer hover:border-brand-pink transition-colors duration-300"
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-3xl max-h-[85vh] rounded-2xl border border-brand-pink shadow-[0_0_60px_rgba(233,30,140,0.4)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
