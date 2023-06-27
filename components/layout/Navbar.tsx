'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useWindowScroll } from '@mantine/hooks';
import Container from '../ui/Container';
import logo from 'public/images/p.svg';
import ContactMail from '../ui/ContactMail';

const Navbar = () => {
  const [scroll] = useWindowScroll();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    document.querySelector('body')?.classList.toggle('overflow-hidden');
    document.querySelector('body')?.classList.toggle('h-full');
  };
  return (
    <>
      <header
        className={`${
          scroll.y > 50 && !open
            ? 'bg-theme_black/70 backdrop-blur drop-shadow-md'
            : ''
        } sticky top-0 z-30 py-5 flex items-center -mb-20 transition-all duration-500`}>
        <Container>
          <div className='flex w-full items-center justify-between relative z-20'>
            {/* logo */}
            <Image src={logo} alt='logo' className='h-8' />
            {/* nav button mobile  */}
            <button
              onClick={handleOpen}
              aria-label={`${open ? 'close' : 'open'} menu`}
              type='button'
              className='flex flex-col w-6 h-6 lg:hidden justify-around'>
              <div
                className={`w-full h-px transition bg-theme_white ${
                  open
                    ? '-rotate-45 translate-y-[6px]'
                    : 'rotate-0 translate-y-[2px]'
                }`}></div>
              <div
                className={`w-full h-px transition bg-theme_white ${
                  open
                    ? 'rotate-45 -translate-y-[6px]'
                    : 'rotate-0 -translate-y-[2px]'
                }`}></div>
            </button>
            {/* links mobile */}
          </div>
        </Container>
      </header>
      {/* fixed content */}
      <div
        className={`h-100dvh flex flex-col justify-between fixed inset-0 top-0 left-0 w-full z-20 overflow-auto pt-28 px-5 pb-8 bg-theme_black transition ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <ul className='flex flex-col justify-between gap-8 font-medium text-xl'>
          {/* skills */}
          <li>Skills</li>
          {/* work */}
          <li>Work</li>
          {/* Recommendations */}
          <li>Recommendations</li>
        </ul>
        {/* contact */}
        <div className='flex justify-center'>
          <ContactMail />
        </div>
      </div>
    </>
  );
};

export default Navbar;
