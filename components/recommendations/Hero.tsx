import { FC } from 'react';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='flex flex-col gap-6 items-center text-center lg:py-28'>
      <h1 className='text-4xl md:text-7xl xl:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
        Recommendations
      </h1>
      <p className='text-sm md:text-lg font-medium text-slate-100/80 max-w-xl'>
        Some of what my clients have to say
      </p>
    </header>
  );
};

export default Hero;
