"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";
import Menu from "../molecules/Menu";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsModal } from "@/store/slice/modalSlice";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-20 flex h-[62px] md:h-[78px] items-center justify-between px-4 text-white before:absolute before:inset-0 before:z-[-1] before:bg-black/90 before:shadow-lg before:shadow-[#63636333] before:transition-transform before:duration-500 before:ease-out sm:px-6 lg:px-8 ${isScrolled ? "before:translate-y-0" : "before:-translate-y-full"} `}
    >
      <Link href="/">
        <Image
          className="w-18 md:h-auto md:w-auto"
          src="/images/logo.svg"
          alt="Logo"
          width={131}
          height={45}
        />
      </Link>

      <Menu />

      <Link className="hidden lg:block" href="/contact">
        <Button variant="outline">Contact Us</Button>
      </Link>

      <button
        onClick={() => dispatch(setIsModal("menu"))}
        className="lg:hidden h-auto w-[42px] cursor-pointer flex-col items-end justify-center gap-[6px] flex"
      >
        <span className="h-[2px] w-full bg-white"></span>
        <span className="h-[2px] w-full bg-white"></span>
        <span className="h-[2px] w-[60%] bg-white"></span>
      </button>
    </header>
  );
};

export default Header;
