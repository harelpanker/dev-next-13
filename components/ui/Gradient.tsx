'use client';
import { FC } from 'react';

type GradientProps = {
  gradientType?: 'type-1' | 'type-2' | 'type-3' | 'type-4';
};

const Gradient: FC<GradientProps> = (props) => {
  const { gradientType = 'type-1' } = props;
  return (
    <div className='max-w-full absolute w-full h-[40vh] inset-0 top-0 left-0 overflow-hidden'>
      {gradientType === 'type-1' ? (
        <div
          className='w-full h-[40vh] gradiant_header'
          style={{
            background: `linear-gradient(to top,var(--geist-background-dark) 0,hsla(0,0%,100%,0) 100%),linear-gradient(90deg,rgb(var(--gradient-from-1,85 85 85)/.2) 0,rgb(var(--gradient-to-1,85 85 85)/.2) 100%)`,
          }}
        />
      ) : null}
      {gradientType === 'type-2' ? (
        <div
          className='w-full h-[40vh] gradiant_header'
          style={{
            background: `linear-gradient(to top,var(--geist-background-dark) 0,hsla(0,0%,100%,0) 100%),linear-gradient(90deg,rgb(var(--gradient-from-2,85 85 85)/.2) 0,rgb(var(--gradient-to-2,85 85 85)/.2) 100%)`,
          }}
        />
      ) : null}
      {gradientType === 'type-3' ? (
        <div
          className='w-full h-[40vh] gradiant_header'
          style={{
            background: `linear-gradient(to top,var(--geist-background-dark) 0,hsla(0,0%,100%,0) 100%),linear-gradient(90deg,rgb(var(--gradient-from-3,85 85 85)/.2) 0,rgb(var(--gradient-to-3,85 85 85)/.2) 100%)`,
          }}
        />
      ) : null}
      {gradientType === 'type-4' ? (
        <div
          className='w-full h-[40vh] gradiant_header'
          style={{
            background: `linear-gradient(to top,var(--geist-background-dark) 0,hsla(0,0%,100%,0) 100%),linear-gradient(90deg,rgb(var(--gradient-from-4,85 85 85)/.2) 0,rgb(var(--gradient-to-4,85 85 85)/.2) 100%)`,
          }}
        />
      ) : null}
    </div>
  );
};

export default Gradient;
