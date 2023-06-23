'use client';

import Marquee from 'react-fast-marquee';
import Container from '../ui/Container';
import TypographyH2 from '../ui/TypographyH2';
import MarqueeRow from './MarqueeRow';

import noise from '/public/images/noise.webp';

const About = () => {
  return (
    <section className='relative max-w-full' id='about'>
      <Container>
        <div className='flex flex-col gap-12 items-center'>
          <header className='flex flex-col gap-4 md:gap-10 text-center items-center'>
            <TypographyH2 text='Skill set' />
            <p className='max-w-3xl md:text-2xl'>
              My experience working as a freelance web developer has provided me
              with a broad spectrum of knowledge in a range of technologies,
              including TypeScript, TailwindCSS, React, Next.js, and more.
            </p>
          </header>

          <div className='w-full flex justify-center'>
            <div className='flex flex-col gap-6 py-6 text-left w-full max-w-4xl relative noise-panel overflow-hidden'>
              <Marquee
                speed={10}
                gradient={false}
                className='max-w-[90vw] w-full py-4 flex'>
                <MarqueeRow />
                <MarqueeRow />
              </Marquee>

              <div className='px-6 grid grid-cols-1 gap-4 md:grid-cols-2'>
                <h3 className='text-xl md:text-2xl font-medium'>
                  I know a thing <span className='md:block'>or two about:</span>
                </h3>
                <p>
                  Strongly emphasize the basics of web development, from
                  semantic HTML, CSS, and JavaScript / TypeScript, these are the
                  things I use on a daily basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .noise-panel {
          color: rgb(191 193 201);
          position: relative;
          isolation: isolate;
          border-width: 1px;
          border-color: rgb(52 56 65);
          background-color: rgb(35 38 45);
        }
        .noise-panel::before {
          position: absolute;
          inset: 0;
          z-index: -20;
          opacity: 0.4;
          mix-blend-mode: overlay;
          content: '';
          background-image: url(${noise.src});
        }
      `}</style>
    </section>
  );
};

export default About;
