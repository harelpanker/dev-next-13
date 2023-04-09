import { FC } from 'react';
import Image from 'next/image';

type ListProps = {
  data: {
    id: string;
    name: string;
    position: string;
    linkedin: string;
    quote: string;
    profileImage: { url: string; width: number; height: number };
  }[];
};

const List: FC<ListProps> = ({ data }) => {
  return (
    <section className='py-12'>
      <ul className='flex flex-col gap-20'>
        {data.map((item) => (
          <li key={item.id}>
            <blockquote>
              <p className='font-serif text-2xl lg:text-4xl font-medium text-slate-50/80 mb-8'>
                {item.quote}
              </p>
              <div className='flex items-center gap-5'>
                <Image
                  className='rounded-full p-1 border border-slate-50/50 w-24 h-24 lg:w-auto lg:h-auto'
                  src={item.profileImage.url}
                  alt={item.name}
                  width={120}
                  height={120}
                />
                <div>
                  <h2 className='font-bold text-xl'>{item.name}</h2>
                  <p className='text-slate-50/90'>{item.position}</p>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default List;
