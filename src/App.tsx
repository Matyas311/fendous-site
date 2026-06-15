import HeroSection from "./components/HerSection";

function App() {
  return (
    <HeroSection
      years={4}
      tagline="From Products to Platforms. From Vision to Real Impact."
      dateRange="2022 – 2026"
      threeIs={["Innovation", "Integration", "Impact"]}
    />
  );
}

export default App;
