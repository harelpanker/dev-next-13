'use client';

import { FC, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import isOpen from '@/store/nav-store';
import pagePath from '@/store/path-store';

type MobileButtonProps = {};

const MobileButton: FC<MobileButtonProps> = ({}) => {
  const pathname = usePathname();
  const [open, setOpen] = useAtom(isOpen);
  const [path, setPath] = useAtom(pagePath);

  useEffect(() => {
    setPath(pathname);
  }, [pathname, setPath]);

  useEffect(() => {
    if (path !== pathname) {
      setOpen(false);
    }
  }, [pathname, setOpen, path]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label={`${open ? 'close' : 'open'} menu`}
        type='button'
        className='flex flex-col w-6 h-6 lg:hidden justify-around'>
        <div
          className={`w-full h-px transition bg-slate-900 ${
            open ? '-rotate-45 translate-y-[6px]' : 'rotate-0 translate-y-[2px]'
          }`}></div>
        <div
          className={`w-full h-px transition bg-slate-900 ${
            open
              ? 'rotate-45 -translate-y-[6px]'
              : 'rotate-0 -translate-y-[2px]'
          }`}></div>
      </button>
    </>
  );
};

export default MobileButton;
