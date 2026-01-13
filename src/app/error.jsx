"use client";

import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";

export default function Error({ error, reset }) {
  return (
    <section className="relative flex h-[60vh] flex-col items-center justify-center gap-4 md:h-[70vh] lg:h-[80vh] xl:h-screen">
      <Gradient className="top-1/2 left-1/2 bg-secondary blur-[200px]" />
      <h2 className="max-w-[350px] bg-linear-to-r from-[#3853A3] via-[#55A5D9] to-[#57DDE6] bg-clip-text text-center text-[80px] leading-[100%] font-medium text-transparent">ERROR</h2>
      <p className="max-w-[350px] text-center text-[18px] leading-[24px] text-white">
        {error.message}.
      </p>

      <Button variant="outline" onClick={() => reset()}>
        Refresh
      </Button>
    </section>
  );
}
