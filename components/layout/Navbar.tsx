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
            ? 'bg-theme_black/70 drop-shadow-md backdrop-blur'
            : ''
        } sticky top-0 z-50 -mb-20 flex items-center py-5 transition-all duration-500 lg:px-12`}>
        <Container>
          <div className='relative z-50 flex w-full items-center justify-between'>
            {/* logo */}
            <button aria-label='Scroll to top' onClick={() => scrollToTop()}>
              <Image src={logo} alt='logo' className='h-8' />
            </button>

            {/* nav button mobile  */}
            <button
              onClick={handleOpen}
              aria-label={`${open ? 'close' : 'open'} menu`}
              type='button'
              className='flex h-6 w-6 flex-col justify-around lg:hidden'>
              <div
                className={`h-px w-full bg-theme_white transition ${
                  open
                    ? 'translate-y-[6px] -rotate-45'
                    : 'translate-y-[2px] rotate-0'
                }`}></div>
              <div
                className={`h-px w-full bg-theme_white transition ${
                  open
                    ? '-translate-y-[6px] rotate-45'
                    : '-translate-y-[2px] rotate-0'
                }`}></div>
            </button>
            {/* nav links desktop */}
            <nav className='hidden lg:block'>
              <ul className='flex items-center justify-between gap-6'>
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
                    } group relative overflow-hidden rounded-full px-8  py-2 font-medium ring-1 ring-theme_white transition duration-500`}
                    aria-label='Contact me'>
                    <span className='relative z-20'>Contact</span>
                    <span className='absolute inset-0 z-10 h-full w-full overflow-hidden rounded-full opacity-0 group-hover:opacity-100'>
                      <span className='absolute -top-[200%] -left-[10%] z-10 aspect-square w-[120%] bg-gradient-to-br from-[#3245ff] to-[#bc52ee] opacity-0 group-hover:opacity-100 group-hover:motion-safe:animate-spin-slow'></span>
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
        className={`h-100dvh fixed inset-0 top-0 left-0 z-20 flex w-full flex-col justify-between overflow-auto bg-theme_black px-5 pt-28 pb-8 transition ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <ul className='flex flex-col justify-between gap-8 text-xl font-medium'>
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
