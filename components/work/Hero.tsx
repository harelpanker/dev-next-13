import { FC } from 'react';
import Container from '../ui/Container';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section>
      <Container size='md'>
        <div className='flex flex-col gap-8 lg:gap-56 justify-between'>
          <h1 className='text-7xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700'>
            My Work
          </h1>
          <div
            style={{ lineHeight: 1.625 }}
            className='text-2xl md:text-6xl font-medium flex flex-col gap-3 md:gap-8'>
            <p>
              In the past few years, I have collaborated with numerous clients
              on a{' '}
              <strong className='font-semibold'>
                diverse range of projects.
              </strong>
            </p>
            <p>
              Currently, my primary area of focus lies in front-end development,
              with a{' '}
              <strong className='font-semibold'>
                particular emphasis on utilizing React/NextJS.
              </strong>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
