import ExecutionSection from "./components/ExecutionSection";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import PillarsSection from "./components/PillarSection";
import ProductShowcaseSection from "./components/ProductShowcaseSection";
import FocusSection from "./components/FocusSection";

import {
  Package,
  Network,
  Headset,
  GraduationCap,
  Handshake,
  Users,
  Earth,
  CodeXml,
  BrainCircuit,
  Lock,
  Sprout,
  QrCode,
  Smartphone,
  CalendarHeart,
  UserPlus,
  HandCoins,
  SquareActivity,
} from "lucide-react";

import productImg from "./assets/ProductShowcaseImg.png";
import humanImg from "./assets/humanOriented.jpg";
import financeImg from "./assets/finance.jpg";
import healthcareImg from "./assets/healthcare.jpg";

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
import PhotoCarouselSection from "./components/PhotoCarouselSection";

function App() {
  return (
    <>
      <HeroSection
        years={4}
        tagline="From Products to Platforms. From Vision to Real Impact."
        dateRange="2022 – 2026"
        threeIs={["Innovation", "Integration", "Impact"]}
      />
      <JourneySection
        heading="Our Journey"
        subheading="A story of adaptation, execution and impact."
        nodes={[
          {
            id: 1,
            label: "2022",
            title: "The Start",
            description:
              "We Started with 3 core products built for modern business needs.",
            items: ["Fendous CRM", "Fendous PLS", "Fendous Chatbot"],
          },
          {
            id: 2,
            label: "AI Shift",
            title: "Market Disruption with AI",
            description: "AI changed the game. We changed our strategy.",
          },
          {
            id: 3,
            label: "GAIN",
            title: "Strategic Shift",
            description: "We launched GAIN with 4 powerful pillars.",
            items: [
              "IT Solutions",
              "AI Solutions",
              "Security Solutions",
              "ESG Intelligence",
            ],
          },
          {
            id: 4,
            label: "Model",
            title: "Integrated Business Model",
            description:
              "Products + Solutions + Support Services working together.",
            circles: [
              { label: "Products", icon: <Package size={16} /> },
              { label: "Solutions", icon: <Network size={16} /> },
              { label: "Services", icon: <Headset size={16} /> },
            ],
          },
        ]}
      />
      <ExecutionSection
        heading="Execution · Partnerships · People · Impact"
        cards={[
          {
            id: 1,
            icon: <GraduationCap size={48} className="text-brand-violet" />,
            title: "DTU Collaboration",
            subtitle: "Knowledge exchange.",
            description: "Innovation together.",
          },
          {
            id: 2,
            icon: <Handshake size={48} className="text-brand-magenta" />,
            title: "Built Partnerships",
            subtitle: "Stronger ecosystem.",
            description: "Greater impact.",
          },
          {
            id: 3,
            icon: <Users size={48} className="text-brand-pink" />,
            title: "Onboarded 3 Customers",
            subtitle: "Early trust.",
            description: "Long-term vision.",
          },
          {
            id: 4,
            icon: <Earth size={48} className="text-brand-violet" />,
            title: "Offered Horizontal Solutions",
            subtitle: "Across industries.",
            description: "Across use cases.",
          },
          {
            id: 5,
            icon: <Users size={48} className="text-brand-purple" />,
            title: "Served 50+ Talents",
            subtitle: "Empowered people.",
            description: "Built future-ready teams.",
          },
        ]}
      />
      <PillarsSection
        heading="Our Pillars"
        subheading="Powering everything we build"
        pillars={[
          {
            id: 1,
            icon: <CodeXml size={56} className="text-brand-violet" />,
            title: "IT Solutions",
            description: "Robust. Scalable. Future-ready.",
            glowColor:
              "hover:shadow-[0px_0px_60px_15px_rgba(155,_93,_229,_0.5)]", // violet
          },
          {
            id: 2,
            icon: <BrainCircuit size={56} className="text-brand-pink" />,
            title: "AI Solutions",
            description: "Intelligent. Adaptive. Transformative.",
            glowColor:
              "hover:shadow-[0px_0px_60px_15px_rgba(233,_30,_140,_0.5)]", // pink
          },
          {
            id: 3,
            icon: <Lock size={56} className="text-brand-violet" />,
            title: "Security Solutions",
            description: "Secure by design. Trust in every layer.",
            glowColor:
              "hover:shadow-[0px_0px_60px_15px_rgba(155,_93,_229,_0.5)]", // violet
          },
          {
            id: 4,
            icon: <Sprout size={56} className="text-brand-pink" />,
            title: "ESG Intelligence",
            description: "Sustainable. Responsible. Future-focused.",
            glowColor:
              "hover:shadow-[0px_0px_60px_15px_rgba(233,_30,_140,_0.5)]", // pink
          },
        ]}
      />
      <ProductShowcaseSection
        eyebrow="Celebrating Our Core Product Solution"
        productName="Fendous.Live"
        tagline="Event Management, Reimagined."
        subtagline="Smart. Seamless. Secure."
        image={productImg}
        features={[
          {
            id: 1,
            icon: <QrCode size={64} className="text-brand-violet" />,
            title: "QR Check-in",
            description: "Fast, secure and contactless check-ins.",
          },
          {
            id: 2,
            icon: (
              <div className="relative">
                <Smartphone size={64} className="text-brand-violet" />
                <span className="absolute -bottom-2 -right-4 bg-[#635BFF] text-white text-[12px] font-bold px-1.5 py-0.5 rounded">
                  stripe
                </span>
              </div>
            ),
            title: "Mobile & Stripe Payments",
            description: "Seamless payments anytime, anywhere.",
          },
          {
            id: 3,
            icon: <CalendarHeart size={64} className="text-brand-violet" />,
            title: "Built for Experiences",
            description: "Conferences, workshops, webinars, meetings and more.",
          },
        ]}
      />
      <FocusSection
        heading="2026 Focus"
        subheading="Building App Solutions With Purpose"
        description="Human-oriented. Finance. Healthcare. Impact that matters."
        goals={[
          {
            id: 1,
            icon: <UserPlus size={40} className="text-brand-pink" />,
            title: "Human Oriented",
            description: "People-first. Purpose-driven.",
            glowColor:
              "hover:shadow-[0px_0px_60px_15px_rgba(233,_30,_140,_0.5)]",
            img: humanImg,
          },
          {
            id: 2,
            icon: <HandCoins size={40} className="text-brand-violet" />,
            title: "Finance",
            description:
              "Intelligent solutions for a stronger financial future.",
            glowColor:
              "hover:shadow-[0px_0px_60px_15px_rgba(155,_93,_229,_0.5)]",
            img: financeImg,
          },
          {
            id: 3,
            icon: <SquareActivity size={40} className="text-brand-pink" />,
            title: "Healthcare",
            description: "Secure. Connected. Compassionate care through tech.",
            glowColor:
              "hover:shadow-[0px_0px_60px_15px_rgba(233,_30,_140,_0.5)]",
            img: healthcareImg,
          },
        ]}
      />
      <PhotoCarouselSection
        heading="Through The Years"
        subheading="Our team, our story"
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
    </>
  );
}

export default App;
