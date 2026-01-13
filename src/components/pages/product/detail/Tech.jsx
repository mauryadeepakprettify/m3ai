import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";

const Tech = () => {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      <Gradient className="bg-secondary absolute top-full left-1/2 blur-[200px]" />

      <div className="container-b">
        <h2 className="mb-10 text-center text-[24px] leading-[1.1] font-semibold text-white md:mb-12 md:text-[30px] lg:mb-20 lg:text-[36px]">
          The tech behind{" "}
          <span className="bg-linear-to-r from-[#9F2FFF] to-[#0BB1D3] bg-clip-text text-transparent">
            CREDDT
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <figure className="flex items-center justify-center">
            <Image
              src="/images/banner/excel.svg"
              alt="creddt"
              width={522}
              height={318}
            />
          </figure>
          <div className="">
            <ul className="">
              {data.map((item, index) => (
                <li
                  className="text-alpha border-secondary relative border-l px-10 pb-10 leading-[24px] before:absolute before:top-2 before:-left-[10px] before:h-[20px] before:w-[20px] before:rounded-full before:bg-linear-to-r before:from-[#9F2FFF] before:to-[#0BB1D3] before:content-[''] first:pt-10 first:before:top-12 md:px-14 lg:px-14 xl:px-20"
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;

const data = [
  "<strong>Continuously retrains models</strong> using validated data to refine extraction quality and adapt to new rent roll formats over time",
  "<strong>Integrates human-in-the-loop feedback</strong> to address edge cases and enhance accuracy on property-specific nuances",
  "<strong>Implements AI-driven normalization</strong> to standardize dates, rents, charges, and tenant identifiers across heterogenous files",
  "<strong>Employs LLMs and vision-language models</strong> to analyze and extract intricate rent roll and cash flow formats, including tables and semi-structured layouts",
];
