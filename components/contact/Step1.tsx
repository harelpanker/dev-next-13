'use client';

import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { yupResolver } from '@hookform/resolvers/yup';
import { step, personName } from '@/store/form-store';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

type Step1Props = {};

const Step1: FC<Step1Props> = ({}) => {
  const [, setState] = useAtom(step);
  const [, setPersonName] = useAtom(personName);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    setPersonName(data.name);
    setState(2);
  };

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-6'>
        <label
          htmlFor='name'
          className='block mb-2 text-sm font-medium text-slate-50'>
          Your name
        </label>
        <input
          placeholder='Name'
          {...register('name')}
          name='name'
          type='text'
          id='name'
          className='block w-full p-4 text-slate-900 text-3xl lg:text-6xl font-medium border-b-4 border-slate-300 rounded-lg bg-slate-50 sm:text-md focus:ring-purple-500 focus:border-purple-500'
        />
        {errors.name ? (
          <p className='text-red-500 mt-2 text-lg font-medium'>
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div className='flex w-full justify-start'>
        <button
          className='text-4xl lg:text-6xl font-medium border-b-4 border-slate-500 hover:border-slate-900 transition duration-500'
          type='submit'>
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1;
