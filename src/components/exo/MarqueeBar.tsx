const ITEMS = [
  "UNDETECTED",
  "OP KILL AURA",
  "BOW AIMBOT",
  "ADVANCED ESP",
  "BOSS FARM",
  "MOBILE SUPPORT",
  "CHEAP KEY",
  "DAILY UPDATES",
];

export const MarqueeBar = () => {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-primary/30 bg-card/40 backdrop-blur-sm py-4 overflow-hidden">
      <div className="flex animate-scroll-x whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 font-mono text-sm font-bold text-primary tracking-[0.3em]"
          >
            {item}
            <span className="text-secondary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};
