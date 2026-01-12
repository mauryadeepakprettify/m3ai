import IndustryCard from "@/components/molecules/IndustryCard";

const SectorList = () => {
  return (
    <section className="pb-28">
      <div className="container-b">
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.map((item, idx) => {
            const { id, title, icon } = item;
            console.log(item);
            return (
              <IndustryCard key={id} title={title} icon={icon} data={item} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorList;

const data = [
  {
    id: 1,
    title: "Technology",
    content: [
      "Underwriting Workflow Automation – Automate risk assessment and approvals",
      "Structured Finance Model Optimization – Streamline complex financial models",
      "Treasury Operations Workflow Automation – Simplify cash management and reconciliation",
    ],
    icon: "idea.svg",
  },
  {
    id: 2,
    title: "Banking",
    content: [
      "Digital banking workflow automation",
      "Risk management and compliance optimization",
      "AI-driven financial decision systems",
    ],
    icon: "logistic.svg",
  },
  {
    id: 3,
    title: "Logistics",
    content: [
      "Supply chain visibility and optimization",
      "Fleet management automation",
      "Real-time tracking and analytics solutions",
    ],
    icon: "finance.svg",
  },
  {
    id: 4,
    title: "Commercial Real Estate",
    content: [
      "Property portfolio performance analytics",
      "Lease and contract workflow automation",
      "Predictive maintenance and asset optimization",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 5,
    title: "Healthcare",
    content: [
      "Clinical workflow optimization",
      "Patient data analytics and insights",
      "Operational efficiency through automation",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 6,
    title: "Retail & E-Commerce",
    content: [
      "Customer behavior and sales analytics",
      "Inventory and demand forecasting",
      "Omnichannel experience optimization",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 7,
    title: "Manufacturing",
    content: [
      "Production workflow automation",
      "Quality control and predictive analytics",
      "Supply chain and resource optimization",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 8,
    title: "Commercial Real Estate",
    content: [
      "Smart building management systems",
      "Energy efficiency optimization",
      "Asset lifecycle analytics",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 9,
    title: "Healthcare",
    content: [
      "Digital patient engagement platforms",
      "Data-driven clinical decision support",
      "Healthcare operations automation",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 10,
    title: "Retail & E-Commerce",
    content: [
      "Personalized recommendation engines",
      "Marketing automation and insights",
      "Customer retention analytics",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 11,
    title: "Manufacturing",
    content: [
      "Industrial IoT and smart factories",
      "Predictive maintenance systems",
      "Process optimization and automation",
    ],
    icon: "real-estate.svg",
  },
  {
    id: 12,
    title: "Commercial Real Estate",
    content: [
      "Investment performance analytics",
      "Automated reporting and insights",
      "Portfolio risk assessment tools",
    ],
    icon: "real-estate.svg",
  },
];
