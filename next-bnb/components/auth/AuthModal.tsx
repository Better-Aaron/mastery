import { useAppSelector } from '@/store/hooks';
import React from 'react';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';

interface IProps {
  closeModal: () => void;
}

const AuthModal: React.FC<IProps> = ({ closeModal }) => {
  const authMode = useAppSelector((state) => state.auth.authMode);

  return (
    <div className="z-[11]">
      {authMode === 'signup' && <SignUpModal closeModal={closeModal} />}
      {authMode === 'login' && <LoginModal closeModal={closeModal} />}
    </div>
  );
};

export default AuthModal;
