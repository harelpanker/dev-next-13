import CvButton from '@/components/layout/CvButton';
import Hero from '@/components/recommendations/Hero';
import List from '@/components/recommendations/List';

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
    <div className='flex flex-col gap-10 lg:gap-24 pt-16 md:pt-36 relative'>
      <Hero />
      <List data={data} />
      <CvButton />
    </div>
  );
}
