const Heading = ({ children, className }) => {
  return (
    <h2
      className={`${className} mx-auto max-w-[600px] text-center text-[48px] leading-[55px] font-semibold text-white`}
    >
      {children}
    </h2>
  );
};

export default Heading;
