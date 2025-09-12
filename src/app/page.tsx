import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import CoursesSection from "../components/CoursesSection";
import TargetSection from "../components/TargetSection";
import BenefitsSection from "../components/BenefitsSection";
import FAQSection from "../components/FAQSection";
import Divider from "../components/Divider";
import SpecialDivider from "../components/SpecialDivider";
import PlaySection from "../components/PlaySection";

export default function Home() {
  return (
    <main className="sm:w-full w-screen overflow-hidden">
      <Hero />
      <Divider />
      <PlaySection />
      <VideoSection />
      <Divider />
      <CoursesSection />
      <div className="mt-10 sm:mt-20">
        <SpecialDivider />
      </div>
      <TargetSection />
      <SpecialDivider />
      <BenefitsSection />
      <Divider className="mt-10 sm:mt-20" />
      <FAQSection />
    </main>
  );
}
