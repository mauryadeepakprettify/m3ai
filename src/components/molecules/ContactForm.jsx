"use client"
import Image from "next/image";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";
import { alertToast } from "@/lib/toast";
import { emailRegex, mobileRegex } from "@/utils/regex";
import { useState } from "react";

const ContactForm = ({ className }) => {

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
    <div
      className={`flex flex-col items-center justify-center px-8 py-12 md:px-12 lg:py-20 ${className}`}
    >
      <Image
        className="mb-4 h-[30px] w-[100px] md:h-[45px] md:w-[131px]"
        src="/images/logo-white.svg"
        alt="logo"
        width={131}
        height={45}
      />
      <h6 className="mb-6 max-w-[300px] text-center text-[16px] leading-[24px] font-semibold text-white lg:text-[20px] lg:leading-[28px]">
        Let’s build your AI-powered future together
      </h6>

      <form onSubmit={handleSubmit} className="grid w-full max-w-[850px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
        <Input type="text" name="Name" label="Name*" value={formData.name} onChange={handleChange} />
        <Input type="text" name="Company" label="Company Name" value={formData.company} onChange={handleChange} />
        <Input type="email" name="Email" label="Email*" value={formData.email} onChange={handleChange} />
        <Input type="tel" name="Phone" label="Phone*" value={formData.phone} onChange={handleChange} />
        <Textarea className="md:col-span-2" name="Message" label="Message*" value={formData.message} onChange={handleChange} />
        <span className="mt-4 md:col-span-2">
          <Button className="mx-auto block" variant="fill" type="submit">
            Submit
          </Button>
        </span>
      </form>
    </div>
  );
};

export default ContactForm;
