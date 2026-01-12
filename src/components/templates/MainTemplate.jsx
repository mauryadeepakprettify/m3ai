import Overlay from "../atoms/Overlay";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import EnquireModal from "../molecules/EnquireModal";
import SectorModal from "../molecules/SectorModal";
import TeamModal from "../molecules/TeamModal";
import MenuModal from "../molecules/MenuModal";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Overlay />
      <MenuModal />
      <EnquireModal />
      <SectorModal />
      <TeamModal />
      <Footer />
    </>
  );
};

export default MainTemplate;
