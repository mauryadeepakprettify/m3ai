import Hero from "@/components/organisms/Hero";
import SectorList from "./SectorList";

const IndustryPage = () => {
  return (
    <>
      <Hero
        tagline="We help organizations across industries streamline operations, reduce manual work, and unlock scalable productivity through enterprise-grade automation.
"
        className="h-[600px]"
        video="abstract-power.mp4"
      />
      <SectorList />
    </>
  );
};

export default IndustryPage;
