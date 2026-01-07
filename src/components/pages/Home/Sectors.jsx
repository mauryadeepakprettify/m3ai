"use client";

import Gradient from "@/components/atoms/Gradient";
import Heading from "@/components/atoms/Heading";
import Slider from "@/components/molecules/Slider";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const Sectors = () => {
  return (
    <section className="relative overflow-hidden py-10 pb-32 sm:pt-12 lg:pt-16">
        <Gradient className="top-[80%] left-1/2 blur-[200px] bg-[#104AF7]"/>
      <div className="container">
        <Heading className="mb-18">AI-Powered Impact Across Sectors</Heading>

        <Slider
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            540: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 4 },
            1200: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          speed={500}
          paginationType="fraction"
          modules={[Pagination, Navigation]}
          className="pb-20!"
        >
          {data?.map(({ id, title, icon }) => (
            <SwiperSlide key={id}>
              <div className="relative hover:bg-[#55A5D9] cursor-pointer transition-all duration-500 ease-in-out flex h-[168px] border border-[#aeaeae26] overflow-hidden flex-col items-center justify-center gap-4 rounded-[10px] before:absolute before:top-[80%] before:left-[80%] before:h-[85px] before:w-[85px] before:-translate-x-[50%] before:-translate-y-[50%] before:rounded-full before:bg-white before:blur-[60px] before:content-[''] after:content-[' '] after:absolute after:w-[85px] after:h-[85px] after:-z-10 after:bg-white after:blur-[60px] after:-late-x-1/2 after:-late-y-1/2 after:top-[20%] after:left-[20%]">
                <Image
                  className="h-auto w-auto"
                  src={`/icons/${icon}`}
                  alt={title}
                  width={55}
                  height={55}
                />
                <h5 className="text-center text-[20px] leading-[20px] font-semibold text-white">
                  {title}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sectors;

const data = [
  {
    id: 1,
    title: "Technology",
    content: [
      "Underwriting Workflow Automation – Automate risk assessment and approvals",
      "Structured Finance Model Optimization – Streamline complex financial models",
      "Treasury Operations Workflow Automation – Simplify cash management and reconciliation",
    ],
    icon: "idea.svg",
  },
  {
    id: 2,
    title: "Banking",
    content: [
      "Digital banking workflow automation",
      "Risk management and compliance optimization",
      "AI-driven financial decision systems",
    ],
    icon: "logistic.svg",
  },
  {
    id: 3,
    title: "Logistics",
    content: [
      "Supply chain visibility and optimization",
      "Fleet management automation",
      "Real-time tracking and analytics solutions",
    ],
    icon: "finance.svg",
  },
  {
    id: 4,
    title: "Commercial Real Estate",
    content: [
      "Property portfolio performance analytics",
      "Lease and contract workflow automation",
      "Predictive maintenance and asset optimization",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 5,
    title: "Healthcare",
    content: [
      "Clinical workflow optimization",
      "Patient data analytics and insights",
      "Operational efficiency through automation",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 6,
    title: "Retail & E-Commerce",
    content: [
      "Customer behavior and sales analytics",
      "Inventory and demand forecasting",
      "Omnichannel experience optimization",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 7,
    title: "Manufacturing",
    content: [
      "Production workflow automation",
      "Quality control and predictive analytics",
      "Supply chain and resource optimization",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 8,
    title: "Commercial Real Estate",
    content: [
      "Smart building management systems",
      "Energy efficiency optimization",
      "Asset lifecycle analytics",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 9,
    title: "Healthcare",
    content: [
      "Digital patient engagement platforms",
      "Data-driven clinical decision support",
      "Healthcare operations automation",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 10,
    title: "Retail & E-Commerce",
    content: [
      "Personalized recommendation engines",
      "Marketing automation and insights",
      "Customer retention analytics",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 11,
    title: "Manufacturing",
    content: [
      "Industrial IoT and smart factories",
      "Predictive maintenance systems",
      "Process optimization and automation",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 12,
    title: "Commercial Real Estate",
    content: [
      "Investment performance analytics",
      "Automated reporting and insights",
      "Portfolio risk assessment tools",
    ],
    icon: "real-estate.svg",
  },
];
