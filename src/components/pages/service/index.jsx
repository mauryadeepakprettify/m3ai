import Hero from "@/components/organisms/Hero";
import ServiceList from "./ServiceList";

const ServicePage = () => {
  return (
    <>
      <Hero video="wave.mp4" title="Services" scrollTo="#service" />
      <ServiceList />
    </>
  );
};

export default ServicePage;
