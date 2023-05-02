'use client';

import { FC } from 'react';
import { useAtom } from 'jotai';
import { step, success } from '@/store/form-store';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Container from '../ui/Container';

type FormProps = {};

const Form: FC<FormProps> = ({}) => {
  const [state] = useAtom(step);
  const [isSuccess] = useAtom(success);

  return (
    <section className='relative z-10 text-slate-900 py-10 px-5'>
      <Container size='md'>
        {' '}
        <div className='max-w-3xl'>
          {!isSuccess ? (
            <>
              {state === 1 ? <Step1 /> : null}
              {state === 2 ? <Step2 /> : null}
              {state === 3 ? <Step3 /> : null}
            </>
          ) : null}
        </div>
      </Container>
    </section>
  );
};

export default Form;
