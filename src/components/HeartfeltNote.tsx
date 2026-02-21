import { useEffect, useRef, useState } from "react";

const HeartfeltNote = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-6 bg-cream/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center text-gradient-rose mb-4">
          A Note For Ritika Didi
        </h2>
        <p className="font-script text-xl text-muted-foreground text-center mb-12">
          From my heart to yours 💌
        </p>

        <div
          className={`glass-card rounded-3xl p-8 md:p-12 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="font-body text-lg md:text-xl leading-relaxed text-foreground space-y-6">
            <p className="italic text-muted-foreground">I don't even know where to start… but I had to try.</p>

            <p>You are the first senior in my life who truly stayed. Before you, I had never even properly talked to any senior in school. But with you, something felt different from the very beginning.</p>

            <p>The first time I met you, I was honestly scared — scared that you might scold me or that I might do something wrong. But slowly, that fear turned into comfort. Being around you started feeling safe, warm, and fun.</p>

            <p>You treated us like little kids — the kind you silently promise to protect no matter what. Whenever we had a problem, we came straight to you, because we knew you would handle everything. And you always did.</p>

            <p>Day by day, we grew so close that sometimes it didn't even feel like we were senior and junior anymore. During the project, I knew one thing for sure — if I told you, it would be done.</p>

            <p>Even when I used to miss drill classes because of my back pain you always say ko nahi health phele and alawys appreciate about my canva design, When you didn’t come to NCC class, somewhere in my heart I always believed that you would still be there.. Whether it was giving  me ncc tracksuit from the  office or helping with ceremonial things — no one has done that much for me the way you have.</p>

            <p>My laptop and phone are filled with your photos. I still wish we had one perfect picture together in uniform. And all that gossiping, laughing, and little chugli sessions with you — those are my favorite moments.</p>

            <p>There's still so much more I want to say… but maybe you already understand. And sometimes, being understood without saying everything is enough.</p>

            <p className="font-script text-2xl md:text-3xl text-primary text-center mt-8">
              Happy Birthday,  Didi. 💖
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartfeltNote;
