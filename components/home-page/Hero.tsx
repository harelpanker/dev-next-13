'use client';

import { FC, useEffect } from 'react';
import Image from 'next/image';
import hero_image from '../../public/images/2.jpeg';
import Container from '../ui/Container';
import Link from 'next/link';
import { animate, inView, timeline } from 'motion';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  useEffect(() => {
    timeline([
      ['.span_hello', { opacity: [0, 1], y: ['40%', '0%'] }, { duration: 1.5 }],
      [
        '.span_name',
        { opacity: [0, 1], y: ['20%', '0%'] },
        { duration: 1.5, at: 0.5 },
      ],
      [
        'figure',
        { opacity: [0, 1], y: ['30%', '0%'] },
        { duration: 1.5, at: 0.7 },
      ],
    ]);

    inView('.bottom_content', (info) => {
      animate(
        info.target,
        { opacity: [0, 1], y: ['20%', '0%'] },
        { delay: 0.5, duration: 0.9 }
      );
    });
  }, []);

  return (
    <section className='flex flex-col gap-6 items-center lg:py-28 lg:px-12'>
      <Container>
        <div className='flex flex-col xl:grid grid-cols-8 grid-rows-4'>
          <figure className='relative mb-8 xl:mb-0 col-span-4 row-span-3 col-start-2 row-start-2 grayscale hover:grayscale-0 transition duration-300'>
            <Image
              priority
              src={hero_image}
              alt='Harel Panker - Fron end developer'
              className='w-full h-full'
            />
          </figure>
          <h1 className='static xl:absolute mix-blend-multiply z-10 text-7xl font-serif md:text-9xl xl:text-[16rem] 2xl:text-[22rem] font-bold'>
            <span className='span_hello block'>
              <span className='scroll_1 block'>Hello</span>
            </span>
            <span className='span_name block xl:ml-32 whitespace-nowrap'>
              <span className='scroll_2 block'>I&apos;m Harel</span>
            </span>
          </h1>
          <div className='bottom_content row-start-4 col-start-6 col-span-3 flex flex-col xl:p-6 max-w-xl justify-end items-start gap-3 text-xl md:text-2xl font-medium'>
            <p>
              A front-end engineer working as a freelancer with leading agencies
              and startups, developing products that meet the users&apos; needs.
            </p>
            <Link
              className='flex flex-col gap-[2px] group text-lg'
              href='/about'>
              <span className='relative z-20'>My full set of skills</span>
              <div className='bg-slate-200 w-full h-[3px] relative overflow-hidden'>
                <div className='absolute h-full w-full bg-slate-900 transition duration-300 -translate-x-full group-hover:translate-x-0'></div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
