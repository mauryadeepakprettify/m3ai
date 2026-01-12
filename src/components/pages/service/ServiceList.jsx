import Gradient from "@/components/atoms/Gradient";
import ServiceCard from "@/components/molecules/ServiceCard";

const ServiceList = () => {
  return (
    <section className="relative pt-20 pb-24">
      <Gradient className="absolute right-0 -bottom-[10%] bg-[#3853A3] blur-[200px]" />
      <Gradient className="absolute bottom-[10%] left-[30%] bg-[#3853A3] blur-[200px]" />
      <div className="container-b">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
          {data?.map(({ link, icon, title, description }) => (
            <ServiceCard
              key={title}
              link={link}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;

const data = [
  {
    link: "ai-workflows-orchestration",
    icon: "branch.svg",
    title: "AI Workflows Orchestration",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "server.svg",
    title: "Data Intelligence",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "react.svg",
    title: "Data Analytics",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "code.svg",
    title: "AI Native Product Development",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "grow.svg",
    title: "Agentic Architecture",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
  {
    link: "ai-workflows-orchestration",
    icon: "server.svg",
    title: "Custom SLMs",
    description:
      "AI workflows orchestration empowers organizations to automate.",
  },
];
