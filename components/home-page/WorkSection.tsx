import Container from '../ui/Container';
import MainButton from '../ui/MainButton';
import TypographyH2 from '../ui/TypographyH2';
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
