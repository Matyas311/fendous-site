import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import { Package, Network, Headphones } from "lucide-react";

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
              { label: "Services", icon: <Headphones size={16} /> },
            ],
          },
        ]}
      />
    </>
  );
}

export default App;
