import { FC } from 'react';
import Container from '@/components/ui/Container';
import { ExternalLink } from 'lucide-react';

type ListProps = {
  data: {
    id: string;
    title: string;
    link: string;
    tags: { id: string; tagName: string }[];
  }[];
};

const List: FC<ListProps> = ({ data }) => {
  return (
    <section>
      <Container>
        <ul className='relative z-20 w-full flex flex-col'>
          {data?.map((item) => (
            <li
              className='group relative text-lg font-light border-t border-slate-50/50 last:border-b overflow-hidden'
              key={item.id}>
              <a
                className='relative flex flex-col gap-3 z-20 md:py-12 py-8 px-5 w-full md:grid md:grid-cols-3 group-hover:text-slate-900 transition duration-500'
                href={item.link}
                target='_blank'
                rel='nooppener'>
                <h3 className='uppercase text-lg'>{item.title}</h3>
                <ul className='flex gap-3'>
                  {item.tags.map((i) => (
                    <li
                      className='py-1 px-3 rounded-full border group-hover:text-slate-900 border-slate-50/50 text-sm group-hover:border-slate-900/50 transition duration-500'
                      key={i.id}>
                      {i.tagName}
                    </li>
                  ))}
                </ul>
                <div className='md:static absolute inset-0 top-auto left-auto right-2 bottom-2 flex justify-end items-center'>
                  <ExternalLink />
                </div>
              </a>
              <div className='absolute hidden lg:block z-10 bg-slate-50 w-full inset-0 h-[300%] transition-all duration-700 translate-y-1/3 group-hover:-translate-y-1/3'></div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default List;
