export const SiteFooter = () => {
  return (
    <footer className="border-t border-border/40 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-black text-xl tracking-widest">
          <span className="text-primary text-glow">EXO</span>
          <span className="text-secondary text-glow-purple">THERMIC</span>
        </div>
        <div className="font-mono text-xs text-muted-foreground tracking-wider text-center">
          © 2026 EXOTHERMIC · BUILT FOR THE GRIND · NOT AFFILIATED WITH ROBLOX
        </div>
      </div>
    </footer>
  );
};
