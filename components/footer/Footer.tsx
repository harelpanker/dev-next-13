'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import Marquee from 'react-fast-marquee';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className='pb-10 pt-[15vh] flex flex-col gap-6'>
      <div className='w-full uppercase font-medium flex justify-center items-center gap-4'>
        <a
          target='_blank'
          rel='noopener'
          href='https://www.linkedin.com/in/panker-harel/'>
          Linkedin
        </a>
        <a target='_blank' rel='noopener' href='https://github.com/harelpanker'>
          GitHub
        </a>
        <a
          target='_blank'
          rel='noopener'
          href='mailto:harelpanker@protonmail.com'>
          Email
        </a>
      </div>

      <Marquee
        gradient={false}
        className='w-full py-4 text-2xl md:text-4xl border-t-2 border-b-2 border-white uppercase font-medium flex gap-3'>
        Let&lsquo;s work together — Get in touch — Let&lsquo;s work together —{' '}
        Get in touch — Let&lsquo;s work together — Get in touch — Let&lsquo;s
        work together — Get in touch
      </Marquee>

      <div className='flex w-full justify-center'>
        <Link
          className='uppercase flex gap-1 items-center relative group overflow-hidden'
          href='/contact'>
          Drop me a line{' '}
          <ArrowRight className='font-light text-white/80 -rotate-45 transition group-hover:rotate-0 w-4' />
          <div className='absolute w-full inset-0 top-auto h-px bg-white transition group-hover:-translate-x-full'></div>
          <div className='absolute w-full inset-0 top-auto h-px bg-slate-50/70 translate-x-full transition group-hover:translate-x-0'></div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
