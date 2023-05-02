'use client';
import { FC } from 'react';
import Container from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { useViewportSize } from '@mantine/hooks';

type ListProps = {
  data: {
    id: string;
    title: string;
    link: string;
    description: string;
    tags: { id: string; tagName: string }[];
  }[];
};

const List: FC<ListProps> = ({ data }) => {
  const { width } = useViewportSize();

  return (
    <section>
      <Container size='md'>
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
                    <div className='flex gap-5 items-end transition duration-300 group-hover:translate-x-16'>
                      <h2 className='text-3xl md:text-7xl font-medium'>
                        {item.title}
                      </h2>
                      <ul className='grid grid-flow-col text-xs lg:text-base divide-x'>
                        {item.tags.map((i) => (
                          <li
                            className='first:pl-0 first:ml-0 pl-2 ml-2'
                            key={i.id}>
                            {i.tagName}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className='text-lg lg:text-2xl pl-8 md:pl-14 xl:pl-0'>
                    {item.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default List;
