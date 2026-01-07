import Image from "next/image";

const ExternalBtn = ({ className, children, type = "button" }) => {
  return (
    <button className={`${className} flex items-center gap-[10px]`} type={type}>
      <span className="gradient-secondary bg-clip-text text-[14px] font-semibold text-transparent">
        {children}
      </span>{" "}
      <Image src="/icons/top-right.svg" alt="" width={16} height={16} />
    </button>
  );
};

export default ExternalBtn;
