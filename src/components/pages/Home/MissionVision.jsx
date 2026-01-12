import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";
import Link from "next/link";

const MissionVision = () => {
  return (
    <section id="mission-vision" className="relative py-10 sm:py-12 lg:py-20">
      <Gradient className="top-full left-1/2 bg-[#3853A3] blur-[200px]" />

      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[32px] xl:gap-44">
          <div className="flex flex-col items-center justify-center gap-7 lg:items-start">
            <Image
              src="/icons/m3ai-outline.webp"
              alt="M3ai"
              width={397}
              height={138}
              className="w-[130px] md:w-[200px] lg:w-auto"
            />
            <p className="text-alpha max-w-[500px] text-center text-sm leading-[22px] font-semibold md:text-base md:leading-[24px] lg:text-left">
              M3 AI is an enterprise AI firm delivering tailored technology
              solutions for complex business challenges. We partner with
              organizations across industries to build intelligent automation,
              predictive systems, and scalable AI platforms that deliver
              measurable results and lasting impact.
            </p>
            <Link href="/about">
              <Button child="gradient">Read More</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-5 md:flex-row lg:flex-col">
            {data?.map(({ title, description }) => (
              <div
                className="gradient-secondary rounded-[10px] px-7 py-6"
                key={title}
              >
                <h4 className="mb-2 text-center text-sm text-[24px] leading-[22px] font-medium text-white md:text-base md:leading-[24px] lg:text-left">
                  {title}
                </h4>
                <p className="text-alpha text-center text-sm leading-[22px] font-medium md:text-base md:leading-[24px] lg:text-left">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

const data = [
  {
    title: "Mission",
    description:
      "Our mission is to solve complex business problems through disciplined engineering and deep domain understanding. We design AI systems that are practical, reliable, and aligned with how organizations actually operate.",
  },
  {
    title: "Vision",
    description:
      "Our vision is to be the long-term AI partner for enterprises navigating complexity at scale. We help embed intelligence into core processes, improving performance, resilience, and strategic decision-making.",
  },
];
