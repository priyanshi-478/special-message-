import FloatingHearts from "@/components/FloatingHearts";
import Navigation from "@/components/Navigation";
import HeartfeltNote from "@/components/HeartfeltNote";

const NotePage = () => (
  <main className="relative overflow-x-hidden min-h-screen pb-24">
    <FloatingHearts />
    <HeartfeltNote />
    <Navigation />
  </main>
);

export default NotePage;
