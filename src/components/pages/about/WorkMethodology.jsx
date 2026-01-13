"use client";
import Gradient from "@/components/atoms/Gradient";
import Heading from "@/components/atoms/Heading";
import Animate from "@/components/molecules/Animate";
import Slider from "@/components/molecules/Slider";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const WorkMethodology = () => {
  return (
    <Animate className="relative py-10 sm:py-12 lg:pb-20">
      <Gradient className="top-[80%] left-1/2 bg-[#104AF7] blur-[300px]" />

      <div className="container-b">
        <Heading className="mb-14">Our Work Methodology</Heading>
        <Slider
          loop={false}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            540: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          speed={900}
          modules={[Navigation]}
          className="flex"
        >
          {data?.map(({ id, title, description }, index) => {
            return (
              <SwiperSlide key={id}>
                <div className="flex min-h-[298px] hover:border-primary transition-all duration-500 ease-in-out flex-col items-center justify-center rounded-[10px] border border-[#FFFFFF33] p-5">
                  <h2 className="bg-linear-to-r mb-6 text-transparent tracking-tighter text-[36px] font-bold bg-clip-text from-[#3853A3] via-[#55A5D9] to-[#57DDE6]">{`0 ${index + 1}`}</h2>
                  <h3 className="text-[20px] font-semibold mb-3 text-white text-center leading-[24px]">{title}</h3>
                  <p className="text-alpha font-normal text-center leading-[20px]">{description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>
    </Animate>
  );
};

export default WorkMethodology;

const data = [
  {
    id: "1",
    title: "Discovery & Requirement Analysis",
    description:
      "Engage with stakeholders to define objectives, success metrics, and integration needs",
  },
  {
    id: "2",
    title: "Solution Blueprinting",
    description:
      "Create BRD/FRD, map workflows, architecture, and compliance frameworks",
  },
  {
    id: "3",
    title: "Data Preparation & Model Development ",
    description:
      "Clean and structure data; build PoC and custom AI models tailored to enterprise requirements",
  },
  {
    id: "4",
    title: "Testing & Deployment",
    description:
      "Validate performance, security, and compliance; integrate seamlessly into enterprise systems",
  },
  {
    id: "5",
    title: "Monitoring & Continuous Optimization",
    description:
      "Track KPIs,retrain models, and implement governance for scalability and sustained performance",
  },
];
