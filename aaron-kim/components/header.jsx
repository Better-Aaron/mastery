'use client';

import { useEffect, useState } from 'react';
//* components
import Logo from './logo';
import MobileNav from './mobile-nav';
import Nav from './nav';

import ThemeToggler from './theme-toggler';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scroolYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => {
      window.removeEventListener('scroll', scroolYPos);
    };
  }, []);

  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
