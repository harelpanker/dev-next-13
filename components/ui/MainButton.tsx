import { FC } from 'react';
import Link from 'next/link';

type MainButtonProps = {
  link: string;
  text: string;
};

const MainButton: FC<MainButtonProps> = (props) => {
  const { link, text } = props;
  return (
    <Link
      className='px-8 py-3 relative flex gap-2 text-center justify-center font-medium group text-xl items-center text-slate-900 transition hover:text-slate-200 border border-slate-900/75 rounded-full overflow-hidden'
      href={link}>
      <span className='relative z-20'>{text}</span>
      <span className='absolute z-10 w-full h-full bg-slate-900 inset-0 top-0 left-0 translate-y-full group-hover:translate-y-0 transition'></span>
    </Link>
  );
};

export default MainButton;
