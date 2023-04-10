import Gradient from '@/components/ui/Gradient';
import Hero from '@/components/work/Hero';
import List from '@/components/work/List';
import { getWork } from '@/services';

export const metadata = {
  title: 'Some of my work',
  description: 'My day to day work',
  metadataBase: new URL('https://www.panker.dev/work'),
  openGraph: {
    title: 'Some of my work',
    description: 'My day to day work',
    url: 'https://www.panker.dev/work',
  },
  twitter: {
    title: 'Some of my work',
    description: 'My day to day work',
  },
};

const getData = async () => {
  const workList = (await getWork()) || [];
  return workList;
};

export default async function Page() {
  const data = await getData();
  return (
    <div className='flex flex-col pt-16 md:pt-36 relative'>
      <Gradient gradientType='type-2' />
      <div className='flex flex-col gap-10 lg:gap-24'>
        <Hero />
        <List data={data} />
      </div>
    </div>
  );
}
