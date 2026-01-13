"use client";
import Image from "next/image";
import CloseModal from "../atoms/CloseModal";
import Gradient from "../atoms/Gradient";
import { navList } from "@/utils/constants";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setIsModal } from "@/store/slice/modalSlice";
import { useEffect } from "react";

const MenuModal = () => {
  const { isModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-[480px] flex-col items-start gap-14 overflow-y-auto bg-black px-8 py-5 transition-all duration-500 ease-in-out ${isModal === "menu" ? "translate-x-0" : "translate-x-full"}`}
    >
      <Gradient className="bg-secondary top-1/2 left-1/2 blur-[200px]" />
      <div>
        <Image
          className="h-auto w-28"
          src="/icons/m3ai-outline.webp"
          alt="logo"
          width={120}
          height={40}
        />
      </div>
      <div className="flex h-full w-full flex-1 flex-col justify-between">
        <nav>
          <ul>
            {navList?.map(({ label, route }, index) => (
              <li  key={index} className="mb-5">
                <Link
                  onClick={() => dispatch(setIsModal(null))}
                  className="hover:text-primary text-[28px] font-semibold text-white transition-all duration-500 ease-in-out"
                  href={route}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="mb-5">
              <Link
                onClick={() => dispatch(setIsModal(null))}
                href="/contact"
                className="hover:text-primary text-[28px] font-semibold text-white transition-all duration-500 ease-in-out"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-white py-5">
          <ul className="mb-10 flex gap-[18px]">
            <li>
              <Link href="">
                <Image
                  src="/icons/facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  src="/icons/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <CloseModal />
    </div>
  );
};

export default MenuModal;
