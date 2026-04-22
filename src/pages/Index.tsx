import { Hero } from "@/components/exo/Hero";
import { FeatureGrid } from "@/components/exo/FeatureGrid";
import { VouchesSection } from "@/components/exo/VouchesSection";
import { CTASection } from "@/components/exo/CTASection";
import { SiteFooter } from "@/components/exo/SiteFooter";
import { MarqueeBar } from "@/components/exo/MarqueeBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <MarqueeBar />
      <FeatureGrid />
      <VouchesSection />
      <CTASection />
      <SiteFooter />
    </main>
  );
};

export default Index;
