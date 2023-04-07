import { FC } from 'react';
import Container from '../ui/Container';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header>
      <Container>
        <div className='flex flex-col gap-3 items-center text-center'>
          <h1 className='font-serif text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
            Contact
          </h1>
          <div className='text-lg flex flex-col gap-2 w-full max-w-sm md:max-w-md'>
            <p>I&apos;ll be back to you on the next business day</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
