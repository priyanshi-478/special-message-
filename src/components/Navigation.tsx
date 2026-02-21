import { Link } from "react-router-dom";
import { Heart, Image, Star, PenLine, Gift } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";

const navItems = [
  { to: "/memories", icon: Image, label: "Memories" },
  { to: "/special", icon: Star, label: "Special" },
  { to: "/note", icon: PenLine, label: "Note" },
  { to: "/surprise", icon: Gift, label: "Surprise" },
];

const Navigation = () => (
  <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-card rounded-full px-4 py-3 flex gap-2 md:gap-4 shadow-lg">
    <Link to="/" className="flex flex-col items-center gap-1 px-3 py-1 rounded-full hover:bg-primary/10 transition-colors group">
      <Heart className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
      <span className="text-xs font-body text-muted-foreground">Home</span>
    </Link>
    {navItems.map((item) => (
      <Link key={item.to} to={item.to} className="flex flex-col items-center gap-1 px-3 py-1 rounded-full hover:bg-primary/10 transition-colors group">
        <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
        <span className="text-xs font-body text-muted-foreground">{item.label}</span>
      </Link>
    ))}
  </nav>
);

export { Navigation, FloatingHearts };
export default Navigation;
