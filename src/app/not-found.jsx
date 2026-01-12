import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex h-[60vh] relative flex-col items-center justify-center gap-6 md:h-[70vh] lg:h-[80vh] xl:h-screen">
      <Gradient className="top-1/2 left-1/2 bg-[#104AF7] blur-[300px]" />
      <Image
        className="mx-auto w-[200px] md:w-[200px] lg:mx-0 lg:h-[138px] lg:w-[397px]"
        src="/icons/m3ai-outline.webp"
        alt="m3ai"
        width={397}
        height={138}
      />
      <h6 className="text-[18px] max-w-[350px] text-center leading-[24px] gradient-secondary text-transparent bg-clip-text font-semibold">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </h6>

      <Link href="/">
        <Button child="gradient">Back to home</Button>
      </Link>
    </section>
  );
};

export default NotFound;
