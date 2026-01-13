"use client";
import Gradient from "@/components/atoms/Gradient";
import Heading from "@/components/atoms/Heading";
import ServiceCard from "@/components/molecules/ServiceCard";
import Slider from "@/components/molecules/Slider";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const MoreService = () => {
  return (
    <section className="relative py-12 lg:py-20">
      <Gradient className="top-[80%] left-1/2 bg-[#104AF7] blur-[300px]" />

      <div className="container-b">
        <Heading className="mb-12">More Services</Heading>
        <Slider
          loop={false}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            540: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
          spaceBetween={20}
          speed={900}
          modules={[Navigation]}
        >
          {data?.map(({ link, icon, title, description }) => (
            <SwiperSlide key={title}>
              <ServiceCard
                link={link}
                icon={icon}
                title={title}
                description={description}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MoreService;

const data = [
  {
    link: "ai-workflows-orchestration",
    icon: "branch.svg",
    title: "AI Workflows Orchestration",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "server.svg",
    title: "Data Intelligence",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "react.svg",
    title: "Data Analytics",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "code.svg",
    title: "AI Native Product Development",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "grow.svg",
    title: "Agentic Architecture",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "server.svg",
    title: "Custom SLMs",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
];
