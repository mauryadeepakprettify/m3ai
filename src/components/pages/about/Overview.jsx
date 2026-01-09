import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";

const Overview = () => {
  return (
    <section id="overview" className="relative py-10 sm:py-12 lg:py-40">
        <Gradient className="-bottom-[60%] left-1/2 bg-[#3853A3] blur-[200px]" />
      <div className="container">
        <div className="grid grid-cols-1 gap-32 md:grid-cols-2">
          <figure>
            <Image
              src="/icons/m3ai-outline.webp"
              alt="m3ai"
              width={397}
              height={138}
            />
          </figure>
          <div className="*:font-semibold *:leading-[24px] *:text-alpha *:mb-3">
            <p>M3 AI is an enterprise AI firm delivering tailored technology solutions for complex business challenges.</p>
            <p>We partner with organizations across industries to build intelligent automation, predictive systems, and scalable AI platforms that deliver measurable results and lasting impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
