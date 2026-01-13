import Gradient from "@/components/atoms/Gradient";

const Loading = () => {
  return (
    <section className="relative flex h-[60vh] flex-col items-center justify-center gap-4 md:h-[70vh] lg:h-[80vh] xl:h-screen">
      <Gradient className="bg-secondary top-1/2 left-1/2 blur-[200px]" />
      <h2 className="mb-2 max-w-[600px] bg-linear-to-r from-[#3853A3] via-[#55A5D9] to-[#57DDE6] bg-clip-text text-center text-[26px] leading-[32px] font-medium text-transparent md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px]">
        Loading...
      </h2>
    </section>
  );
};

export default Loading;
