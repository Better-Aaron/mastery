import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children: React.ReactNode;
  closePortal: () => void;
}
const ModalPortal: React.FC<IProps> = ({ children, closePortal }) => {
  const ref = useRef<Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.querySelector('#root-modal');
      ref.current = dom;
    }
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <div className="w-full h-full flex justify-center items-center fixed top-0 left-0">
        <div
          className="absolute w-full h-full bg-[#000000bf] z-10"
          role="presentation"
          onClick={closePortal}
        />
        {children}
      </div>,
      ref.current
    );
  }
  return null;
};

export default ModalPortal;
