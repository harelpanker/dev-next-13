import { FC } from 'react';
import Container from '../ui/Container';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className='px-5 lg:px-14'>
      <Container size='md'>
        <div className='flex flex-col gap-8 lg:gap-56 justify-between'>
          <h1 className='text-7xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700'>
            About
          </h1>
          <div
            style={{ lineHeight: 1.625 }}
            className='text-2xl md:text-6xl font-medium flex flex-col gap-3 md:gap-8'>
            <p>
              My experience working as a freelance web developer has provided me
              with a{' '}
              <strong className='font-semibold'>
                broad spectrum of knowledge
              </strong>{' '}
              in web development.
            </p>
            <p>
              In addition, I have gained expertise in a range of technologies,{' '}
              <strong className='font-semibold'>
                including React, Next.js, Tailwind CSS, TypeScript, and more.
              </strong>{' '}
              This skill set enables me to create dynamic and responsive web
              experiences that cater to the specific needs of my clients.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
