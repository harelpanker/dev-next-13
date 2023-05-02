'use client';
import { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { useViewportSize } from '@mantine/hooks';

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

  return (
    <ul className='flex flex-col'>
      {data.map((item) => (
        <li key={item.id}>
          <a
            className='group'
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'>
            <div className='py-6 lg:py-20 flex flex-col gap-2 md:gap-5'>
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
