"use client";

import { useId } from "react";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderIcon from "../atoms/SliderIcon";

const Slider = ({
  children,
  breakpoints,
  spaceBetween = 40,
  speed = 900,
  loop = true,
  centeredSlides = false,
  paginationType = "",
  className = "",
  modules = [],
}) => {
  const id = useId();

  return (
    <div className={`relative`}>
      <Swiper
        loop={loop}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        speed={speed}
        breakpoints={breakpoints}
        pagination={paginationType ? { type: paginationType } : false}
        navigation={{
          prevEl: `.swiper-prev-${id}`,
          nextEl: `.swiper-next-${id}`,
        }}
        modules={modules}
        className={`w-full ${className}`}
      >
        {children}
      </Swiper>

      <div
        className={`absolute z-10 flex items-center justify-between ${paginationType === "fraction" ? "-bottom-3  left-1/2 w-[177px] -translate-x-1/2 rounded-full border border-white p-3" : "top-1/2 hidden md:block right-0 left-0 -translate-y-1/2"}`}
      >
        <button
          className={`swiper-prev-${id} rotate-180 cursor-pointer ${paginationType !== "fraction" ? "absolute -left-7" : ""}`}
        >
          <SliderIcon paginationType={paginationType} />
        </button>

        <button
          className={`swiper-next-${id} cursor-pointer ${paginationType !== "fraction" ? "absolute -right-7" : ""}`}
        >
          <SliderIcon paginationType={paginationType} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
