import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30 sparkle-bg" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <p className="font-script text-2xl md:text-3xl text-primary mb-4 animate-fade-in">
          ✨ With all my love ✨
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient-rose leading-tight">
          Happy Birthday
          <br />
           Didi ❤️
        </h1>
        <p className="font-body text-xl md:text-2xl text-muted-foreground italic mt-4" style={{ animationDelay: "0.3s", animationFillMode: "both", animation: "sectionFadeIn 1s ease-out 0.5s forwards", opacity: 0 }}>
          "The senior who turned moments into memories."
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-gentle-bounce">
          <a href="#memories" className="text-primary/60 hover:text-primary transition-colors">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
