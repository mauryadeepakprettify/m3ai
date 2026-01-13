"use client";

import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";
import Heading from "@/components/atoms/Heading";
import Animate from "@/components/molecules/Animate";
import Slider from "@/components/molecules/Slider";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const OurProducts = () => {
  return (
    <Animate className="relative py-10 sm:py-12 lg:py-20">
      <Gradient className="top-[40%] left-1/2 bg-[#104AF7] blur-[200px]" />
      <div className="container">
        <Heading className="mb-10 md:mb-16 lg:mb-32">M3AI Products</Heading>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="relative h-[400px] md:flex md:h-[450px] md:items-center md:justify-center lg:h-auto">
            <Image
              className="animate-floatUpDown absolute bottom-[35px] left-1/2 z-10 -translate-x-1/2"
              src="/icons/hologram.svg"
              alt="creddt"
              width={453}
              height={382}
              loading="eager"
            />
            <Image
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              src="/icons/mobile-shadow.svg"
              alt="creddt"
              width={455}
              height={320}
            />
          </div>
          <div>
            <div className="relative mb-10 before:absolute before:-bottom-5 before:left-0 before:hidden before:h-[3px] before:w-[63px] before:bg-[#1B9BD5] before:content-[''] before:lg:block">
              <h3 className="relative mx-auto mb-3 w-fit text-[32px] font-light text-white before:absolute before:top-0 before:-right-10 before:flex before:h-[20px] before:w-[20px] before:items-center before:justify-center before:rounded-full before:border-2 before:border-white before:text-center before:text-[13px] before:content-['R'] md:text-[36px] lg:mx-0 lg:mr-auto lg:text-[48px] before:lg:h-[25px] before:lg:w-[25px]">
                CREDDT
              </h3>
              <p className="text-alpha text-center text-[18px] font-semibold lg:text-left">
                Commercial Real Estate Due Diligence Tools
              </p>
            </div>

            <p className="text-alpha mb-6 text-center text-[14px] leading-[20px] font-medium md:leading-[24px] lg:text-left">
              CREDDT is a commercial real estate due diligence and underwriting
              platform for loan sizing, securitization, and underwriting
              workflows.Included in its various functionalities, it can automate
              document extraction, model population, broker package generation,
              and data tape creation from complex CRE materials.
            </p>

            <div className="py-1">
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
            </div>
            <Link className="mt-6 block w-full" href="/product/creddt">
              <Button className="mx-auto block lg:mx-0" child="gradient">Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </Animate>
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
