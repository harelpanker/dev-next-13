import { FC } from 'react';
import Form from '@/components/contact/Form';
import Hero from '@/components/contact/Hero';
import Gradient from '@/components/ui/Gradient';

type pageProps = {};

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