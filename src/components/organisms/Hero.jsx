import Image from "next/image";
import Link from "next/link";
import Animate from "../molecules/Animate";

const Hero = ({ video, title, tagline, className, scrollTo }) => {
  return (
    <section
      className={`relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.85)_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,rgba(0,0,0,0)_71.15%,#000_100%),linear-gradient(360deg,rgba(0,0,0,0)_64.42%,rgba(0,0,0,0.85)_100%)] ${className ? className : "lg:h-[80vh] xl:h-screen md:h-[70vh] h-[60vh]"}`}
    >
      <video
        src={`/videos/${video}`}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      ></video>
      <Animate
        className={`absolute right-0 bottom-1/2 left-0 container flex translate-y-1/2 flex-col items-center justify-center gap-2`}
      >
        {tagline && (
          <h6
            dangerouslySetInnerHTML={{ __html: tagline }}
            className="max-w-[600px] text-center text-[18px] md:text-[24px] lg:text-[28px] leading-snug font-semibold text-white"
          ></h6>
        )}
        {title && (
          <h1 className="text-center text-[52px] md:text-[80px] lg:text-[100px] font-semibold text-white">
            {title}
          </h1>
        )}
      </Animate>
      {scrollTo && (
        <Link
          className="absolute lg:block hidden bottom-[8%] left-1/2 -translate-x-1/2"
          href={scrollTo}
        >
          <Image
            className="animate-bounce mx-auto mb-4"
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
