import Gradient from '@/components/ui/Gradient';
import Hero from '@/components/work/Hero';
import List from '@/components/work/List';
import { getWork } from '@/services';

const getData = async () => {
  const workList = (await getWork()) || [];
  return workList;
};

export default async function Page() {
  const data = await getData();
  return (
    <div className='flex flex-col pt-28 md:pt-36 relative'>
      <Gradient gradientType='type-2' />
      <div className='flex flex-col gap-10 lg:gap-24'>
        <Hero />
        <List data={data} />
      </div>
    </div>
  );
}
