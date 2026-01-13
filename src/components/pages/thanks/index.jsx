import Gradient from "@/components/atoms/Gradient";
import Link from "next/link";
import Button from "@/components/atoms/Button";

const ThankYou = () => {
  return (
    <section className="relative flex h-[60vh] flex-col items-center justify-center gap-6 p-5 md:h-[70vh] lg:h-[80vh] xl:h-screen">
      <Gradient className="top-1/2 left-1/2 bg-[#104AF7] blur-[300px]" />
      <h3 className="text-[28px] font-semibold text-white lg:text-[32px]">
        Thank You!
      </h3>
      <p className="max-w-[600px] text-center text-sm leading-[20px] text-white md:text-base md:leading-[24px]">
        We sincerely appreciate your engagement with FlexTron. Your request has
        been successfully received. Our team is now processing your information
        and will reach out to you soon with the next steps.{" "}
      </p>
      <Link href="/">
        <Button variant="fill">Back to home</Button>
      </Link>
    </section>
  );
};

export default ThankYou;
