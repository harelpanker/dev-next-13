'use client';

import { FC } from 'react';
import LinkListDesktop from './LinkListDesktop';
import SocialMedia from './SocialMedia';

type MobileMenuProps = {};

const MobileMenu: FC<MobileMenuProps> = ({}) => {
  return (
    <nav className='lg:hidden fixed w-full h-screen z-30 bg-slate-900 bg-opacity-95 inset-0 px-5 pt-24 pb-10 text-slate-50 flex flex-col items-center text-center justify-between'>
      <LinkListDesktop />
      <SocialMedia />
    </nav>
  );
};

export default MobileMenu;
