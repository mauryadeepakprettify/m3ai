import Gradient from "@/components/atoms/Gradient";
import Animate from "@/components/molecules/Animate";
import Image from "next/image";

const Overview = () => {
  return (
    <div id="overview" className="relative py-10 sm:py-12 lg:py-40">
      <Gradient className="-bottom-[60%] left-1/2 bg-[#3853A3] blur-[200px]" />
      <div className="container">
        <Animate className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <figure>
            <Image
              className="mx-auto w-[130px] md:w-[200px] lg:mx-0 lg:h-[138px] lg:w-[397px]"
              src="/icons/m3ai-outline.webp"
              alt="m3ai"
              width={397}
              height={138}
            />
          </figure>
          <div className="*:text-alpha *:mb-3 *:text-center *:text-sm *:leading-[22px] *:md:lg:text-base *:font-semibold *:lg:text-left *:lg:leading-[24px]">
            <p>
              M3 AI is an enterprise AI firm delivering tailored technology
              solutions for complex business challenges.
            </p>
            <p>
              We partner with organizations across industries to build
              intelligent automation, predictive systems, and scalable AI
              platforms that deliver measurable results and lasting impact.
            </p>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default Overview;
