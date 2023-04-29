import Image from 'next/image';
import Container from '../ui/Container';
import { getRecommendations } from '@/services';

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
      <Container>
        <div className='container max-w-7xl mx-auto flex flex-col gap-6'>
          <blockquote className='text-3xl lg:text-5xl font-medium italic leading-relaxed'>
            {data[0].quote}
          </blockquote>
          <a
            href={data[0].linkedin}
            target='_blank'
            rel='noopener'
            className='flex items-center gap-5'>
            <Image
              className='rounded-full p-1 border border-slate-900/50 w-24 h-24 lg:w-auto lg:h-auto'
              src={data[0].profileImage.url}
              alt={data[0].name}
              width={180}
              height={180}
            />
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
