import HeroSection from "./components/HerSection";

function App() {
  return (
    <HeroSection
      years={4}
      companyName="Fendous"
      tagline="From Products to Platforms. From Vision to Real Impact."
      dateRange="2023 – 2026"
      pillars={["Innovation", "Integration", "Impact"]}
    />
  );
}

export default App;
