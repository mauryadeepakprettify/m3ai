import Gradient from "@/components/atoms/Gradient";
import ContactForm from "@/components/molecules/ContactForm";

const ContactEnquire = () => {
  return (
    <section className="relative overflow-hidden">
      <Gradient className="absolute top-[70%] left-[30%] bg-[#104AF7] blur-[200px]" />
      <div className="lg:max-w-[650px] mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactEnquire;
