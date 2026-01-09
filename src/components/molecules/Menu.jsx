"use client";
import { navList } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathName = usePathname();

  return (
    <ul className="flex gap-[25px]">
      {navList?.map(({ label, route }) => {
        const isActive = pathName === route;

        return (
          <li key={label}>
            <Link
              href={route}
              className={`hover:text-primary before:via-primary relative p-[10px] font-semibold transition-all duration-500 before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-[90%] before:-translate-x-1/2 before:scale-x-0 before:bg-linear-to-r before:from-[#ffffff14] before:to-transparent before:opacity-0 before:transition-all before:duration-500 hover:before:scale-x-100 hover:before:opacity-100 ${isActive ? "text-primary before:scale-x-100 before:opacity-100" : "text-white"} `}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
