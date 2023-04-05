'use client';

import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
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
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </body>
  );
};

export default Body;
