'use client';
import { logoutAPI } from '@/lib/api/auth';
import AirbnbLogoIcon from '@/public/static/svg/logo/logo.svg';
import AirbnbLogoTextIcon from '@/public/static/svg/logo/logo_text.svg';
import { initUser } from '@/store/features/users/usersSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import HeaderAuths from './HeaderAuths';
import HeaderUserProfile from './HeaderUserProfile';

const Header: React.FC = () => {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const dispatch = useAppDispatch();
  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(initUser());
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <header className="sticky top-0 w-full flex justify-between items-center h-[80px] px-[40px] shadow-sm z-50">
      <a href="/" className="flex items-center">
        <AirbnbLogoIcon className="mr-1.5" />
        <AirbnbLogoTextIcon />
      </a>
      {!isLogged && <HeaderAuths />}
      {isLogged && <HeaderUserProfile />}
    </header>
  );
};

export default Header;
