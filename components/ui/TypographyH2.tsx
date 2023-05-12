'use client';
import { FC, useEffect } from 'react';
import { inView, animate } from 'motion';

type TypographyH2Props = {
  text: string;
};

const TypographyH2: FC<TypographyH2Props> = (props) => {
  const { text } = props;

  useEffect(() => {
    inView('h2', (info) => {
      const controls = animate(
        info.target,
        { opacity: [0, 1], y: ['20%', '0%'] },
        { delay: 0.5, duration: 1, easing: [0.17, 0.55, 0.55, 1] }
      );
      return (leaveInfo) => controls.stop();
    });
  }, []);

  return (
    <h2 className='text-5xl md:text-8xl xl:text-9xl font-semibold font-serif'>
      {text}
    </h2>
  );
};

export default TypographyH2;
