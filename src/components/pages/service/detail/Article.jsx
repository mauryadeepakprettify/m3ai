"use client";
import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Image from "next/image";

const Article = () => {
  return (
    <section className="relative py-12 lg:py-20">
      <Gradient className="top-[80%] right-0 bg-[#104AF7] blur-[300px]" />
      <Gradient className="top-[40%] left-[40%] bg-[#104AF7] blur-[300px]" />

      <div className="container-b">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-7 xl:grid-cols-6">
          <article className="prose prose-sm md:prose-base lg:prose-lg prose-li:marker:text-primary prose-li:marker:text-[28px] prose-invert col-span-1 leading-snug lg:col-span-4">
            <p>
              Our AI Workflows Orchestration service helps businesses unify
              fragmented processes, eliminate manual inefficiencies, and scale
              operations with intelligent automation. We integrate advanced AI
              models, rule-based systems, and business logic into a seamless,
              end-to-end workflow—ensuring every task is completed faster,
              smarter, and with precision.
            </p>
            <h3>What We Deliver</h3>
            <ul>
              <li>
                <h4>End-to-End Process Automation</h4>
                <p>
                  We transform multi-step, repetitive workflows into fully
                  automated pipelines that run with minimal human intervention.
                  From data ingestion to decision-making, every step is
                  optimized.
                </p>
              </li>
              <li>
                <h4>Intelligent Decision Engines</h4>
                <p>
                  Our orchestration layer uses predictive AI models, real-time
                  analytics, and adaptive algorithms to drive accurate and
                  timely decisions across your operations.
                </p>
              </li>
              <li>
                <h4>Seamless System Integration</h4>
                <p>
                  We connect legacy platforms, CRMs, ERPs, cloud applications,
                  and custom tools into a unified operational
                  ecosystem—eliminating data silos and accelerating information
                  flow.
                </p>
              </li>
              <li>
                <h4>Real-Time Monitoring & Control</h4>
                <p>
                  Gain full visibility into your operations with dashboards that
                  track workflow performance, identify bottlenecks, and ensure
                  continuous optimization.
                </p>
              </li>
              <li>
                <h4>End-to-End Process Automation</h4>
                <p>
                  We transform multi-step, repetitive workflows into fully
                  automated pipelines that run with minimal human intervention.
                  From data ingestion to decision-making, every step is
                  optimized.
                </p>
              </li>
              <li>
                <h4>Scalable Architecture</h4>
                <p>
                  Whether you’re handling thousands of transactions or millions,
                  our orchestration framework grows with your business—ensuring
                  speed, resilience, and reliability at any scale.
                </p>
              </li>
            </ul>
          </article>
          <div className="flex h-fit flex-col items-center justify-center rounded-[15px] bg-white/10 px-7 py-10 lg:sticky lg:top-[78px] lg:col-span-3 xl:col-span-2">
            <Image
              className="mb-4 h-[30px] w-[100px] lg:h-[45px] lg:w-[131px]"
              alt="logo"
              src="/images/logo-white.svg"
              width={131}
              height={45}
            />
            <p className="mb-8 text-center text-[16px] leading-[24px] font-semibold text-white lg:text-[20px] lg:leading-[28px]">
              Let’s build your AI-powered <br />
              future together
            </p>
            <form
              className="flex w-full flex-col items-center justify-center gap-3"
              onSubmit={() => {}}
            >
              <Input type="text" name="name" label="Name*" />
              <Input type="text" name="name" label="Company Name" />
              <Input type="email" name="email" label="Email" />
              <Input type="text" name="phone" label="Phone" />
              <Textarea name="message" label="Message" />
              <Button className="mt-4 w-fit" type="submit" variant="fill">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
