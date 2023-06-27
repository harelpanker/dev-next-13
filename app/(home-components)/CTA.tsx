'use client';

import { useEffect } from 'react';

import Image from 'next/image';

import { inView, animate } from 'motion';

import logo from 'public/images/p.svg';
import star from 'public/images/star.svg';
import noise from '/public/images/noise.webp';
import ContactMail from '@/components/ui/ContactMail';

const CTA = () => {
  useEffect(() => {
    inView('.star', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: [50, 0] },
        { delay: 0.4, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      );
    });
  }, []);

  return (
    <>
      <section className='relative mx-auto flex w-full max-w-screen-xl text-center flex-col items-center justify-end overflow-hidden cta'>
        {/* logo */}
        <Image src={logo} alt='logo' />
        {/* title */}
        <h2 className=' text-3xl md:text-6xl font-medium my-8'>
          <span className='md:block'>Let&lsquo;s build something </span>awesome
          together!
        </h2>
        {/* cta */}
        <ContactMail />
        {/* star */}
        <Image
          className='relative -mt-8 lg:-mt-16 -bottom-16 lg:-bottom-32 w-full max-w-[75vw] lg:max-w-md star'
          src={star}
          alt='star'
        />
      </section>
      <style jsx>{`
        .cta::before {
          left: 0%;
          width: 100%;
          -webkit-mask-image: radial-gradient(
            rgba(0, 0, 0, 0.7),
            transparent 60%
          );
          mask-image: radial-gradient(rgba(0, 0, 0, 0.7), transparent 60%);
          position: absolute;
          content: '';
          z-index: -10;
          top: 25%;
          height: 150%;
          width: 90%;
          left: 5%;
          background: url(${noise.src}) repeat,
            linear-gradient(247.23deg, #4af2c8 0%, #2f4cb3 100%);
          background-blend-mode: overlay;
          -webkit-mask-image: radial-gradient(
            rgba(0, 0, 0, 0.7),
            transparent 70%
          );
          mask-image: radial-gradient(rgba(0, 0, 0, 0.7), transparent 70%);
        }
      `}</style>
    </>
  );
};

export default CTA;
