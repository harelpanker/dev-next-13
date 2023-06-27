'use client';
import { FC } from 'react';
import { FileText } from 'lucide-react';

import { useWindowScroll } from '@mantine/hooks';

type CvButtonProps = {};

const CvButton: FC<CvButtonProps> = ({}) => {
  const [scroll] = useWindowScroll();
  return (
    <a
      className={`${
        scroll.y > 100
          ? 'opacity-100 scale-100 -translate-y-6'
          : 'opacity-0 scale-75 translate-y-0'
      } bg-theme_white text-theme_black transition duration-500 fixed z-50 whitespace-pre top-auto left-auto bottom-0 right-5 xl:right-[5vw] font-medium flex items-center rounded-full p-4`}
      href='https://dub.sh/harel-cv'
      target='_blank'
      download='Harel Panker CV - 2023'
      aria-label='Download CV'
      rel='noopener noreferrer'>
      <FileText size={24} />
    </a>
  );
};

export default CvButton;
