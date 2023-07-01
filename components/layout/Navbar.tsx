'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useWindowScroll } from '@mantine/hooks';
import Container from '../ui/Container';
import logo from 'public/images/p.svg';
import ContactMail from '../ui/ContactMail';
import ContactModal from '../ui/ContactModal';

const linksData = [
  { name: 'Skills', link: '/#skills' },
  { name: 'Work', link: '/#work' },
  { name: 'Recommendations', link: '/#recommendations' },
];

const Navbar = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => {
    setIsOpen(true);
    document.querySelector('html')?.classList.remove('scroll-smooth');
  };

  const addScrollSmooth = () =>
    document.querySelector('html')?.classList.add('scroll-smooth');

  const handleOpen = () => {
    setOpen(!open);
    addScrollSmooth();
    document.querySelector('body')?.classList.toggle('overflow-hidden');
    document.querySelector('body')?.classList.toggle('h-full');
    document.querySelector('.cv_button')?.classList.toggle('hidden');
  };

  const scrollToTop = () => {
    scrollTo({ y: 0 });
    open && handleOpen();
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
                {linksData.map((link) => (
                  <li key={link.name}>
                    <a onClick={() => addScrollSmooth()} href={link.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => openModal()}
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
                  </button>
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
          {linksData.map((link) => (
            <li key={link.name}>
              <a onClick={handleOpen} href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* contact */}
        <div className='flex justify-center'>
          <ContactMail />
        </div>
      </div>
      <ContactModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default Navbar;
