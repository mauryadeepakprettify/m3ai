import Image from "next/image";
import Link from "next/link";

const Hero = ({ video, title, tagline, className, scrollTo }) => {
  return (
    <section
      className={`relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,rgba(0,0,0,0)_71.15%,#000_100%),linear-gradient(360deg,rgba(0,0,0,0)_64.42%,rgba(0,0,0,0.85)_100%)] ${className ? className : "h-screen"}`}
    >
      <video
        src={`/videos/${video}`}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      ></video>
      <div
        className={`absolute right-0 bottom-1/2 left-0 container flex translate-y-1/2 flex-col items-center justify-center gap-2`}
      >
        {tagline && (
          <h6 className="max-w-[600px] text-center text-[28px] leading-snug font-semibold text-white">
            {tagline}
          </h6>
        )}
        {title && (
          <h1 className="text-center text-[100px] font-semibold text-white">
            {title}
          </h1>
        )}
      </div>
      {scrollTo && (
        <Link
          className="absolute bottom-[8%] left-1/2 -translate-x-1/2"
          href={scrollTo}
        >
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
      )}
    </section>
  );
};

export default Hero;
