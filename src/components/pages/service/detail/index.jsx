import Article from "./Article";
import ServiceBanner from "./Banner";
import MoreService from "./MoreService";

const ServiceDetail = () => {
  return (
    <>
      <ServiceBanner
        title={data.title}
        description={data.description}
        features={data.features}
        img="workflow.svg"
      />
      <Article content={data.content} />
      <MoreService />
    </>
  );
};

export default ServiceDetail;

const data = {
  title: "AI Workflows Orchestration",
  description: "Streamlining Complexity. Accelerating Outcomes.",
  content:
    "<p> Our AI Workflows Orchestration service helps businesses unify fragmented processes, eliminate manual inefficiencies, and scale operations with intelligent automation. We integrate advanced AI models, rule-based systems, and business logic into a seamless, end-to-end workflow—ensuring every task is completed faster, smarter, and with precision. </p> <h3>What We Deliver</h3> <ul> <li> <h4>End-to-End Process Automation</h4> <p> We transform multi-step, repetitive workflows into fully automated pipelines that run with minimal human intervention. From data ingestion to decision-making, every step is optimized. </p> </li> <li> <h4>Intelligent Decision Engines</h4> <p> Our orchestration layer uses predictive AI models, real-time analytics, and adaptive algorithms to drive accurate and timely decisions across your operations. </p> </li> <li> <h4>Seamless System Integration</h4> <p> We connect legacy platforms, CRMs, ERPs, cloud applications, and custom tools into a unified operational ecosystem—eliminating data silos and accelerating information flow. </p> </li> <li> <h4>Real-Time Monitoring & Control</h4> <p> Gain full visibility into your operations with dashboards that track workflow performance, identify bottlenecks, and ensure continuous optimization. </p> </li> <li> <h4>End-to-End Process Automation</h4> <p> We transform multi-step, repetitive workflows into fully automated pipelines that run with minimal human intervention. From data ingestion to decision-making, every step is optimized. </p> </li> <li> <h4>Scalable Architecture</h4> <p> Whether you’re handling thousands of transactions or millions, our orchestration framework grows with your business—ensuring speed, resilience, and reliability at any scale. </p> </li> </ul>",
  features: [
    {
      id: 1,
      description: "Faster processing times with zero errors",
    },
    {
      id: 2,
      description: "Faster processing times with zero errors",
    },
    {
      id: 3,
      description: "Faster processing times with zero errors",
    },
    {
      id: 4,
      description: "Faster processing times with zero errors",
    },
    {
      id: 5,
      description: "Faster processing times with zero errors",
    },
    {
      id: 6,
      description: "Faster processing times with zero errors",
    },
  ],
};
