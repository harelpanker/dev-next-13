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
      className={`antialiased text-slate-50 bg-black ${
        open ? 'h-screen overflow-hidden' : ''
      }`}>
      {children}
    </body>
  );
};

export default Body;
