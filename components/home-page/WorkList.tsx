'use client';

import { FC, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useViewportSize } from '@mantine/hooks';
import { animate, inView, stagger } from 'motion';

type WorkListProps = {
  data: {
    id: string;
    title: string;
    description: string;
    isHome: boolean;
    link: string;
    tags: { id: string; name: string }[];
  }[];
};

const WorkList: FC<WorkListProps> = ({ data }) => {
  const { width } = useViewportSize();

  useEffect(() => {
    inView('.li_inner', (info) => {
      const controls = animate(
        info.target,
        { opacity: [0, 1], y: ['20%', '0%'] },
        {
          delay: stagger(0.5, { easing: 'ease-out' }),
          duration: 1,
          easing: [0.17, 0.55, 0.75, 1],
        }
      );
      return (leaveInfo) => controls.stop();
    });
  }, []);

  return (
    <ul className='flex flex-col'>
      {data.map((item) => (
        <li key={item.id}>
          <a
            className='group py-6 lg:py-20 flex flex-col gap-2 md:gap-5'
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'>
            <div className='li_inner'>
              <div className='flex items-center relative'>
                <ArrowRight
                  size={width < 768 ? 30 : 50}
                  className='xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:left-0 xl:inset-0 xl:opacity-0 transition duration-300 group-hover:opacity-100'
                />
                <h3 className='text-4xl md:text-7xl font-medium transition duration-300 group-hover:translate-x-16'>
                  {item.title}
                </h3>
              </div>

              <p className='text-lg lg:text-2xl pl-8 md:pl-14 xl:pl-0'>
                {item.description}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default WorkList;
