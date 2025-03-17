import { useRef, useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDialogElement>(null);
  const onOpen = () => {
    ref.current?.showModal();
    setIsOpen(true);
  };
  const onClose = () => {
    ref.current?.close();
    setIsOpen(false);
  };

  return { ref, onOpen, onClose, isOpen };
}
