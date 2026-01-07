"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const OverlayModal = ({ content, state, className }) => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    setIsModal(state);
  }, [state]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-in-out bg-black/50 ${isModal ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      onClick={() => setIsModal(false)}
    >
      <div
        className={`relative transition-all duration-500 ease-in-out bg-[#0C1739] ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
        <button
          className="absolute top-5 right-5"
          onClick={() => setIsModal(false)}
        >
          <Image src="/icons/close.svg" alt="close" width={24} height={32} />
        </button>
      </div>
    </div>
  );
};

export default OverlayModal;
