import Image from "next/image";

const Button = ({
  onClick,
  children,
  className = "",
  variant = "default",
  child = "",
}) => {
  const variants = {
    outline:
      "border-2 border-transparent bg-clip-padding text-white relative before:absolute before:inset-0 before:z-0 before:bg-gradient-to-r before:from-secondary before:to-tertiary before:content-[''] before:opacity-0 before:transition-all before:duration-500 before:ease-in-out before:rounded-full hover:before:opacity-100 ",
    fill: "bg-gradient-to-r from-secondary to-tertiary text-white hover:from-white hover:to-white hover:text-black",
    default:
      "bg-white text-black hover:bg-gradient-to-r hover:from-secondary hover:to-tertiary hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`group cursor-pointer rounded-full px-[18px] py-[10px] font-semibold transition-colors duration-500 ease-in-out ${variants[variant]} ${className} ${child === "gradient" ? variants['outline'] : ""}`}
      style={
        variant === "outline" || child === "gradient"
          ? {
              backgroundImage:
                "linear-gradient(#000, #000), linear-gradient(to right, #3853A3, #55A5D9)",
              backgroundOrigin: "padding-box, border-box",
              backgroundClip: "padding-box, border-box",
            }
          : undefined
      }
    >
      <span
        className={`relative z-10 flex items-center justify-center gap-2.5 ${child === "gradient" ? "from-secondary to-tertiary transition-colors duration-500 ease-in-out bg-linear-to-r bg-clip-text text-transparent group-hover:text-white" : ""}`}
      >
        {children} {child && <Image className="group-hover:filter-[brightness(0)_invert(1)] transition-colors duration-500 ease-in-out" src="/icons/top-right.svg" alt="" width={16} height={16} />}
      </span>
    </button>
  );
};

export default Button;
