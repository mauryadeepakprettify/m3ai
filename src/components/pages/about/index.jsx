import Hero from "@/components/organisms/Hero";
import Overview from "./Overview";
import WorkEthics from "./WorkEthics";
import WorkMethodology from "./WorkMethodology";

const AboutPage = () => {
  return (
    <>
      <Hero
        title="About M3Ai"
        video="abstract-power.mp4"
        scrollTo="#overview"
      />
      <Overview />
      <WorkEthics />
      <WorkMethodology />
    </>
  );
};

export default AboutPage;
