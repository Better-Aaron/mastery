import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { brainwave } from '../assets';
import MenuSvg from '../assets/svg/MenuSvg';
import Button from './Button';
import { navigation } from '../constants';

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </a>
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="">
            {navigation.map((item) => (
              <a key={item.id} href={item.url}>
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a href="#signup">New Account</a>
        <Button>Sign in</Button>
        <Button>
          <MenuSvg />
        </Button>
      </div>
    </div>
  );
};

export default Header;
