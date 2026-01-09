"use client";

import Gradient from "@/components/atoms/Gradient";
import Slider from "@/components/molecules/Slider";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const ProductBanner = () => {
  return (
    <section className="relative h-[650px] overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_59.13%),linear-gradient(360deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_77.33%)]">
      <Gradient className="bg-secondary absolute top-[45%] left-1/2 z-10 h-[500px] w-[500px] blur-[140px]" />
      <video
        src="/videos/threads.mp4"
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      ></video>
      <div className="absolute top-[45%] left-1/2 z-30 container flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2">
        <h1 className="text-center text-[68px] font-semibold text-white">
          CREDDT
        </h1>
        <p className="max-w-[600px] text-center leading-snug font-semibold text-white">
          Commercial Real Estate Due Diligence Tools
        </p>
      </div>

      <div className="absolute right-0 bottom-8 left-0 px-4 sm:px-6 lg:px-8">
        <div className="">
          <Slider
            loop={false}
            breakpoints={{
              0: { slidesPerView: 1 },
              540: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              991: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
              1400: { slidesPerView: 8 },
            }}
            spaceBetween={20}
            speed={900}
            modules={[Navigation]}
          >
            {featureData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex min-h-[152px] items-center justify-center rounded-[10px] bg-white/10 p-4">
                  <p className="text-alpha text-center leading-[24px] font-semibold">
                    {item}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;

const featureData = [
  "Advanced OCR for Data Extraction",
  "Automated Securitization Data Tape Generation",
  "Automated Sizing Calculations: EGI, NOI, OpEx",
  "Multi-input Broker Package Generation",
  "Auto Categorization of Income/Expense Line Items",
  "Dashboard for Workflow Overview and Review",
  "Dashboard for Workflow Overview and Review",
  "Dashboard for Workflow Overview and Review",
];
