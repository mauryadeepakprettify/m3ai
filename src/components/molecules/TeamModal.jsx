"use client";
import { useSelector } from "react-redux";
import CloseModal from "../atoms/CloseModal";
import Gradient from "../atoms/Gradient";
import Image from "next/image";

const TeamModal = () => {
  const { isModal, modalData } = useSelector((state) => state.modal);

  const { name, position, image, about } = modalData || {};

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed left-1/2 z-30 h-[381px] w-[787px] -translate-x-1/2 overflow-hidden rounded-[10px] bg-[#0C1739] px-8 py-14 transition-all duration-500 ease-in-out ${
        isModal === "team"
          ? "top-1/2 -translate-y-1/2 scale-100"
          : "bottom-0 translate-y-full scale-0"
      } `}
    >
      <Gradient className="-right-[20%] -bottom-[80%]  bg-[#49BAC2] blur-[200px]" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <figure>
          <Image
            src={`/images/team/${image}`}
            alt={name || ""}
            width={237}
            height={238}
          />
        </figure>
        <div className="col-span-2">
          <div className="mb-5 border-b border-[#49BAC2] pb-5">
            <h3 className="mb-2 text-[24px] leading-[28px] font-bold text-white">
              {name}
            </h3>
            <p className="text-alpha text-[14px] font-medium">{position}</p>
          </div>

          <div className="overflow-y-auto">
            <p className="text-alpha leading-[24px] font-medium">{about}</p>
          </div>
        </div>
      </div>

      <CloseModal />
    </div>
  );
};

export default TeamModal;
