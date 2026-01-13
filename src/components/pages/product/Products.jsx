import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section id="product" className="py-10 sm:py-12 lg:pt-32 lg:pb-20">
      <div className="container">
        {data?.map(({ id, image, content, route }, index) => (
          <div
            key={id}
            className="grid grid-cols-1 gap-8 not-last:mb-18 md:gap-12  lg:grid-cols-2 lg:gap-24 not-last:md:mb-32"
          >
            <figure
              className={`${index % 2 === 0 ? "order-1" : "lg:order-2"} relative`}
            >
              <Gradient className="bg-secondary absolute top-1/2 left-1/2 blur-[200px]" />
              <Image
                src={`/images/banner/${image}`}
                alt={content.title}
                width={522}
                height={318}
                className="mx-auto"
              />
            </figure>
            <div className={index % 2 === 0 ? "order-2" : "lg:order-1"}>
              <div className="relative mb-4 before:absolute before:-bottom-5 before:left-0 before:hidden before:h-[3px] before:w-[63px] before:bg-[#1B9BD5] before:content-[''] lg:mb-10 before:lg:block">
                <h3 className="mb-3 text-center text-[24px] font-light text-white md:text-[32px] lg:w-fit lg:text-left lg:text-[48px]">
                  {content.title}
                </h3>
                <p className="text-alpha text-center text-base font-semibold md:text-[18px] lg:text-left lg:text-[18px]">
                  {content.subtitle}
                </p>
              </div>
              <p className="text-alpha mb-8 text-center text-sm leading-[20px] font-medium lg:text-left lg:text-base lg:leading-[24px]">
                {content.description}
              </p>
              <Link
                className="mx-auto block w-fit lg:mx-0"
                href={`/product/${route}`}
              >
                <Button child="gradient">Read More</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

const data = [
  {
    id: 1,
    image: "excel.svg",
    content: {
      title: "CREDDT",
      subtitle: "Commercial Real Estate Due Diligence Tools",
      description:
        "Commercial Real Estate Due Diligence Tools a host of tools to automate loan sizing, underwriting and securitization. Employs LLMs and vision-language models to analyze and extract intricate rent roll and cash flow formats, including tables and semi-structured layouts",
    },
    route: "creddt",
  },
  {
    id: 2,
    image: "laptop.svg",
    content: {
      title: "LOOM",
      subtitle: "Light Optimized Operating Memorandum",
      description:
        "An AI-powered platform that helps commercial real estate brokers efficiently create Operating Memorandums by intelligently analyzing cashflows, rent rolls, property maps, images, and related documents. The system extracts, structures, and standardizes critical financial, tenant, and property insights from complex, unstructured data—reducing manual effort, improving accuracy, and accelerating the OM creation process",
    },
    route: "loom",
  },
];
