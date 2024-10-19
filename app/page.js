import LandingBanner from "@/components/single-use/landing-banner/LandingBanner";
import ResearchAreas from "@/components/single-use/research-areas/ResearchAreas";
import CountUpSection from "@/utils/count-up/CountUpSection";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-200 min-h-screen">
      <LandingBanner />
      <CountUpSection />
      <ResearchAreas />
    </main>
  );
}
