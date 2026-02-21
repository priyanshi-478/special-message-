import { Link } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import Navigation from "@/components/Navigation";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <main className="relative overflow-x-hidden">
      <FloatingHearts />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/30 sparkle-bg" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
          <p className="font-script text-2xl md:text-3xl text-primary mb-4 animate-fade-in">
            ✨ With all my love ✨
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient-rose leading-tight">
            Happy Birthday
            <br />
            Ritika Didi ❤️
          </h1>
          <p
            className="font-body text-xl md:text-2xl text-muted-foreground italic mt-4"
            style={{ animation: "sectionFadeIn 1s ease-out 0.5s forwards", opacity: 0 }}
          >
            "The senior who turned moments into memories."
          </p>

          <div className="mt-16 animate-gentle-bounce">
            <Link
              to="/memories"
              className="inline-block font-display text-lg px-8 py-3 rounded-full bg-primary text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform"
            >
              Explore →
            </Link>
          </div>
        </div>
      </section>
      <Navigation />
    </main>
  );
};

export default Index;
