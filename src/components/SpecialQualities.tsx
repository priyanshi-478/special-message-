import { useEffect, useRef, useState } from "react";
import { Heart, Star, Sparkles, Sun, Users, Award } from "lucide-react";

const qualities = [
  { icon: Heart, text: "Always ready for to help us ",emoji: "🤗"   },
  { icon: Heart, text: "My comfort person", emoji: "🤗" },
  { icon: Sparkles, text: "The strongest yet softest heart", emoji: "💪" },
  { icon: Star, text: "The one who makes ordinary days unforgettable", emoji: "✨" },
  { icon: Award, text: "A true mentor and friend", emoji: "🏆" },
  { icon: Users, text: "My forever favorite senior", emoji: "💖" },
];

const SpecialQualities = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 sparkle-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center text-gradient-rose mb-4">
          Why Ritika Didi Is So Special
        </h2>
        <p className="font-script text-xl text-muted-foreground text-center mb-16">
          A few reasons among millions 🌸
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualities.map((q, i) => {
            const Icon = q.icon;
            return (
              <div
                key={i}
                className={`glass-card rounded-2xl p-6 flex items-center gap-4 transition-all duration-700 hover:glow-border group ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-body text-lg text-foreground">
                  {q.emoji} {q.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialQualities;
