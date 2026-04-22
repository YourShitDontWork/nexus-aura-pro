import { Button } from "@/components/ui/button";
import { Zap, Shield, Cpu } from "lucide-react";

export const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 grid-pattern overflow-hidden">
      {/* glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[120px]" />

      {/* status bar */}
      <div className="relative z-10 mb-8 flex items-center gap-2 px-4 py-2 border border-primary/30 bg-card/60 backdrop-blur-sm rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span className="font-mono text-xs tracking-widest text-primary uppercase">
          Status: Undetected · v4.2.0
        </span>
      </div>

      {/* title */}
      <h1 className="relative z-10 text-center font-black text-6xl md:text-8xl lg:text-9xl leading-none mb-6 hover:animate-glitch cursor-default">
        <span className="block text-glow text-primary">SURVIVAL</span>
        <span className="block text-glow-purple text-secondary -mt-2 md:-mt-4">HUB</span>
      </h1>

      <p className="relative z-10 max-w-2xl text-center text-lg md:text-xl text-muted-foreground mb-10 px-4">
        The most <span className="text-primary font-semibold">OP</span> script on the market.
        Built for dominance. <span className="text-secondary font-semibold">PC + Mobile</span>.
        Trusted by hundreds.
      </p>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4 mb-16">
        <Button variant="neon" size="xl" asChild>
          <a href="https://discord.gg/vXsNrF9V" target="_blank" rel="noreferrer">
            <Zap className="w-5 h-5" />
            Get The Script
          </a>
        </Button>
        <Button variant="outlineNeon" size="xl" onClick={scrollToFeatures}>
          View Features
        </Button>
      </div>

      {/* stat strip */}
      <div className="relative z-10 grid grid-cols-3 gap-4 md:gap-12 max-w-3xl w-full px-4">
        {[
          { icon: Shield, label: "Undetected", value: "100%" },
          { icon: Cpu, label: "Cross Platform", value: "iOS / PC" },
          { icon: Zap, label: "Features", value: "16+" },
        ].map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="text-center border border-border/50 bg-card/40 backdrop-blur-sm p-3 md:p-4 hover:border-primary/50 transition-colors"
          >
            <Icon className="w-5 h-5 mx-auto mb-2 text-primary" />
            <div className="font-mono font-bold text-sm md:text-lg text-foreground">{value}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>

      {/* corner brackets */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
    </section>
  );
};
