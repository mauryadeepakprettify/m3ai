import Hero from "@/components/organisms/Hero";
import MissionVision from "./MissionVision";
import EnterpriseGrowth from "./EnterpriseGrowth";
import OurProducts from "./OurProducts";
import Sectors from "./Sectors";

const HomePage = () => {
  return (
    <>
      <Hero title="Meet M3 Ai" tagline="Engineering Intelligence for What Matters Most" video="cube-neon.mp4" scrollTo="/#mission-vision" />
      <MissionVision />
      <EnterpriseGrowth />
      <OurProducts />
      <Sectors/>
    </>
  );
};

export default HomePage;
