import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import MidSection from "@/components/MidSection";
import FeatureBand from "@/components/FeatureBand";
import SolarCalculator from "@/components/SolarCalculator";
import Subsidies from "@/components/Subsidies";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-deep font-sans selection:bg-primary selection:text-white">
      <Hero />
      <FeatureStrip />

      <MidSection />

      <FeatureBand />

      <SolarCalculator />

      <Subsidies />

      <Reviews />

      <CTASection />
    </main>
  );
}
