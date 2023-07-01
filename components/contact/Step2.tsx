'use client';

import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { yupResolver } from '@hookform/resolvers/yup';
import { step, personEmail } from '@/store/form-store';
import * as yup from 'yup';

const emailRegExp = /^\S+@\S+\.\S+$/;

const schema = yup
  .object({
    email: yup
      .string()
      .email('Email must be a valid email')
      .matches(emailRegExp, 'Email is not valid')
      .required('Email is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

type Step2Props = {};

const Step2: FC<Step2Props> = ({}) => {
  const [, setState] = useAtom(step);
  const [, setPersonEmail] = useAtom(personEmail);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    setPersonEmail(data.email);
    setState(3);
  };

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-6'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-slate-50'>
          Email
        </label>
        <input
          placeholder='Email'
          {...register('email')}
          name='email'
          type='text'
          id='email'
          className='block w-full px-4 py-2 text-theme_black focus:border-slate-300 text-lg font-medium border-slate-300 rounded-lg bg-slate-50'
        />
        {errors.email ? (
          <p className='text-red-500 mt-2 text-lg font-medium'>
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className='flex w-full justify-start'>
        <button
          className='text-2xl font-medium border-b-2 border-theme_white hover:border-theme_black/0 transition duration-500'
          type='submit'>
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
