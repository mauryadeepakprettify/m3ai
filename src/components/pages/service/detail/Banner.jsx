"use client";
import Gradient from "@/components/atoms/Gradient";
import Slider from "@/components/molecules/Slider";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const ServiceBanner = ({ img, className }) => {
  return (
    <section
      className={`relative overflow-hidden ${className ? className : "h-screen"}`}
    >
      <Image
        src={`/images/banner/${img}`}
        alt="banner"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
      />

      <div className="absolute top-1/2 left-[6%] max-w-[450px] -translate-y-1/2">
        <h1 className="mb-4 text-[48px] leading-[100%] font-semibold text-white">
          AI Workflows Orchestration
        </h1>
        <p className="leading-[100%] font-semibold text-white">
          Streamlining Complexity. Accelerating Outcomes.
        </p>
      </div>

      <div className="absolute right-0 bottom-0 left-0 flex min-h-[92px] w-full items-center bg-linear-to-r from-[#222222] to-[#050829] sm:px-6 lg:px-8">
        <div className="w-[15%] shrink-0 py-8">
          <h6 className="text-primary font-semibold">Business Impact</h6>
        </div>
        <div className="realive w-[85%]">
          <Slider
            loop={false}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              540: { slidesPerView: 1 },
              768: { slidesPerView: 2.4 },
              991: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
            spaceBetween={20}
            speed={900}
            modules={[Navigation]}
          >
            {data?.map(({ id, description }, index) => (
              <SwiperSlide
                className="border-[#FFFFFF29] py-[30px] pr-[30px] pl-[20px] not-last:border-r"
                key={id}
              >
                <p className="flex h-full gap-8 leading-[100%] font-medium text-white">
                  <span className="text-[24px] font-semibold">{`0${index + 1}`}</span>{" "}
                  {description}
                </p>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;

const data = [
  {
    id: 1,
    description: "Faster processing times with zero errors",
  },
  {
    id: 2,
    description: "Faster processing times with zero errors",
  },
  {
    id: 3,
    description: "Faster processing times with zero errors",
  },
  {
    id: 4,
    description: "Faster processing times with zero errors",
  },
  {
    id: 5,
    description: "Faster processing times with zero errors",
  },
  {
    id: 6,
    description: "Faster processing times with zero errors",
  },
];
