import { FC } from 'react';
import Container from '../ui/Container';
import MainButton from '../ui/MainButton';

type CTAProps = {};

const CTA: FC<CTAProps> = ({}) => {
  return (
    <section className='px-5 py-20 lg:py-32'>
      <Container>
        <div className='p-6 lg:p-10 text-lg rounded-2xl bg-[#111111] border border-[#333333] flex flex-col justify-between items-center gap-10 text-center'>
          <div>
            <h2 className='text-5xl md:text-8xl font-serif font-semibold mb-2'>
              Get in touch
            </h2>
            <p>Looking for a Frontend developer? Let&lsquo;s talk</p>
          </div>
          <MainButton link='/contact' text='Reach out' />
        </div>
      </Container>
    </section>
  );
};

export default CTA;
