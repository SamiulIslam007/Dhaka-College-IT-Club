import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { DepartmentsPreview } from "@/components/sections/Departments";
import { Events } from "@/components/sections/Events";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntelSection } from "@/components/sections/IntelSection";
import { StatsSection } from "@/components/sections/StatsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DepartmentsPreview />
      <Events />
      <AchievementsSection />
      <IntelSection />
      <Footer />
    </div>
  );
}
