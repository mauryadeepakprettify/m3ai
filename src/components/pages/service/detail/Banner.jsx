"use client";
import Gradient from "@/components/atoms/Gradient";
import Slider from "@/components/molecules/Slider";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const ServiceBanner = ({ img, title, description, features, className }) => {
  return (
    <section
      className={`relative overflow-hidden ${className ? className : "h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen"}`}
    >
      <Image
        src={`/images/banner/${img}`}
        alt="banner"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
      />

      <div className="absolute top-1/2 left-1/2 w-full max-w-[450px] -translate-x-1/2 -translate-y-1/2 lg:left-[6%] lg:translate-x-0">
        <h1 className="mb-2 text-center text-[26px] leading-[100%] font-semibold text-white md:mb-4 md:text-[32px] lg:text-left xl:text-[48px]">
          {title}
        </h1>
        <p className="text-center text-base leading-[100%] font-semibold text-white lg:text-left lg:text-[20px]">
          {description}{" "}
        </p>
      </div>

      <div className="absolute right-0 bottom-0 left-0 flex h-[92px] w-full items-center bg-linear-to-r from-[#222222] to-[#050829] sm:px-6 lg:px-8">
        <div className="w-[20%] shrink-0 py-8 md:w-[15%]">
          <h6 className="text-primary text-center text-sm leading-[16px] font-semibold md:text-base lg:text-left">
            Business Impact
          </h6>
        </div>
        <div className="realive w-[80%] md:w-[85%]">
          <Slider
            loop={false}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              540: { slidesPerView: 1 },
              768: { slidesPerView: 2.4 },
              991: { slidesPerView: 2.5 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
            spaceBetween={20}
            speed={900}
            modules={[Navigation]}
          >
            {features?.map(({ id, description }, index) => (
              <SwiperSlide
                className="border-[#FFFFFF29] py-[30px] pr-[20px] pl-[20px] not-last:border-r"
                key={id}
              >
                <p className="flex h-full gap-4 text-sm leading-[100%] font-medium text-white lg:gap-8 lg:text-base">
                  <span className="text-[20px] font-semibold md:text-[22px] lg:text-[24px]">{`0${index + 1}`}</span>{" "}
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


