'use client';

import Marquee from 'react-fast-marquee';
import Container from '@/components/ui/Container';
import TypographyH2 from '../../components/ui/TypographyH2';
import MarqueeRow from './MarqueeRow';

import noise from '/public/images/noise.webp';
import SectionId from './SectionId';

const About = () => {
  return (
    <section className='relative max-w-full'>
      <Container>
        <div className='flex flex-col items-center gap-12'>
          <header className='flex flex-col items-center gap-4 text-center md:gap-10'>
            <TypographyH2 text='Skill set' />
            <p className='max-w-3xl md:text-2xl'>
              My experience working as a freelance web developer has provided me
              with a broad spectrum of knowledge in a range of technologies,
              including TypeScript, TailwindCSS, React, Next.js, and more.
            </p>
          </header>

          <div className='flex w-full justify-center'>
            <div className='noise-panel relative flex w-full max-w-4xl flex-col gap-6 overflow-hidden py-6 text-left'>
              <Marquee
                speed={10}
                pauseOnHover
                gradient={false}
                className='flex w-full max-w-[90vw] py-4'>
                <MarqueeRow />
                <MarqueeRow />
              </Marquee>

              <div className='grid grid-cols-1 gap-4 px-6 md:grid-cols-2'>
                <h3 className='text-xl font-medium md:text-2xl'>
                  I also have{' '}
                  <span className='md:block'>experience utilizing:</span>
                </h3>
                <p>
                  Semantic HTML, CSS, SCSS, TailwindCSS, JavaScript, TypeScript,
                  ReactJS, NextJS, Figma, Webflow, UX/UI, Technical SEO, and
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <SectionId id='skills' />
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
