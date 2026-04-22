import {
  Sparkles, Gem, Bug, Heart, Mountain, Crosshair, Swords, Target,
  Eye, ScanEye, TreePine, Rabbit, Skull, Sprout, KeyRound, Plane,
} from "lucide-react";

type Feature = {
  name: string;
  icon: typeof Sparkles;
  tag?: "OP" | "UD" | "INFO";
  desc: string;
};

const FEATURES: Feature[] = [
  { name: "Pickup Aura", icon: Sparkles, desc: "Auto-collect every drop in range." },
  { name: "Resource Aura", icon: Gem, desc: "Pulls resources to you instantly." },
  { name: "Critter Aura", icon: Bug, desc: "Sweep critters without lifting a finger." },
  { name: "Autoheal", icon: Heart, tag: "INFO", desc: "Smart healing — see info channel." },
  { name: "Mountain Climber", icon: Mountain, desc: "Scale any terrain effortlessly." },
  { name: "TP Kill", icon: Crosshair, tag: "OP", desc: "Teleport-strike enemies on demand." },
  { name: "Kill Aura", icon: Swords, tag: "OP", desc: "Annihilate everything around you." },
  { name: "Bow Aimbot", icon: Target, tag: "OP", desc: "Pixel-perfect arrow tracking." },
  { name: "ESP", icon: Eye, desc: "See players and entities through walls." },
  { name: "Advanced ESP", icon: ScanEye, desc: "Reads armor, gear, and stats." },
  { name: "Resource Farm", icon: TreePine, tag: "OP", desc: "Maxed-out automated harvesting." },
  { name: "Critter Farm", icon: Rabbit, desc: "Endless critter loop, hands-free." },
  { name: "Boss Farm", icon: Skull, tag: "OP", desc: "Solo bosses on repeat. Loot stacks." },
  { name: "Plant Stuff", icon: Sprout, desc: "Auto plant + manage your farm." },
  { name: "Change Toggle Key", icon: KeyRound, desc: "Bind every feature to your taste." },
  { name: "Fly (Noclip)", icon: Plane, tag: "UD", desc: "Phase through walls. Undetected." },
];

const tagStyles: Record<NonNullable<Feature["tag"]>, string> = {
  OP: "bg-primary/20 text-primary border-primary/50",
  UD: "bg-secondary/20 text-secondary border-secondary/50",
  INFO: "bg-accent/20 text-accent border-accent/50",
};

export const FeatureGrid = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block font-mono text-xs tracking-[0.4em] text-primary mb-4 uppercase">
            // Loadout
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-foreground">FULL </span>
            <span className="text-primary text-glow">ARSENAL</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every tool you need to dominate. Toggle them on, run wild.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border/40">
          {FEATURES.map(({ name, icon: Icon, tag, desc }) => (
            <div
              key={name}
              className="group relative bg-card p-6 hover:bg-card/60 transition-all duration-300 hover:z-10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 flex items-center justify-center bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                {tag && (
                  <span
                    className={`font-mono text-[10px] font-bold tracking-widest px-2 py-1 border ${tagStyles[tag]}`}
                  >
                    {tag}
                  </span>
                )}
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1 tracking-wide">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground leading-snug">{desc}</p>

              {/* hover corner */}
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-primary/0 group-hover:border-primary transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
