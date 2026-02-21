import FloatingHearts from "@/components/FloatingHearts";
import Navigation from "@/components/Navigation";
import SurpriseButton from "@/components/SurpriseButton";

const SurprisePage = () => (
  <main className="relative overflow-x-hidden min-h-screen pb-24 flex flex-col">
    <FloatingHearts />
    <div className="flex-1 flex items-center justify-center">
      <SurpriseButton />
    </div>
    <Navigation />
  </main>
);

export default SurprisePage;
