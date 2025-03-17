import { forwardRef, MouseEventHandler, ReactNode } from "react";
import styles from "../../styles/contact.module.css";

interface PropsModal {
  children?: ReactNode;
  onClose: MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

export type Ref = HTMLDialogElement;

export default forwardRef<Ref, PropsModal>(function ContactModal(
  { children, onClose, isOpen },
  ref
) {
  return (
    <dialog
      ref={ref}
      className={` ${styles.containerModal} ${
        isOpen && styles.containerModal_open
      }`}
    >
      <div className={`bg-white rounded-lg shadow w-1/3 ${styles.mainModal}`}>
        <button
          type="button"
          className={`${styles.modalClose_btn}`}
          onClick={onClose}
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.068 1.654 8 6.721 2.934 1.654 1.656 2.932 6.723 8l-5.067 5.067 1.278 1.278 5.067-5.067 5.067 5.067 1.278-1.278-5.067-5.067 5.067-5.067-1.278-1.278Z" />
          </svg>
        </button>
        <div className="p-4 pt-8 border-b items-center justify-between">
          {children}
        </div>
      </div>
    </dialog>
  );
});
