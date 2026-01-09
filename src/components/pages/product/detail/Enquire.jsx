import ContactForm from "@/components/molecules/ContactForm";
import Gradient from "@/components/atoms/Gradient";

const ProductEnquire = () => {
  return (
    <section className="relative overflow-hidden bg-white/10">
      <Gradient className="absolute top-[20%] left-1/2 bg-[#104AF7] blur-[200px]" />

      <div className="">
        <ContactForm />
      </div>
    </section>
  );
};

export default ProductEnquire;
