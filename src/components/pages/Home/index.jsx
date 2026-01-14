import Hero from "@/components/organisms/Hero";
import MissionVision from "./MissionVision";
import EnterpriseGrowth from "./EnterpriseGrowth";
import OurProducts from "./OurProducts";
import Sectors from "./Sectors";

const HomePage = () => {
  return (
    <>
      <Hero title={<><span className='opacity-50'>Meet</span> M3 Ai</>} tagline="Engineering Intelligence for <br /> What Matters Most" video="cube-neon.mp4" scrollTo="/#mission-vision" />
      <MissionVision />
      <EnterpriseGrowth />
      <OurProducts />
      <Sectors />
    </>
  );
};

export default HomePage;
