'use client';
import { FC, useEffect } from 'react';
import Link from 'next/link';
import { animate, inView, stagger } from 'motion';

type MainButtonProps = {
  link: string;
  text: string;
};

const MainButton: FC<MainButtonProps> = (props) => {
  const { link, text } = props;

  useEffect(() => {
    inView('.main_button', (info) => {
      const controls = animate(
        info.target,
        { opacity: [0, 1], y: ['-2rem', '0rem'] },
        {
          duration: 1,
          easing: [0.17, 0.55, 0.75, 1],
        }
      );
      return (leaveInfo) => controls.stop();
    });
  }, []);

  return (
    <Link
      className='main_button px-8 py-3 relative flex gap-2 text-center justify-center font-medium group text-xl items-center text-slate-900 transition hover:text-slate-200 border border-slate-900/75 rounded-full overflow-hidden'
      href={link}>
      <span className='relative z-20'>{text}</span>
      <span className='absolute z-10 w-full h-full bg-slate-900 inset-0 top-0 left-0 translate-y-full group-hover:translate-y-0 transition'></span>
    </Link>
  );
};

export default MainButton;
