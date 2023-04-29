'use client';
import { FC } from 'react';
import Container from '../ui/Container';
import { useAtom } from 'jotai';
import { personName, success } from '@/store/form-store';

type HeroProps = {};

const Hero: FC<HeroProps> = ({}) => {
  const [name] = useAtom(personName);
  const [isSuccess] = useAtom(success);

  return (
    <section>
      <Container size='md'>
        <div className='flex flex-col gap-8 items-start'>
          <h1 className='text-6xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700'>
            {!isSuccess ? 'Contact me' : `Thank you ${name}!`}
          </h1>
          <div className='text-2xl md:text-6xl w-full'>
            <p>{`${
              !isSuccess ? 'And ' : ''
            }I'll be back to you on the next business day`}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
