import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="cta" className="relative py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto relative">
        <div className="relative bg-card/60 backdrop-blur-sm border border-primary/40 p-10 md:p-16 text-center overflow-hidden">
          {/* glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/30 blur-[120px] pointer-events-none" />

          <div className="relative">
            <div className="font-mono text-xs tracking-[0.4em] text-primary mb-4 uppercase">
              // Get Access
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              READY TO <span className="text-primary text-glow">DOMINATE?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Cheapest key on the market. Instant delivery. Daily updates.
              Lifetime support from <span className="text-primary font-semibold">@exothermic</span>.
            </p>

            <div className="flex justify-center mb-8">
              <Button variant="neon" size="xl" asChild>
                <a href="https://discord.gg/vXsNrF9V" target="_blank" rel="noreferrer">
                  Get The Script
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="font-mono text-xs text-muted-foreground tracking-wider">
              [ INSTANT_DELIVERY ] · [ LIFETIME_KEY ] · [ MOBILE + PC ]
            </div>
          </div>

          {/* corners */}
          <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-primary" />
          <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-primary" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-primary" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary" />
        </div>
      </div>
    </section>
  );
};
