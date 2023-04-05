'use client';

import { FC } from 'react';
import { useAtom } from 'jotai';
import isOpen from '@/store/nav-store';
import Container from '../ui/Container';
import LinkListDesktop from './LinkListDesktop';
import Logo from './Logo';
import MobileButton from './MobileButton';
import SocialMedia from './SocialMedia';
import MobileMenu from './MobileMenu';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
  const [open] = useAtom(isOpen);
  return (
    <header className='min-h-[70px] w-full fixed top-0 flex items-center z-50 border-b border-slate-200/40'>
      <Container>
        <nav className='lg:grid lg:grid-cols-3 flex items-center justify-between relative z-50'>
          <Logo />
          <div className='hidden lg:flex lg:justify-center'>
            <LinkListDesktop />
          </div>
          <div className='hidden lg:flex lg:justify-end'>
            <SocialMedia />
          </div>
          <MobileButton />
        </nav>
        {open ? <MobileMenu /> : null}
      </Container>
      <div
        style={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backfaceVisibility: 'hidden',
        }}
        className='absolute z-10 inset-0 w-full h-full blur-sm bg-slate-900 bg-opacity-20'></div>
    </header>
  );
};

export default Navbar;
