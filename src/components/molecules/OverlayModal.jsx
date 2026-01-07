"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

const OverlayModal = ({ content, className }) => {
  const { isModal } = useSelector((state) => state.modal);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-500 ease-in-out ${isModal ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div
        className={`relative bg-[#0C1739] transition-all  duration-500 ease-in-out ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
        <button
          className="absolute top-5 right-5"
        >
          <Image src="/icons/close.svg" alt="close" width={24} height={32} />
        </button>
      </div>
    </div>
  );
};

export default OverlayModal;
