import Hero from '@/components/recommendations/Hero';
import List from '@/components/recommendations/List';
import Container from '@/components/ui/Container';
import Gradient from '@/components/ui/Gradient';

import { getRecommendations } from '@/services';

export const metadata = {
  title: 'Recommendations',
  description: 'Some of what my clients have to say',
  metadataBase: new URL('https://www.panker.dev/recommendations'),
  openGraph: {
    title: 'Recommendations',
    description: 'Some of what my clients have to say',
    url: 'https://www.panker.dev/recommendations',
  },
  twitter: {
    title: 'Recommendations',
    description: 'Some of what my clients have to say',
  },
};

const getData = async () => {
  const recommendations = (await getRecommendations()) || [];
  return recommendations;
};

export default async function Page() {
  const data = await getData();

  return (
    <div className='flex flex-col pt-16 md:pt-36 relative'>
      <Gradient gradientType='type-2' />
      <div className='flex flex-col gap-10 lg:gap-24 relative z-20'>
        <Hero />
        <section>
          <Container>
            <List data={data} />
          </Container>
        </section>
      </div>
    </div>
  );
}
