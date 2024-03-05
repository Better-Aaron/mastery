import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const useModal = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  interface IProps {
    children: React.ReactNode;
  }

  const ModalPortal: React.FC<IProps> = ({ children }) => {
    const ref = useRef<Element | null>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
      if (document) {
        const dom = document.querySelector('#root-modal');
        ref.current = dom;
      }
    }, []);

    if (ref.current && mounted && modalOpened) {
      return createPortal(
        <div className="w-full h-full flex justify-center items-center fixed top-0 left-0 z-50">
          <div
            className="absolute w-full h-full bg-[#000000bf] z-10"
            role="presentation"
            onClick={closeModal}
          />
          {children}
        </div>,
        ref.current
      );
    }
    return null;
  };

  return {
    openModal,
    closeModal,
    ModalPortal,
  };
};

export default useModal;
