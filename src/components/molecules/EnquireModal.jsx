"use client";
import { useSelector } from "react-redux";
import Button from "../atoms/Button";
import CloseModal from "../atoms/CloseModal";
import Gradient from "../atoms/Gradient";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";

const EnquireModal = () => {
  const { isModal } = useSelector((state) => state.modal);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed left-1/2 z-30 w-[700px] -translate-x-1/2 overflow-hidden rounded-[10px] bg-[#0C1739] px-8 py-6 transition-all duration-500 ease-in-out ${
        isModal === "enquire"
          ? "top-1/2 -translate-y-1/2 scale-100"
          : "bottom-0 translate-y-full scale-0"
      } `}
    >
      <Gradient className="-bottom-[80%] left-[10%] bg-[#49BAC2] blur-[200px]" />
      <h2 className="text-primary mb-5 text-center text-[28px] leading-[24px] font-bold">
        Get in Touch
      </h2>
      <form className="flex flex-col items-center gap-3">
        <Input label="Name" type="text" name="name" id="name" />
        <Input label="Email" type="email" name="email" id="email" />
        <Input label="Phone" type="tel" name="phone" id="phone" />
        <Textarea label="Message" name="message" id="message" />
        <Button className="mt-6" variant="fill">
          Submit Now
        </Button>
      </form>
      <CloseModal />
    </div>
  );
};

export default EnquireModal;
