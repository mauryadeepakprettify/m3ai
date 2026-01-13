"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";
import { quickList, servicesList } from "@/utils/constants";
import Input from "../atoms/Input";
import Gradient from "../atoms/Gradient";
import { useModal } from "@/hooks/useModal";

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer className="border-secondary relative border-t">
      <Gradient className="top-1/2 left-1/2 bg-[#104AF7] blur-[180px]" />
      <div className="container-b">
        <div className="flex flex-col gap-[25px] pt-14 pb-16 text-white lg:flex-row lg:gap-[32px] xl:gap-[100px]">
          <div className="flex flex-2 flex-col items-center lg:items-start">
            <Button
              onClick={() => openModal("enquire")}
              className="mb-5 w-[250px] md:w-[300px] lg:w-full"
            >
              <Image
                className="group-hover:filter-[brightness(0)_invert(1)]"
                src="/icons/phone.svg"
                alt="phone"
                width={24}
                height={24}
              />
              Get in Touch M3 AI
            </Button>
            <Button
              className="mb-8 w-[250px] md:w-[300px] lg:mb-10 lg:w-full"
              variant="fill"
            >
              <Image
                className="group-hover:filter-[brightness(0)_invert(0)]"
                src="/icons/whatsapp.svg"
                alt="whatsapp"
                width={25}
                height={25}
              />
              Whatsapp
            </Button>
            <ul className="mb-8 flex gap-[18px] lg:mb-10">
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
            <div className="">
              <span className="text-alpha mb-3 block text-center font-medium lg:text-left">
                Connect us
              </span>
              <Link
                className="text-[20px] font-semibold"
                href="tel:+911244130500"
              >
                +91 124 4130500
              </Link>
            </div>
          </div>
          <div className="mt-8 flex-2 lg:mt-0">
            <h5 className="mb-5 text-[18px] font-semibold text-white">
              Services
            </h5>
            <ul>
              {servicesList?.map(({ label, route }) => (
                <li
                  className="text-alpha hover:text-primary mb-4 transition-all duration-500 ease-in-out hover:translate-x-1"
                  key={label}
                >
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h5 className="mb-5 text-[18px] font-semibold text-white">
              Discover
            </h5>
            <ul>
              {quickList?.map(({ label, route }) => (
                <li
                  className="text-alpha hover:text-primary mb-4 transition-all duration-500 ease-in-out hover:translate-x-1"
                  key={label}
                >
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-3 flex-col justify-between">
            <div>
              <h3 className="mb-2 text-[24px] leading-[28px] font-medium">
                What's New at M3 AI <br /> newsletter subscription
              </h3>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <Input
                  label="Enter email id"
                  type="email"
                  name="email"
                  id="email"
                />

                <button className="gradient-secondary absolute top-1/2 right-0 flex -translate-y-1/2 items-center gap-2 bg-clip-text text-sm font-semibold text-transparent">
                  Subscribe
                  <Image
                    src="/icons/top-right.svg"
                    alt="arrow"
                    width={16}
                    height={16}
                  />
                </button>
              </form>
            </div>
            <Image
              className="mx-auto mt-20 w-full md:w-1/2 lg:w-full"
              src="/icons/m3ai-outline.webp"
              alt="icon"
              width={397}
              height={138}
            />
          </div>
        </div>
      </div>

      <div className="container-b flex flex-col items-center justify-between gap-[14px] border-t border-[#ffffff2b] py-[20px] md:flex-row lg:py-[30px]">
        <p className="text-alpha text-[14px] font-medium">
          &copy; M3AI. All rights reserved.
          <span>
            Made by
            <Link href="https://prettifycreative.com/" target="_blank">
              <Image
                className="inline-block h-5"
                src="/images/prettify.svg"
                alt="prettify"
                width={57}
                height={21}
              />
            </Link>
          </span>
        </p>
        <ul className="flex gap-4 lg:gap-10 [&>li]:text-[14px] [&>li]:font-medium [&>li]:text-white">
          <li>
            <Link href="">Terms of Service</Link>
          </li>
          <li>
            <Link href="">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
