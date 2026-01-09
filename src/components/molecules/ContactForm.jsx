import Image from "next/image";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import Button from "../atoms/Button";

const ContactForm = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-20 ${className}`}
    >
      <Image
        className="mb-4"
        src="/images/logo-white.svg"
        alt="logo"
        width={131}
        height={45}
      />
      <h6 className="mb-6 max-w-[300px] text-center text-[20px] leading-[28px] font-semibold text-white">
        Let’s build your AI-powered future together
      </h6>

      <form className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-[850px] w-full">
        <Input type="text" name="Name" label="Name*" />
        <Input type="text" name="Company" label="Company Name" />
        <Input type="email" name="Email" label="Email*" />
        <Input type="text" name="Phone" label="Phone*" />
        <Textarea className="col-span-2" name="Message" label="Message" />
        <span className="col-span-2 mt-4">
          <Button className="mx-auto block" variant="fill" type="submit">
            Submit
          </Button>
        </span>
      </form>
    </div>
  );
};

export default ContactForm;
