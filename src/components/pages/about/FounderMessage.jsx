import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";

const FounderMessage = () => {
  return (
    <section className="relative overflow-hidden rounded-[15px]">
      <Gradient className="top-[80%] left-1/2 bg-[#104AF7] blur-[300px]" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <figure className="item-center flex justify-center">
            <Image
              src="/images/team/founder.svg"
              alt="founder"
              width={321}
              height={321}
            />
          </figure>
          <div className="relative py-32">
            <Image
              className="absolute right-15 bottom-0"
              src="/icons/quote.svg"
              alt="quote"
              width={234}
              height={234}
            />
            <h3 className="mb-2 bg-linear-to-r from-[#3853A3] via-[#55A5D9] to-[#57DDE6] bg-clip-text text-[36px] leading-[48px] font-semibold text-transparent">
              Director Message
            </h3>
            <p className="text-alpha max-w-[500px] text-[16px] leading-[24px] font-medium">
              We founded M3 AI with a clear vision: to bridge the gap between
              cutting-edge artificial intelligence and everyday business
              operations. Today, we are proud to partner with enterprises across
              diverse sectors, helping them streamline workflows, unlock deeper
              insights, and accelerate innovation through AI-driven automation.
            </p>
            <div className="mt-7">
              <h5 className="mb-1 text-[18px] font-semibold text-white">
                Sumit Sharma
              </h5>
              <p className="text-alpha text-[14px] leading-[24px] font-semibold">
                COO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
