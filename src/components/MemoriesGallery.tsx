import { useEffect, useRef, useState } from "react";
import memory1 from "@/assets/memory-1.jpeg";
import memory2 from "@/assets/memory-2.jpeg";
import memory3 from "@/assets/memory-3.jpeg";
import memory4 from "@/assets/memory-4.jpeg";
import memory5 from "@/assets/memory-5.jpg";
import memory6 from "@/assets/memory-6.jpg";

const photos = [
  { src: memory1, caption: "Laughing together 💕" },
  { src: memory2, caption: "Our squad 🌸" },
  { src: memory3, caption: "Golden moments ✨" },
  { src: memory4, caption: "Celebrations 🎉" },
  { src: memory5, caption: "Golden memories  🌅" },
  { src: memory6, caption: " 💖" },
];

const MemoriesGallery = () => {
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
    <section id="memories" ref={ref} className="py-24 px-6 bg-cream/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center text-gradient-rose mb-4">
          Our Beautiful Memories
        </h2>
        <p className="font-script text-xl text-muted-foreground text-center mb-16">
          Every moment with you is a treasure 💕
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden glow-border transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-script text-lg text-primary-foreground">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-muted-foreground font-body text-lg italic">
          "In every memory, I find a piece of you that I hold dear." 
        </p>
      </div>
    </section>
  );
};

export default MemoriesGallery;
