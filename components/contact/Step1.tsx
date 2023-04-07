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
  const onSubmit1 = (data: FormData) => {
    setPersonName(data.name);
    setState(2);
  };

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit1)}>
      <input placeholder='Name' {...register('name')} />
      {errors.name ? (
        <p className='text-slate-50'>{errors.name.message}</p>
      ) : null}
      <button className='relative z-10 p-5 text-slate-50' type='submit'>
        Next {'->'}
      </button>
    </form>
  );
};

export default Step1;
