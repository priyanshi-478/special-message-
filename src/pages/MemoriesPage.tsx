import FloatingHearts from "@/components/FloatingHearts";
import Navigation from "@/components/Navigation";
import MemoriesGallery from "@/components/MemoriesGallery";

const MemoriesPage = () => (
  <main className="relative overflow-x-hidden min-h-screen pb-24">
    <FloatingHearts />
    <MemoriesGallery />
    <Navigation />
  </main>
);

export default MemoriesPage;
