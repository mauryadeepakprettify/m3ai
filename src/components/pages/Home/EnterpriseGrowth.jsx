"use client";
import Gradient from "@/components/atoms/Gradient";
import Heading from "@/components/atoms/Heading";
import Slider from "@/components/molecules/Slider";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const EnterpriseGrowth = () => {
  return (
    <section className="relative py-10 sm:py-12 lg:py-16">
      <Gradient className="top-0 right-4 bg-[#3853A3] blur-[200px]" />
      <Gradient className="top-full left-[20%] bg-[#3853A3] blur-[200px]" />
      <div className="">
        <Heading className="mb-12">
          Automation Engineered for Enterprise Growth
        </Heading>
      </div>

      <Slider
        centeredSlides
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1200: { slidesPerView: 1.5 },
          1400: { slidesPerView: 2 },
        }}
        paginationType="fraction"
        className="pb-20!"
      >
        {data?.map(({ route, image, title, description }, index) => {
          return (
            <SwiperSlide key={index}>
              <Link
                className="relative block h-[400px] w-full overflow-hidden rounded-[10px] before:absolute before:inset-0 before:z-0 before:bg-black before:opacity-50"
                href={`/service/${route}`}
              >
                <Image
                  className="h-full w-full object-cover"
                  src={`/images/service/${image}`}
                  alt={title}
                  width={780}
                  height={400}
                />
                <div className="absolute right-0 bottom-0 left-0 z-10 flex items-end justify-between p-[30px]">
                  <div className="">
                    <h3 className="mb-2 text-[24px] leading-[28px] font-semibold text-white">
                      {title}
                    </h3>
                    <p className="text-alpha max-w-[75%] leading-[22px] font-medium">
                      {description}
                    </p>
                  </div>
                  <button className="z-10 flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-full bg-white">
                    <Image
                      src="/icons/top-right-black.svg"
                      alt="top-right-black"
                      width={18}
                      height={18}
                    />
                  </button>
                </div>
                <h5 className="absolute top-4 right-8 text-[13px] leading-[28px] font-semibold text-white">
                  Service
                </h5>
              </Link>
            </SwiperSlide>
          );
        })}
      </Slider>
    </section>
  );
};

export default EnterpriseGrowth;

const data = [
  {
    route: "ai-workflows-orchestration",
    image: "service-1.jpg",
    title: "AI workflows orchestration",
    description:
      "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",
  },
  {
    route: "ai-workflows-orchestration",
    image: "service-2.jpg",
    title: "AI workflows orchestration",
    description:
      "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",
  },
  {
    route: "ai-workflows-orchestration",
    image: "service-3.jpg",
    title: "AI workflows orchestration",
    description:
      "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",
  },
  {
    route: "ai-workflows-orchestration",
    image: "service-1.jpg",
    title: "AI workflows orchestration",
    description:
      "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",
  },
  {
    route: "ai-workflows-orchestration",
    image: "service-2.jpg",
    title: "AI workflows orchestration",
    description:
      "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",
  },
  {
    route: "ai-workflows-orchestration",
    image: "service-3.jpg",
    title: "AI workflows orchestration",
    description:
      "AI workflows orchestration empowers organizations to automate, coordinate, and optimize complex processes by connecting multiple AI models, tools, and data systems.",
  },
];
