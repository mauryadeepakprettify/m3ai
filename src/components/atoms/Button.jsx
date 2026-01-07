const Button = ({ children, className, variant = "default" }) => {
  const buttonVariants = {
    outline: "gradient-secondary",
    fill: "gradient-secondary hover:bg-linear-to-r hover:from-white hover:to-white",
    default:
      "bg-white hover:bg-linear-to-r hover:from-[#3853A3] hover:to-[#55A5D9]",
  };

  const spanVariants = {
    outline: "bg-black group-hover:bg-transparent text-white ",
    fill: "bg-transparent group-hover:bg-white text-white group-hover:text-black",
    default:
      "bg-white group-hover:bg-transparent text-black group-hover:text-white",
  };

  return (
    <button
      className={`group cursor-pointer rounded-full p-[2px] font-semibold transition-all duration-500 ease-in-out ${className} ${
        buttonVariants[variant]
      }`}
    >
      <span
        className={`flex items-center justify-center gap-[10px] rounded-full px-[16px] py-[8px] transition-all duration-500 ease-in-out ${
          spanVariants[variant]
        }`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
