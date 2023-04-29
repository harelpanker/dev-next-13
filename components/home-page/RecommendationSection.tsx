import Image from 'next/image';
import Container from '../ui/Container';
import { getRecommendations } from '@/services';
import { Linkedin } from 'lucide-react';

const getData = async () => {
  const recommendations = (await getRecommendations()) || [];
  const sortedRecommendations = recommendations.filter(
    (item: { name: string }) => item.name === 'Elizabeth Cohen'
  );
  return sortedRecommendations;
};

export default async function RecommendationSection() {
  const data = await getData();

  return (
    <section className='flex flex-col gap-6 items-center lg:py-28 lg:px-12'>
      <Container size='md'>
        <div className='flex flex-col gap-6'>
          <blockquote
            className='text-3xl lg:text-5xl font-medium italic'
            style={{ lineHeight: 1.65 }}>
            {data[0].quote}
          </blockquote>
          <a
            href={data[0].linkedin}
            target='_blank'
            rel='noopener'
            className='group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5'>
            <div className='relative p-1 border border-slate-900/50 rounded-full shrink-0'>
              <Image
                className='rounded-full relative z-20 w-24 h-24 lg:w-auto lg:h-auto'
                src={data[0].profileImage.url}
                alt={data[0].name}
                width={180}
                height={180}
              />
              <div className='opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center text-slate-50 w-24 h-24 lg:w-[100px] lg:h-[100px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/50 z-20'>
                <Linkedin size={32} />
              </div>
            </div>
            <div>
              <h2 className='font-semibold text-2xl lg:text-3xl'>
                {data[0].name}
              </h2>
              <p className='text-slate-900/90 text-lg lg:text-2xl'>
                {data[0].position}
              </p>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}
