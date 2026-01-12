import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ link, icon, title, description }) => {
  return (
    <Link
      href={`/service/${link}`}
      key={title}
      className="group flex min-h-[300px] lg:min-h-[350px] flex-col justify-between overflow-hidden rounded-[10px] bg-white/10 from-[#3853A3] via-[#55A5D9] to-[#57DDE6] p-7 transition-all duration-500 ease-in-out hover:bg-linear-to-r"
    >
      <Image
        className="h-[48px] w-[48px] group-hover:filter-[brightness(0)_invert(1)] lg:h-[58px] lg:w-[58px]"
        src={`/icons/${icon}`}
        alt={title}
        width={58}
        height={58}
      />

      <div className="transition-all duration-500 ease-in-out group-hover:mb-10">
        <h4 className="mb-2 text-[20px] leading-[24px] font-bold text-white lg:text-[24px] lg:leading-[28px]">
          {title}
        </h4>
        <p className="text-alpha text-sm leading-[18px] font-medium lg:text-[16px] lg:leading-[22px]">
          {description}
        </p>

        <button className="ml-auto flex h-[41px] w-[41px] scale-0 items-center justify-center rounded-full bg-white transition-all duration-500 ease-in-out group-hover:scale-100">
          <Image
            src="/icons/top-right-black.svg"
            alt="Arrow"
            width={20}
            height={20}
          />
        </button>
      </div>
    </Link>
  );
};

export default ServiceCard;
