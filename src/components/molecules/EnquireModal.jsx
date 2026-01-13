"use client";
import { useSelector } from "react-redux";
import Button from "../atoms/Button";
import CloseModal from "../atoms/CloseModal";
import Gradient from "../atoms/Gradient";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import { useEffect, useState } from "react";

const EnquireModal = () => {
  const { isModal } = useSelector((state) => state.modal);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  }, [isModal]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed left-1/2 z-30 w-full -translate-x-1/2 overflow-hidden rounded-[10px] bg-[#0C1739] px-8 py-6 transition-all duration-500 ease-in-out md:w-[700px] ${
        isModal === "enquire"
          ? "top-1/2 -translate-y-1/2 scale-100"
          : "bottom-0 translate-y-full scale-0"
      } `}
    >
      <Gradient className="-bottom-[80%] left-[10%] bg-[#49BAC2] blur-[200px]" />
      <h2 className="text-primary mb-5 text-center text-[24px] leading-[24px] font-bold md:text-[28px]">
        Get in Touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3"
      >
        <Input
          label="Name*"
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="Email*"
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Phone*"
          type="tel"
          name="phone"
          id="phone"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        <Textarea
          label="Message"
          name="message"
          id="message"
          required
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" className="mt-6" variant="fill">
          Submit Now
        </Button>
      </form>
      <CloseModal />
    </div>
  );
};

export default EnquireModal;
