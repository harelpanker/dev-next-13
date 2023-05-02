import { FC } from 'react';
import Container from '../ui/Container';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='lg:py-28'>
      <Container size='md'>
        <h1 className='text-7xl xl:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700'>
          What my clients&apos; say
        </h1>
      </Container>
    </header>
  );
};

export default Hero;
