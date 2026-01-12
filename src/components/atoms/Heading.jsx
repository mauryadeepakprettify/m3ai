const Heading = ({ children, className }) => {
  return (
    <h2
      className={`${className} mx-auto max-w-[600px] text-center text-[26px] leading-[32px] font-semibold text-white md:text-[32px] md:leading-[40px] lg:text-[48px] lg:leading-[55px]`}
    >
      {children}
    </h2>
  );
};

export default Heading;
