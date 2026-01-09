const Button = ({ onClick, children, className = "", variant = "default" }) => {
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
      className={`group cursor-pointer rounded-full px-[18px] py-[10px] font-semibold transition-colors duration-500 ease-in-out ${variants[variant]} ${className}`}
      style={
        variant === "outline"
          ? {
              backgroundImage:
                "linear-gradient(#000, #000), linear-gradient(to right, #3853A3, #55A5D9)",
              backgroundOrigin: "padding-box, border-box",
              backgroundClip: "padding-box, border-box",
            }
          : undefined
      }
    >
      <span className="z-10 relative flex items-center justify-center gap-2.5">
        {children}
      </span>
    </button>
  );
};

export default Button;
