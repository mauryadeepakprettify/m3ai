import Overlay from "../atoms/Overlay";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import EnquireModal from "../molecules/EnquireModal";
import SectorModal from "../molecules/SectorModal";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Overlay />
      <EnquireModal />
      <SectorModal />
      <Footer />
    </>
  );
};

export default MainTemplate;
