import Button from "@/components/atoms/Button";
import Gradient from "@/components/atoms/Gradient";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <section className="relative h-[750px]">
      <Gradient className="bg-secondary absolute top-[45%] left-1/2 z-10 h-[500px] w-[500px] blur-[140px]" />
      <h1 className="absolute top-[45%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-[100px] font-semibold text-white">
        Contact M3Ai
      </h1>

      <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 justify-center gap-5">
        {data?.map(({ title, description, icon, route }) => {
          return (
            <div
              key={title}
              className="relative flex min-h-[244px] w-[341px] flex-col gap-6 rounded-[10px] bg-white/10 p-10"
            >
              <Image
                src={`/icons/${icon}`}
                alt={title}
                width={40}
                height={40}
                className="absolute top-6 right-6"
              />

              <h6 className="text-[18px] font-bold text-white">{title}</h6>
              <p className="text-alpha leading-[24px] font-medium">
                {description}
              </p>
              {route && <Link href={route}><Button child="gradient">Get Direction</Button></Link>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactInfo;

const data = [
  {
    icon: "building.svg",
    title: "Address",
    description:
      "Tower 3A, 4th Floor, DLF Corporate Park, M.G. Road, Gurugram, Haryana - 122002, India",
    route:
      "https://www.google.com/maps/dir/28.4117815,77.054996/DLF+Corporate+Park,+Moulsari+Ave,+Garden+Estate,+DLF+Phase+3,+Sector+24,+Gurugram,+Haryana+122010/@28.4462394,77.0546252,13.25z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d1ed3c642016d:0x56ed94151964d0a6!2m2!1d77.1051404!2d28.482756!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: "send.svg",
    title: "Write Us",
    description: "info@M3AI.com",
  },
  {
    icon: "call.svg",
    title: "Call Us",
    description: "+91-124-4130500",
  },
];
