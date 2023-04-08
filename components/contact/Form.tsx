'use client';

import { FC } from 'react';
import { useAtom } from 'jotai';
import Container from '../ui/Container';
import { step, success } from '@/store/form-store';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

type FormProps = {};

const Form: FC<FormProps> = ({}) => {
  const [state] = useAtom(step);
  const [isSuccess] = useAtom(success);

  return (
    <section className='relative z-10 text-slate-900 py-10 px-5'>
      <div className='container mx-auto max-w-md'>
        {!isSuccess ? (
          <>
            {state === 1 ? <Step1 /> : null}
            {state === 2 ? <Step2 /> : null}
            {state === 3 ? <Step3 /> : null}
          </>
        ) : (
          <div className='text-white'>
            <h2>Thanks you!</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Form;
