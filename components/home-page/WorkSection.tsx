'use client';

import Container from '../ui/Container';
import TypographyH2 from '../ui/TypographyH2';

import noise from '/public/images/noise.webp';

const WorkSection = () => {
  return (
    <>
      <section className='noise-work relative w-full'>
        <Container>
          <header className='flex flex-col gap-4 md:gap-10 text-center items-center'>
            <TypographyH2 text='Content-focused' />
            <p className='max-w-3xl md:text-2xl'>
              In the past few years, I have collaborated with numerous clients
              on a diverse range of projects.
            </p>
          </header>
        </Container>
      </section>
      <style jsx>{`
        .noise-work {
        }
        .noise-work::before {
          position: absolute;
          content: '';
          z-index: -1;
          top: 15%;
          height: 60%;
          width: 150%;
          left: -25%;
          background: url(${noise.src}) repeat,
            linear-gradient(247.23deg, #4af2c8 0%, #2f4cb3 100%);
          background-blend-mode: overlay;
          -webkit-mask-image: radial-gradient(
            rgba(0, 0, 0, 0.8),
            transparent 70%
          );
          mask-image: radial-gradient(rgba(0, 0, 0, 0.8), transparent 70%);
        }
      `}</style>
    </>
  );
};

export default WorkSection;
