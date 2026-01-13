"use client";

import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";

export default function Error({ error, reset }) {
  return (
    <section className="relative flex h-[60vh] flex-col items-center justify-center gap-4 md:h-[70vh] lg:h-[80vh] xl:h-screen">
      <Gradient className="bg-secondary top-1/2 left-1/2 blur-[200px]" />
      <h2 className="max-w-[600px] mb-2 bg-linear-to-r from-[#3853A3] via-[#55A5D9] to-[#57DDE6] bg-clip-text text-center text-[26px] leading-[32px] md:text-[40px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] font-medium text-transparent">
        Something went wrong
      </h2>
      <Button variant="fill" onClick={() => reset()}>
        Refresh
      </Button>
    </section>
  );
}
