'use client';

import Image from 'next/image';

import logo from 'public/images/p.svg';
import star from 'public/images/star.svg';
import noise from '/public/images/noise.webp';

const CTA = () => {
  return (
    <>
      <section className='relative mx-auto flex w-full max-w-screen-xl text-center flex-col items-center justify-end overflow-hidden cta'>
        {/* logo */}
        <Image src={logo} alt='logo' />
        {/* title */}
        <h2 className=' text-3xl md:text-6xl font-medium my-8'>
          <span className='md:block'>Let&lsquo;s built something </span>awesome
          together!
        </h2>
        {/* cta */}
        <button
          className='relative z-10 overflow-hidden p-1 rounded-full group hover:-translate-y-2 transition duration-500'
          aria-label='Open modal'>
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#3245ff] to-[#bc52ee] md:text-lg font-medium relative z-30 w-full px-6 md:px-10 py-2 md:py-3 h-full flex justify-center items-center'>
            Contact me
          </span>
          <span className='absolute -top-[200%] -left-[10%] aspect-square w-[120%] z-10 bg-gradient-to-br from-[#3245ff] to-[#bc52ee] group-hover:motion-safe:animate-spin-slow'></span>
        </button>
        {/* star */}
        <Image
          className='relative -bottom-24 lg:-bottom-32 w-full max-w-[75vw] lg:max-w-md'
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
