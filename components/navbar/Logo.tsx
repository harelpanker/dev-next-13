import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../public/logo.svg';

type LogoProps = {};

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link className='font-semibold' href='/'>
      <Image
        className='max-h-[45px] w-auto'
        src={logo}
        alt='Site logo - Harel Panker front end developer'
      />
    </Link>
  );
};

export default Logo;
