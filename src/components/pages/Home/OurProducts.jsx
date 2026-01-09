"use client";

import ExternalBtn from "@/components/atoms/ExternalBtn";
import Gradient from "@/components/atoms/Gradient";
import Heading from "@/components/atoms/Heading";
import Slider from "@/components/molecules/Slider";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const OurProducts = () => {
  return (
    <section className="relative py-10 sm:py-12 lg:py-16">
      <Gradient className="top-[40%] left-1/2 bg-[#104AF7] blur-[200px]" />
      <div className="container">
        <Heading className="mb-32">M3AI Products</Heading>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative">
            <Image
              className="animate-floatUpDown absolute bottom-[35px] left-0 z-10"
              src="/icons/hologram.svg"
              alt="creddt"
              width={453}
              height={382}
            />
            <Image
              className="absolute bottom-0 left-0"
              src="/icons/mobile-shadow.svg"
              alt="creddt"
              width={455}
              height={320}
            />
          </div>
          <div>
            <div className="relative mb-10 before:absolute before:-bottom-5 before:left-0 before:h-[3px] before:w-[63px] before:bg-[#1B9BD5] before:content-['']">
              <h3 className="relative mb-3 w-fit text-[48px] font-light text-white before:absolute before:top-0 before:-right-10 before:flex before:h-[25px] before:w-[25px] before:items-center before:justify-center before:rounded-full before:border-2 before:border-white before:text-center before:text-[13px] before:content-['R']">
                CREDDT
              </h3>
              <p className="text-alpha text-[18px] font-semibold">
                Commercial Real Estate Due Diligence Tools
              </p>
            </div>

            <p className="text-alpha mb-6 leading-[24px] font-medium">
              CREDDT is a commercial real estate due diligence and underwriting
              platform for loan sizing, securitization, and underwriting
              workflows.Included in its various functionalities, it can automate
              document extraction, model population, broker package generation,
              and data tape creation from complex CRE materials.
            </p>

            <Slider
              loop={false}
              breakpoints={{
                0: { slidesPerView: 1.2 },
                540: { slidesPerView: 1.2 },
                768: { slidesPerView: 2 },
                991: { slidesPerView: 2 },
                1200: { slidesPerView: 2 },
              }}
              spaceBetween={20}
              speed={900}
              modules={[Navigation]}
            >
              {data?.map(({ title, description }, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-[5px] bg-white p-4">
                    <h4 className="mb-1 font-semibold">{title}</h4>
                    <p className="text-[14px] font-normal text-[#000000B2]">
                      {description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Slider>

            <ExternalBtn className="mt-6">Read more</ExternalBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;

export const data = [
  {
    title: "Financial Analysis Engine",
    description:
      "Cash flow projections, valuation models, and cap rate metrics.",
  },
  {
    title: "Automated Document Review",
    description: "Lease summaries, rent rolls, & compliance reports",
  },
  {
    title: "Financial Analysis Engine",
    description:
      "Cash flow projections, valuation models, and cap rate metrics.",
  },
  {
    title: "Automated Document Review",
    description: "Lease summaries, rent rolls, & compliance reports",
  },
  {
    title: "Financial Analysis Engine",
    description:
      "Cash flow projections, valuation models, and cap rate metrics.",
  },
  {
    title: "Automated Document Review",
    description: "Lease summaries, rent rolls, & compliance reports",
  },
];
