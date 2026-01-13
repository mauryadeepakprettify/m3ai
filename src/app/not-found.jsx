import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="relative flex h-[60vh] flex-col items-center justify-center gap-6 md:h-[70vh] lg:h-[80vh] xl:h-screen">
      <Gradient className="top-1/2 left-1/2 bg-[#104AF7] blur-[300px]" />
      <h2 className="max-w-[350px] bg-linear-to-r from-[#3853A3] via-[#55A5D9] to-[#57DDE6] bg-clip-text text-center text-[80px] leading-[100%] font-medium text-transparent">
        404
      </h2>
      <h6 className="max-w-[350px] text-center text-[18px] leading-[24px] text-white">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </h6>

      <Link href="/">
        <Button variant="outline">Back to home</Button>
      </Link>
    </section>
  );
};

export default NotFound;
