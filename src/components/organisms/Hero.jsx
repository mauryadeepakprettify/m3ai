import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,rgba(0,0,0,0)_71.15%,#000_100%)]">
      <video
        src="/videos/cube-neon.mp4"
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      ></video>

      <div className="absolute right-0 bottom-[8%] left-0 container flex flex-col items-center justify-center">
        <h6 className="text-center text-[28px] leading-snug font-semibold text-white">
          Engineering Intelligence for <br /> What Matters Most
        </h6>
        <h1 className="text-center text-[100px] font-semibold text-white">
          Meet M3 Ai
        </h1>
        <Link className="mt-32" href="/#mission-vision">
          <Image
            className="animate-floatUpDown mx-auto mb-4"
            src="/icons/mouse.svg"
            alt="Mouse"
            width={35}
            height={35}
          />
          <span className="text-center text-[14px] font-semibold text-white">
            Scroll to Explore
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
