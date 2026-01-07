import ExternalBtn from "@/components/atoms/ExternalBtn";
import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";
import Link from "next/link";

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-10 relative sm:py-12 lg:py-16">
      <Gradient className="top-full left-1/2 blur-[200px] bg-[#3853A3]" />

      <div className="container">
        <div className="grid grid-cols-1 gap-44 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-7">
            <Image
              src="/icons/m3ai-outline.webp"
              alt="Mission Vision"
              width={397}
              height={138}
            />
            <p className="text-alpha max-w-[500px] leading-[24px] font-semibold">
              M3 AI is an enterprise AI firm delivering tailored technology
              solutions for complex business challenges. We partner with
              organizations across industries to build intelligent automation,
              predictive systems, and scalable AI platforms that deliver
              measurable results and lasting impact.
            </p>
            <Link href="/about">
              <ExternalBtn>Read More</ExternalBtn>
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            {data?.map(({ title, description }) => (
              <div
                className="gradient-secondary rounded-[10px] px-7 py-6"
                key={title}
              >
                <h4 className="mb-2 text-[24px] leading-[24px] font-medium text-white">
                  {title}
                </h4>
                <p className="text-alpha leading-[24px] font-medium">
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
