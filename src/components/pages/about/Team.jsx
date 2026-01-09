"use client";
import Gradient from "@/components/atoms/Gradient";
import Heading from "@/components/atoms/Heading";
import Slider from "@/components/molecules/Slider";
import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const Team = () => {
  const { openModal } = useModal();

  return (
    <section className="relative py-20">
      <Gradient className="bg-secondary top-[60%] left-1/2 blur-[200px]" />
      <div className="container">
        <Heading className="mb-14">Management Team</Heading>
        <Slider
          loop={false}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            540: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
          speed={900}
          modules={[Navigation]}
        >
          {data?.map((item, index) => {
            const { id, name, position, image } = item;
            return (
              <SwiperSlide
                className="cursor-pointer"
                onClick={() => openModal("team", item)}
                key={id}
              >
                <div>
                  <Image
                    src={`/images/team/${image}`}
                    alt={name}
                    width={324}
                    height={327}
                  />

                  <div className="mt-5">
                    <h3 className="mb-2 text-center font-semibold text-white">
                      {name}
                    </h3>
                    <p className="text-alpha text-center text-[14px] font-medium">
                      {position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Team;

const data = [
  {
    id: "1",
    name: "Dr. Monika Singh ",
    position: "Lead Data Scientist",
    image: "monika.svg",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "2",
    name: "Smitendu Das ",
    position: "Lead Data Scientist",
    image: "smitendu.svg",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3",
    name: "Mehak Parwani ",
    position: "Lead Data Scientist",
    image: "mehak.svg",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "4",
    name: "Mehak Parwani ",
    position: "Lead Data Scientist",
    image: "mehak.svg",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
