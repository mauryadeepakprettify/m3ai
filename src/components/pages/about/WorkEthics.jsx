import Gradient from "@/components/atoms/Gradient";
import Animate from "@/components/molecules/Animate";
import Image from "next/image";

const WorkEthics = () => {
  return (
    <Animate className="relative pb-12 lg:overflow-x-hidden lg:pb-20">
      <Gradient className="absolute top-[50%] -right-[10%] bg-[#3853A3] blur-[200px]" />
      <div className="container">
        <h2 className="mx-auto mb-12 max-w-[60%] text-center text-[32px] leading-[100%] font-semibold text-white lg:mb-28 lg:max-w-[80%] lg:text-[62px] xl:text-[80px]">
          Simplifying work to <span className="text-primary">amplify </span>
          outcomes
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-20">
          {data?.map(({ title, description, icon }) => (
            <div
              key={title}
              className="relative cursor-pointer overflow-hidden rounded-[10px] border border-[#aeaeae26] bg-[#ffffff1a] p-6 transition-all duration-500 ease-in-out lg:p-10"
            >
              <Gradient className="-top-[50%] right-[65%] bg-[#FFFFFF] blur-[200px]" />
              <Gradient className="-right-[80%] -bottom-[80%] bg-[#FFFFFF] blur-[200px]" />
              <Image
                className="absolute top-10 right-10 h-[48px] w-[48px] lg:h-[58px] lg:w-[58px]"
                src={`/icons/${icon}`}
                alt={title}
                width={58}
                height={58}
              />
              <div className="mt-20 mb-8 max-w-full lg:mt-14 lg:mb-14 lg:max-w-[80%]">
                <h3 className="mb-2 text-[20px] leading-[20px] font-semibold text-white lg:text-[24px] lg:leading-[24px]">
                  {title}
                </h3>
                <p className="text-alpha text-sm leading-[20px] font-medium lg:text-base lg:leading-[24px]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Animate>
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
