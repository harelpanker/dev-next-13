import { FC } from 'react';
import Form from '@/components/contact/Form';
import Hero from '@/components/contact/Hero';
import Gradient from '@/components/ui/Gradient';

type pageProps = {};

export const metadata = {
  title: 'Contact me',
  description: 'Feel free to drop me a line',
  metadataBase: new URL('https://www.panker.dev/contact'),
  openGraph: {
    title: 'Contact me',
    description: 'Feel free to drop me a line',
    url: 'https://www.panker.dev/contact',
  },
  twitter: {
    title: 'Contact me',
    description: 'Feel free to drop me a line',
  },
};

const page: FC<pageProps> = ({}) => {
  return (
    <div className='flex flex-col pt-16 md:pt-36 relative'>
      <Gradient gradientType='type-4' />
      <div className='flex flex-col gap-10 lg:gap-24'>
        <Hero />
        <Form />
      </div>
    </div>
  );
};

export default page;
