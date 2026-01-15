"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";
import { quickList, servicesList } from "@/utils/constants";
import Input from "../atoms/Input";
import Gradient from "../atoms/Gradient";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { emailRegex } from "@/utils/regex";
import { alertToast } from "@/lib/toast";

const Footer = () => {
  const { openModal } = useModal();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alertToast("Please enter an email address");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      alertToast("Please enter a valid email address");
      return;
    }

    console.log("Validated Data:", email);

  };

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
            <Link
              className="w-[250px] md:w-[300px] lg:w-full"
              href="https://wa.me/911244130500"
              target="_blank"
            >
              <Button className="mb-8 w-full lg:mb-10" variant="fill">
                <Image
                  className="group-hover:filter-[brightness(0)_invert(0)]"
                  src="/icons/whatsapp.svg"
                  alt="whatsapp"
                  width={25}
                  height={25}
                />
                Whatsapp
              </Button>
            </Link>
            <ul className="mb-8 flex gap-[16px] lg:mb-10">
              {social?.map(({ icon, link, alt }) => (
                <li key={alt}>
                  <Link
                    className="from-secondary to-primary block rounded-full p-1 transition-all duration-500 ease-in-out hover:bg-linear-to-r"
                    href={link}
                    target="_blank"
                  >
                    <Image
                      className=""
                      src={`/icons/${icon}`}
                      alt={alt}
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              ))}
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
              <h3 className="mb-2 text-[18px] leading-[22px] font-medium lg:max-w-[300px] lg:text-[24px] lg:leading-[28px]">
                What's New at M3 AI newsletter subscription
              </h3>
              <form onSubmit={handleSubmit} className="relative">
                <Input
                  label="Enter email id"
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <button className=" absolute top-[62%]  right-0 flex -translate-y-1/2 cursor-pointer items-center gap-2 bg-black text-sm font-semibold ">
                  <span className="gradient-secondary pl-2 py-2 text-transparent bg-clip-text">Subscribe</span>
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
              className="mx-auto mt-12 lg:mt-20 w-1/2 lg:w-full"
              src="/icons/m3ai-outline.svg"
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
                className="inline-block h-5 w-auto"
                src="/images/prettify.svg"
                alt="prettify"
                width={57}
                height={21}
              />
            </Link>
          </span>
        </p>
        <ul className="flex gap-4 lg:gap-10 [&>li]:text-[14px] [&>li]:font-medium [&>li]:text-white">
          {legal?.map(({ label, route }) => (
            <li key={label}>
              <Link
                className="hover:text-primary transition-all duration-500 ease-in-out"
                href={route}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

const social = [
  {
    icon: "facebook.svg",
    alt: "facebook",
    link: "#",
  },
  {
    icon: "instagram.svg",
    alt: "instagram",
    link: "#",
  },
];

const legal = [
  {
    label: "Terms of Service",
    route: "/terms-condition",
  },
  {
    label: "Privacy Policy",
    route: "/privacy-policy",
  },
];
