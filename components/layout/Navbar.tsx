'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useWindowScroll } from '@mantine/hooks';
import Container from '../ui/Container';
import logo from 'public/images/p.svg';
import ContactMail from '../ui/ContactMail';

const Navbar = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    document.querySelector('body')?.classList.toggle('overflow-hidden');
    document.querySelector('body')?.classList.toggle('h-full');
    document.querySelector('.cv_button')?.classList.toggle('hidden');
  };

  const scrollToTop = () => {
    scrollTo({ y: 0 });
    handleOpen();
  };
  return (
    <>
      <header
        className={`${
          scroll.y > 50 && !open
            ? 'bg-theme_black/70 backdrop-blur drop-shadow-md'
            : ''
        } lg:px-12 sticky top-0 z-50 py-5 flex items-center -mb-20 transition-all duration-500`}>
        <Container>
          <div className='flex w-full items-center justify-between relative z-50'>
            {/* logo */}
            <button aria-label='Scroll to top' onClick={() => scrollToTop()}>
              <Image src={logo} alt='logo' className='h-8' />
            </button>

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
            {/* nav links desktop */}
            <nav className='hidden lg:block'>
              <ul className='justify-between gap-6 flex items-center'>
                {/* skills */}
                <li>
                  <a href='/#skills'>Skills</a>
                </li>
                {/* work */}
                <li>
                  <a href='/#work'>Work</a>
                </li>
                {/* Recommendations */}
                <li>
                  <a href='/#recommendations'>Recommendations</a>
                </li>
                <li className='ml-'>
                  <a
                    href='mailto:harelpanker@protonmail.com'
                    className={`${
                      scroll.y > 476
                        ? 'bg-theme_white text-theme_black hover:text-theme_white'
                        : ''
                    } relative ring-1 ring-theme_white overflow-hidden font-medium  group px-8 py-2 rounded-full transition duration-500`}
                    aria-label='Contact me'>
                    <span className='relative z-20'>Contact</span>
                    <span className='absolute rounded-full z-10 w-full h-full inset-0 overflow-hidden opacity-0 group-hover:opacity-100'>
                      <span className='absolute opacity-0 group-hover:opacity-100 -top-[200%] -left-[10%] aspect-square w-[120%] z-10 bg-gradient-to-br from-[#3245ff] to-[#bc52ee] group-hover:motion-safe:animate-spin-slow'></span>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
      {/* links mobile */}
      <div
        className={`h-100dvh flex flex-col justify-between fixed inset-0 top-0 left-0 w-full z-20 overflow-auto pt-28 px-5 pb-8 bg-theme_black transition ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <ul className='flex flex-col justify-between gap-8 font-medium text-xl'>
          {/* skills */}
          <li>
            <a onClick={handleOpen} href='/#skills'>
              Skills
            </a>
          </li>
          {/* work */}
          <li>
            <a onClick={handleOpen} href='/#work'>
              Work
            </a>
          </li>
          {/* Recommendations */}
          <li>
            <a onClick={handleOpen} href='/#recommendations'>
              Recommendations
            </a>
          </li>
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
