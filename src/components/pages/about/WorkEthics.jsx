import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";

const WorkEthics = () => {
  return (
    <section className="relative overflow-x-hidden pb-20">
      <Gradient className="absolute top-[50%] -right-[10%] bg-[#3853A3] blur-[200px]" />
      <div className="container">
        <h2 className="mx-auto mb-28 max-w-[80%] text-center text-[80px] leading-[80px] font-semibold text-white">
          Simplifying work to <span className="text-primary">amplify </span>
          outcomes
        </h2>

        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          {data?.map(({ title, description, icon }) => (
            <div
              key={title}
              className="relative cursor-pointer overflow-hidden rounded-[10px] border border-[#aeaeae26] bg-[#ffffff1a] p-10 transition-all duration-500 ease-in-out"
            >
              <Gradient className="-top-[50%] right-[65%] bg-[#FFFFFF] blur-[200px]" />
              <Gradient className="-right-[80%] -bottom-[80%] bg-[#FFFFFF] blur-[200px]" />
              <Image
                className="absolute top-10 right-10"
                src={`/icons/${icon}`}
                alt={title}
                width={58}
                height={58}
              />
              <div className="mt-14 mb-14 max-w-[80%]">
                <h3 className="mb-2 text-[24px] leading-[24px] font-semibold text-white">
                  {title}
                </h3>
                <p className="text-alpha leading-[24px] font-medium">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkEthics;

const data = [
  {
    title: "Mission",
    description:
      "Our mission is to solve complex business problems through disciplined engineering and deep domain understanding. We design AI systems that are practical, reliable, and aligned with how organizations actually operate.",
    icon: "target.svg",
  },
  {
    title: "Vision",
    description:
      "Our vision is to be the long-term AI partner for enterprises navigating complexity at scale. We help embed intelligence into core processes, improving performance, resilience, and strategic decision-making.",
    icon: "eye.svg",
  },
];
