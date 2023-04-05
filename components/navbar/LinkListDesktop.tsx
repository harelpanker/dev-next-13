import { FC } from 'react';
import Link from 'next/link';

type LinkListDesktopProps = {};

const LinkListDesktop: FC<LinkListDesktopProps> = ({}) => {
  return (
    <ul className='flex lg:gap-2 font-medium flex-col lg:flex-row gap-6 text-2xl lg:text-base'>
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
          href='/contact'
          className='px-3 py-2 transition-all duration-500 opacity-80 hover:opacity-100'>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default LinkListDesktop;
