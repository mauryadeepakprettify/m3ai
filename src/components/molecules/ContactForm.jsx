import Image from "next/image";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";

const ContactForm = ({ className }) => {
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

      <form className="grid w-full max-w-[850px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
        <Input type="text" name="Name" label="Name*" required />
        <Input type="text" name="Company" label="Company Name" />
        <Input type="email" name="Email" label="Email*" required />
        <Input type="text" name="Phone" label="Phone*" required />
        <Textarea className="md:col-span-2" name="Message" label="Message" />
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
