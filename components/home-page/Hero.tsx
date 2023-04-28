import { FC } from 'react';
import Image from 'next/image';
import hero_image from '../../public/images/2.jpeg';
import Container from '../ui/Container';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header className='flex flex-col gap-6 items-center lg:py-28 lg:px-12'>
      <Container>
        <div className='flex flex-col xl:grid grid-cols-8 grid-rows-4'>
          <div className='relative mb-8 xl:mb-0 col-span-4 row-span-3 col-start-2 row-start-2 grayscale hover:grayscale-0 transition duration-300'>
            <Image src={hero_image} alt='Harel Panker - Fron end developer' />
          </div>
          <h1 className='static xl:absolute mix-blend-multiply z-10 text-7xl font-serif md:text-9xl xl:text-[16rem] 2xl:text-[22rem] font-bold'>
            <span>Hello</span>
            <span className='block xl:ml-32 whitespace-nowrap'>
              I&apos;m Harel
            </span>
          </h1>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
