import Hero from "@/components/organisms/Hero";
import Products from "./Products";

const ProductPage = () => {
  return (
    <>
      <Hero video="hologram.mp4" title="Products" scrollTo="#products" />
      <Products />
    </>
  );
};

export default ProductPage;
