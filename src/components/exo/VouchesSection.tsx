import { Quote, Star } from "lucide-react";

type Vouch = {
  user: string;
  date: string;
  text: string;
  color: string;
};

const VOUCHES: Vouch[] = [
  {
    user: "when",
    date: "4/12/26 · 12:25 PM",
    text: "Vouch @exothermic W script",
    color: "text-primary",
  },
  {
    user: "Piłka",
    date: "4/12/26 · 12:36 PM",
    text: "Vouch @exothermic The script works very good even on xeno",
    color: "text-secondary",
  },
  {
    user: "Ddggl0p [BT]",
    date: "4/12/26 · 2:27 PM",
    text: "Vouch @exothermic the key is very cheap",
    color: "text-accent",
  },
  {
    user: "Mr shelly_tester 🧪",
    date: "4/13/26 · 9:39 PM",
    text: "BEST MOBILE SCRIPT BUD works very good on iOS and PC too",
    color: "text-primary",
  },
  {
    user: "Fredikal",
    date: "4/19/26 · 8:41 PM",
    text: "+rep very good script. Went from lvl 1 → GOD in 1 day without any detection. Critter farm is so OP.",
    color: "text-secondary",
  },
  {
    user: "Andr3wwz1",
    date: "4/19/26 · 9:25 PM",
    text: "So good bro, too OP. Vouch @exothermic",
    color: "text-accent",
  },
];

export const VouchesSection = () => {
  return (
    <section id="vouches" className="relative py-24 md:py-32 px-4 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block font-mono text-xs tracking-[0.4em] text-secondary mb-4 uppercase">
            // Community
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-foreground">REAL </span>
            <span className="text-secondary text-glow-purple">VOUCHES</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't take our word for it — straight from the users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VOUCHES.map((v, i) => (
            <article
              key={i}
              className="relative bg-card/60 backdrop-blur-sm border border-border/60 p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/30 transition-colors" />

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 flex items-center justify-center bg-muted border border-border/60 font-bold text-sm ${v.color}`}>
                  {v.user[0].toUpperCase()}
                </div>
                <div>
                  <div className={`font-bold text-sm ${v.color}`}>{v.user}</div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-wider">
                    {v.date}
                  </div>
                </div>
              </div>

              <p className="text-foreground/90 text-sm leading-relaxed mb-4">"{v.text}"</p>

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/60" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/60" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
