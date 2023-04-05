import { FC } from 'react';
import Container from '../ui/Container';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header>
      <Container>
        <div className='flex flex-col md:flex-row gap-3 justify-between'>
          <h1 className='font-serif text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
            About
          </h1>
          <div className='text-lg flex flex-col gap-2 w-full max-w-sm md:max-w-md'>
            <p>
              My experience working as a freelance web developer over the past
              few years has provided me with a broad spectrum of knowledge in
              the field of web development.
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
    </header>
  );
};

export default Hero;
