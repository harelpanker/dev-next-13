'use client';

import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import Container from '../ui/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  step,
  success,
  personName,
  personEmail,
  personMessage,
} from '@/store/form-store';
import * as yup from 'yup';
import Step1 from './Step1';
import Step2 from './Step2';

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
  const [state, setState] = useAtom(step);
  const [isSuccess, setIsSuccess] = useAtom(success);

  const {
    register,
    handleSubmit,

    setFocus,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onBlur',
  });
  const onSubmit1 = (data: FormData) => {
    console.log(data);
    setState(2);
    setFocus('email');
  };

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <section className='relative z-10 text-slate-900'>
      <Container>
        {!isSuccess ? (
          <>
            {/* step 1 */}
            {state === 1 ? <Step1 /> : null}
            {/* step 2 */}
            {state === 2 ? <Step2 /> : null}
            {/* step 3 */}
            {state === 3 ? (
              <div>
                <textarea {...register('message')} />
                <input type='submit' />
              </div>
            ) : null}
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
