import { FC } from 'react';
import Container from '../ui/Container';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  return (
    <header>
      <Container>
        <div className='flex flex-col md:flex-row gap-3 justify-between'>
          <h1 className='font-serif text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400'>
            Work
          </h1>
          <div className='text-lg flex flex-col gap-2 w-full max-w-sm md:max-w-md'>
            <p>
              Over the course of recent years, I have collaborated with numerous
              clients on a diverse range of projects.
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
    </header>
  );
};

export default Hero;
