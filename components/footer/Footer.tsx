'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

import { FC } from 'react';
import Marquee from 'react-fast-marquee';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  const pathname = usePathname();

  return (
    <footer className='pb-10 pt-[10vh] lg:pt-[15vh] flex flex-col gap-6 relative z-20 bg-slate-50'>
      <ul className='flex flex-row gap-4 justify-center items-center font-medium text-base'>
        <li>
          <Link
            href='/work'
            className='px-3 py-2 transition-all duration-500 opacity-80 hover:opacity-100'>
            Work
          </Link>
        </li>
        <li>
          <Link
            href='/recommendations'
            className='px-3 py-2 transition-all duration-500 opacity-80 hover:opacity-100'>
            Recommendations
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='px-3 py-2 transition-all duration-500 opacity-80 hover:opacity-100'>
            About
          </Link>
        </li>
      </ul>

      {pathname !== '/contact' ? (
        <>
          <Marquee
            gradient={false}
            className='w-full py-4 text-2xl md:text-4xl border-t-2 border-b-2 border-slate-900/50 uppercase font-medium flex gap-3'>
            Let&lsquo;s work together — Get in touch — Let&lsquo;s work together
            — Get in touch — Let&lsquo;s work together — Get in touch —
            Let&lsquo;s work together — Get in touch
          </Marquee>

          <div className='flex w-full justify-center'>
            <Link
              className='uppercase flex gap-1 items-center relative group overflow-hidden'
              href='/contact'>
              Drop me a line{' '}
              <ArrowRight className='font-light text-slate-900/80 -rotate-45 transition group-hover:rotate-0 w-4' />
              <div className='absolute w-full inset-0 top-auto h-px bg-slate-900 transition group-hover:-translate-x-full'></div>
              <div className='absolute w-full inset-0 top-auto h-px bg-slate-900/70 translate-x-full transition group-hover:translate-x-0'></div>
            </Link>
          </div>
        </>
      ) : null}
      <div className='w-full uppercase font-medium flex justify-center items-center gap-8'>
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
    </footer>
  );
};

export default Footer;
