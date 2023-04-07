'use client';

import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import Container from '../ui/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import { step, success } from '@/store/form-store';
import * as yup from 'yup';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Email is not valid')
      .required('Email is required'),
    message: yup.string().required('Message is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

type FormProps = {};

const Form: FC<FormProps> = ({}) => {
  const [state] = useAtom(step);
  const [isSuccess] = useAtom(success);

  const { setFocus } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <section className='relative z-10 text-slate-900'>
      <Container>
        {!isSuccess ? (
          <>
            {state === 1 ? <Step1 /> : null}
            {state === 2 ? <Step2 /> : null}
            {state === 3 ? <Step3 /> : null}
          </>
        ) : (
          <div>
            <h2>Thanks you!</h2>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Form;
