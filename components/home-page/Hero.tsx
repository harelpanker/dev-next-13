import { FC } from 'react';
import Image from 'next/image';
import hero_image from '../../public/images/2.jpeg';
import Container from '../ui/Container';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='flex flex-col gap-6 items-center lg:py-28'>
      <Container>
        <div className='grid'>
          <div className='relative'>
            <Image src={hero_image} alt='Harel Panker - Fron end developer' />
            <h1 className='text-4xl font-serif md:text-7xl xl:text-[18rem] 2xl:text-[22rem] font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500'>
              <span>Hello</span>
              <span className='block'>I&apos;m Harel</span>
            </h1>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
