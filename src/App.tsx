import ExecutionSection from "./components/ExecutionSection";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import PillarsSection from "./components/PillarSection";
import ProductShowcaseSection from "./components/ProductShowcaseSection";
import FocusSection from "./components/FocusSection";
import PhotoCarouselSection from "./components/PhotoCarouselSection";
import ThankYouSection from "./components/ThankYouSection";

import { motion } from "framer-motion";

{
  ("carousel photos");
}
import img1 from "./assets/carosel/1.jpg";
import img2 from "./assets/carosel/2.jpg";
import img3 from "./assets/carosel/3.jpg";
import img4 from "./assets/carosel/4.jpg";
import img5 from "./assets/carosel/5.jpg";
import img6 from "./assets/carosel/6.jpeg";
import img7 from "./assets/carosel/7.jpg";
import img8 from "./assets/carosel/8.png";
import img9 from "./assets/carosel/9.jpg";
import img10 from "./assets/carosel/10.jpg";
import img11 from "./assets/carosel/11.png";
import img12 from "./assets/carosel/12.jpg";
import img13 from "./assets/carosel/last.jpg";

function App() {
  return (
    <>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <JourneySection />
      </motion.div>

      <ExecutionSection />

      <PillarsSection />
      <ProductShowcaseSection />
      <FocusSection />
      <PhotoCarouselSection
        images={[
          { id: 1, src: img1, alt: "Photo 1" },
          { id: 2, src: img2, alt: "Photo 2" },
          { id: 3, src: img3, alt: "Photo 3" },
          { id: 4, src: img4, alt: "Photo 4" },
          { id: 5, src: img5, alt: "Photo 5" },
          { id: 6, src: img6, alt: "Photo 6" },
          { id: 7, src: img7, alt: "Photo 7" },
          { id: 8, src: img8, alt: "Photo 8" },
          { id: 9, src: img9, alt: "Photo 9" },
          { id: 10, src: img10, alt: "Photo 10" },
          { id: 11, src: img11, alt: "Photo 11" },
          { id: 12, src: img12, alt: "Photo 12" },
          { id: 13, src: img13, alt: "Photo 13" },
        ]}
      />
      <ThankYouSection />
    </>
  );
}

export default App;
