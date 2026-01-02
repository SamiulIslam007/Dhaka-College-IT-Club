import { AboutSection } from "@/components/sections/AboutSection";
import { DepartmentsPreview } from "@/components/sections/Departments";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DepartmentsPreview />
    </div>
  );
}
