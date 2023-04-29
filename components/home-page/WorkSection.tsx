import Container from '../ui/Container';
import MainButton from '../ui/MainButton';
import TypographyH2 from '../ui/TypographyH2';
import { getWork } from '@/services';
import WorkList from './WorkList';

const getData = async () => {
  const list = (await getWork()) || [];

  const workList = list.filter((item: { isHome: boolean }) => item.isHome);

  return workList;
};

export default async function WorkSection() {
  const data = await getData();

  return (
    <section className='flex flex-col gap-6 items-center lg:py-28 lg:px-12'>
      <Container>
        <div className='flex flex-col items-start gap-10 md:gap-20'>
          <TypographyH2 text='Selected work' />
          <WorkList data={data} />
          <MainButton link='/work' text='View all' />
        </div>
      </Container>
    </section>
  );
}
