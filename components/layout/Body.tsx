'use client';

import { FC, ReactNode } from 'react';
import { useAtom } from 'jotai';
import isOpen from '@/store/nav-store';

type BodyProps = {
  children: ReactNode;
};

const Body: FC<BodyProps> = ({ children }) => {
  const [open] = useAtom(isOpen);

  return (
    <body
      className={`antialiased bg-theme_black text-theme_white ${
        open ? 'h-screen overflow-hidden' : ''
      }`}>
      <div>{children}</div>
    </body>
  );
};

export default Body;
