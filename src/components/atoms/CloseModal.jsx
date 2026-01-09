import Image from "next/image";
import { useModal } from "@/hooks/useModal";

const CloseModal = () => {
  const { closeModal } = useModal();

  return (
    <button
      className="absolute top-5 right-5 z-30 cursor-pointer"
      onClick={() => closeModal()}
    >
      <Image
        className="h-[32px] w-[24px]"
        src="/icons/close.svg"
        alt="close"
        width={24}
        height={32}
      />
    </button>
  );
};

export default CloseModal;
