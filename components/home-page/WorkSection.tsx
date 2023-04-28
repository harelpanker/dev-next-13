import Container from '../ui/Container';
import MainButton from '../ui/MainButton';
import TypographyH2 from '../ui/TypographyH2';
import { getWork } from '@/services';

const getData = async () => {
  const list = (await getWork()) || [];

  const workList = list.filter((item: { isHome: boolean }) => item.isHome);
  // [
  //   {
  //     id: 'clh0wbbgz0ci00bjwcgzy80kl',
  //     title: 'Yonivers',
  //     description: 'Insurance | Simple, Rapide, Facile',
  //     isHome: true,
  //     link: 'https://app.yonivers.com/mrh/1',
  //     tags: [ [Object], [Object] ]
  //   }
  // ]

  return workList;
};

export default async function WorkSection() {
  const data = await getData();

  return (
    <section className='flex flex-col gap-6 items-center lg:py-28 lg:px-12'>
      <Container>
        <div className='flex flex-col items-start gap-4'>
          <TypographyH2 text='Selected work' />
          <ul>
            <li></li>
          </ul>
          <MainButton link='/work' text='See all' />
        </div>
      </Container>
    </section>
  );
}
