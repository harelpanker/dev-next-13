'use client';

import { FC } from 'react';
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
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    setPersonEmail(data.email);
    setState(3);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-6'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-slate-50'>
          Your name
        </label>
        <input
          placeholder='Email'
          {...register('email')}
          name='email'
          type='text'
          id='email'
          className='block w-full p-4 text-slate-900 border border-slate-300 rounded-lg bg-slate-50 sm:text-md focus:ring-purple-500 focus:border-purple-500'
        />
        {errors.email ? (
          <p className='text-red-500 mt-2'>{errors.email.message}</p>
        ) : null}
      </div>

      <button
        className='relative z-10 px-7 py-3 rounded text-slate-900 bg-slate-50 font-medium transition duration-300 hover:bg-slate-50/90'
        type='submit'>
        Next
      </button>
    </form>
  );
};

export default Step2;
