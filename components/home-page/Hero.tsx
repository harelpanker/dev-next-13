'use client';

import { FC } from 'react';
import Image from 'next/image';
import hero_image from '../../public/images/2.jpeg';
import Container from '../ui/Container';
import Link from 'next/link';
import { motion } from 'framer-motion';

type HeroProps = {};

const motionImage = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
  hidden: { opacity: 0, y: 100 },
};

const typingContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};
const typingText = {
  hidden: { opacity: 0, y: '-20px' },
  show: {
    opacity: 1,
    y: '0',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className='flex flex-col gap-6 items-center lg:py-28 lg:px-12'>
      <Container>
        <div className='flex flex-col xl:grid grid-cols-8 grid-rows-4'>
          <motion.figure
            initial='hidden'
            animate='visible'
            variants={motionImage}
            className='relative mb-8 xl:mb-0 col-span-4 row-span-3 col-start-2 row-start-2 grayscale hover:grayscale-0 transition duration-300'>
            <Image
              priority
              src={hero_image}
              alt='Harel Panker - Fron end developer'
            />
          </motion.figure>
          <h1 className='static xl:absolute mix-blend-multiply z-10 text-7xl font-serif md:text-9xl xl:text-[16rem] 2xl:text-[22rem] font-bold'>
            <motion.span
              variants={typingContainer}
              initial='hidden'
              animate='show'>
              {Array.from('Hello').map((word, i) => (
                <motion.span key={i} variants={typingText}>
                  {word}
                </motion.span>
              ))}
            </motion.span>
            <motion.span className='block xl:ml-36 whitespace-nowrap'>
              I&apos;m Harel
            </motion.span>
          </h1>
          <div className='row-start-4 col-start-6 col-span-3 flex flex-col xl:p-6 max-w-xl justify-end items-start gap-3 text-xl md:text-2xl font-medium'>
            <p>
              Front-end engenir, working as a freelance with leading agencies
              and startups to develop products that help meet users&apos; needs.
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
