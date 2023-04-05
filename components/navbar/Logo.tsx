import { FC } from 'react';
import Link from 'next/link';

type LogoProps = {};

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link className='font-semibold' href='/'>
      panker.dev
    </Link>
  );
};

export default Logo;
