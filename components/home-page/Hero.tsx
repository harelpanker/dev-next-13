'use client';

import Link from 'next/link';

import Container from '../ui/Container';
import CompanyLogos from './CompanyLogos';

import noise from '/public/images/noise.webp';

const Hero = () => {
  return (
    <>
      <div
        className={`relative flex flex-col gap-6 items-center pt-16 lg:pt-28 pb-40 lg:px-12 noise-section`}>
        <Container>
          <section className='flex flex-col items-center text-center gap-7 md:gap-10'>
            <div className='flex flex-col items-center gap-4 md:gap-8'>
              <h1 className='font-medium text-4xl md:text-8xl'>
                Harel Panker{' '}
                <span className='block text-2xl md:text-6xl'>
                  Front End Web Developer
                </span>
              </h1>
              <p className='max-w-3xl md:text-2xl'>
                A front-end engineer working as a freelancer with leading
                agencies and startups, developing products that meet the
                users&apos; needs.
              </p>
            </div>
            <Link
              className='relative z-10 overflow-hidden p-1 rounded-full group hover:-translate-y-2 transition duration-500'
              href='#'>
              <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#3245ff] to-[#bc52ee] md:text-lg font-medium relative z-30 w-full px-6 md:px-10 py-2 md:py-3 h-full flex justify-center items-center'>
                About and Skills
              </span>
              <span className='absolute -top-[200%] -left-[10%] aspect-square w-[120%] z-10 bg-gradient-to-br from-[#3245ff] to-[#bc52ee] group-hover:motion-safe:animate-spin-slow'></span>
            </Link>
          </section>
          {/* companys logos */}
          <CompanyLogos />
        </Container>
      </div>
      <style jsx>{`
        .noise-section::before {
          position: absolute;
          content: '';
          z-index: -1;
          top: 0%;
          bottom: 10%;
          width: 150%;
          left: -25%;
          background: url(${noise.src}) repeat,
            linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%);
          background-blend-mode: overlay;
          -webkit-mask-image: radial-gradient(
            rgba(0, 0, 0, 0.5),
            transparent 70%
          );
          mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);
        }
        @media screen and (max-width: 992px) {
          .noise-section::before {
            top: -50%;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
