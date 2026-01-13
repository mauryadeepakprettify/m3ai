"use client";
import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Image from "next/image";

const Article = ({ content }) => {
  return (
    <section className="relative py-12 lg:py-20">
      <Gradient className="top-[80%] right-0 bg-[#104AF7] blur-[300px]" />
      <Gradient className="top-[40%] left-[40%] bg-[#104AF7] blur-[300px]" />

      <div className="container-b">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-7 xl:grid-cols-6">
          <article
            dangerouslySetInnerHTML={{ __html: content }}
            className="prose prose-sm md:prose-base lg:prose-lg prose-li:marker:text-primary prose-li:marker:text-[28px] prose-invert col-span-1 leading-snug lg:col-span-4"
          ></article>
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
              <Input type="text" name="name" label="Name*" required />
              <Input type="text" name="name" label="Company Name*" required />
              <Input type="email" name="email" label="Email*" required />
              <Input type="text" name="phone" label="Phone*" required />
              <Textarea name="message" label="Message" required />
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
