import { useState } from "react";
import confetti from "canvas-confetti";

const SurpriseButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);

    // Fire confetti
    const duration = 4000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#e8a0b4", "#c4a8d4", "#f5e6d0", "#ff69b4", "#dda0dd"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#e8a0b4", "#c4a8d4", "#f5e6d0", "#ff69b4", "#dda0dd"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <section className="py-24 px-6 sparkle-bg">
      <div className="max-w-2xl mx-auto text-center">
        <button
          onClick={handleClick}
          className="font-display text-xl md:text-2xl px-10 py-5 rounded-full bg-primary text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Click Here Didi 🎁
        </button>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={() => setShowPopup(false)}>
            <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />
            <div
              className="relative glass-card rounded-3xl p-8 md:p-12 max-w-lg w-full glow-border animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <p className="font-script text-5xl mb-6">🎂</p>
                <p className="font-body text-lg md:text-xl leading-relaxed text-foreground mb-6">
                  "You are not just my senior, you are my safe place, my inspiration, and my forever favorite person. Thank you for choosing to stay."
                </p>
                <p className="font-script text-3xl text-primary">
                  Happy Birthday  Didi 💕
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-8 font-body text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Close ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurpriseButton;
