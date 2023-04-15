import { FC } from 'react';
import MainButton from '../ui/MainButton';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='flex flex-col gap-6 items-center text-center lg:py-28'>
      <h1 className='text-4xl font-serif md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
        Harel Panker
        <br /> Front-End Developer
      </h1>
      <p className='text-sm md:text-lg font-medium text-slate-100/80 max-w-xl'>
        Over the past 3 years, I&apos;ve worked with leading agencies and
        startups to develop products that help meet users&apos; needs through
        functional visual storytelling and purposeful user interfaces.
      </p>
      <div className='flex'>
        <MainButton link='/about' text='My skill set' />
      </div>
    </header>
  );
};

export default Hero;
