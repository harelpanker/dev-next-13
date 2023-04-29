import { FC } from 'react';
import Link from 'next/link';

type LinkListDesktopProps = {};

const LinkListDesktop: FC<LinkListDesktopProps> = ({}) => {
  return (
    <ul className='flex lg:gap-2 font-medium flex-col lg:flex-row gap-8 text-3xl lg:text-base'>
      <li>
        <Link
          href='/work'
          className='px-3 py-2 transition-all duration-500 opacity-80 hover:opacity-100'>
          Work
        </Link>
      </li>
      <li>
        <Link
          href='/about'
          className='px-3 py-2 transition-all duration-500 opacity-80 hover:opacity-100'>
          About
        </Link>
      </li>
      <li>
        <Link
          href='/recommendations'
          className='px-3 py-2 transition-all duration-500 opacity-80 hover:opacity-100'>
          Recommendations
        </Link>
      </li>
      <li className='mt-10 lg:mt-0'>
        <Link
          href='/contact'
          className='px-7 py-3 transition-all duration-500 lg:opacity-100 hover:opacity-80 lg:ml-5 bg-slate-900 rounded-full text-slate-50'>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default LinkListDesktop;
