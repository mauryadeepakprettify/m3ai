"use client";
import Image from "next/image";
import { useModal } from "@/hooks/useModal";
import Gradient from "../atoms/Gradient";

const IndustryCard = ({ title, icon, data }) => {
  const { openModal } = useModal();

  return (
    <>
      <div
        onClick={() => {
          openModal("sector", data);
        }}
        className=" relative flex h-[168px] cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-[10px] border border-[#aeaeae26] hover:border-[#3853A3] transition-all duration-500 ease-in-out hover:bg-linear-to-r from-[#3853A3] to-[#55A5D9]"
      >
        <Gradient className="right-0 bottom-[20%] bg-[#FFFFFF] blur-[200px]" />
        <Gradient className="-right-[250%] -bottom-[250%] bg-[#FFFFFF] blur-[200px]" />
        <Image
          className="lg:h-[55px] lg:w-[55px] h-[45px] w-[45px]"
          src={`/icons/${icon}`}
          alt={title}
          width={55}
          height={55}
        />
        <h5 className="text-center  lg:text-[20px] lg:leading-[20px] text-[16px] leading-[16px] font-semibold text-white">
          {title}
        </h5>
      </div>
    </>
  );
};

export default IndustryCard;
