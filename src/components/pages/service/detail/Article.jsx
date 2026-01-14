"use client";
import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Image from "next/image";
import { useState } from "react";

const Article = ({ content }) => {


  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      alertToast("Please fill all the fields");
      return;
    }

    if (name.trim().length < 2) {
      alertToast("Please enter a valid name");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      alertToast("Please enter a valid email address");
      return;
    }

    if (!mobileRegex.test(phone.trim())) {
      alertToast("Please enter a valid 10-digit mobile number");
      return;
    }

    if (message.trim().length < 10) {
      alertToast("Message should be at least 10 characters");
      return;
    }

    console.log("Validated Data:", formData);

  };


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
              onSubmit={handleSubmit}
            >
              <Input type="text" name="name" label="Name*" onChange={handleChange} value={formData.name} />
              <Input type="text" name="name" label="Company Name" onChange={handleChange} value={formData.name} />
              <Input type="email" name="email" label="Email*" onChange={handleChange} value={formData.email} />
              <Input type="text" name="phone" label="Phone*" onChange={handleChange} value={formData.phone} />
              <Textarea name="message" label="Message*" onChange={handleChange} value={formData.message} />
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
