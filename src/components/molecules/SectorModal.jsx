"use client";
import { useSelector } from "react-redux";
import CloseModal from "../atoms/CloseModal";
import Gradient from "../atoms/Gradient";
import Image from "next/image";

const SectorModal = () => {
  const { isModal, modalData } = useSelector((state) => state.modal);
  const { title, content } = modalData || {};

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed left-1/2 z-50 h-fit w-full  -translate-x-1/2 overflow-hidden rounded-[10px] bg-[#0C1739] p-14 transition-all duration-500 ease-in-out md:h-[472px] md:w-[684px] ${isModal === "sector"
        ? "top-1/2 -translate-y-1/2 scale-100"
        : "bottom-0 translate-y-full scale-0"
        } `}
    >
      <Gradient className="-right-[30%] -bottom-[80%] bg-[#49BAC2] blur-[200px]" />
      <Image
        className="absolute bottom-0 left-0 w-[200px] md:w-[250px]"
        src="/icons/ellipse.svg"
        alt="ellipse"
        width={500}
        height={500}
      />
      <Image
        className="absolute right-6 bottom-6"
        src="/images/logo-white.svg"
        alt="logo"
        width={131}
        height={45}
      />
      <div className="flex flex-col gap-6 pb-30 md:flex-row md:gap-18">
        <h2 className="text-center flex-1 text-[26px] font-semibold text-white md:text-left md:text-[32px] lg:text-[36px]">
          {title}
        </h2>
        <ul className="h-[300px] flex-4 overflow-y-auto overflow-x-hidden">
          {content?.map((item, idx) => (
            <li
              key={idx}
              className="text-alpha relative mb-6 text-[16px] leading-[24px] font-medium before:absolute before:top-[5px] before:-left-10 ml-10 before:h-[18px] before:w-[18px] before:rounded-full before:bg-linear-to-r before:from-[#9F2FFF] before:to-[#0BB1D3] before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <CloseModal />
    </div>
  );
};

export default SectorModal;
