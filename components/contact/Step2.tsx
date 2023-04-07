'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { yupResolver } from '@hookform/resolvers/yup';
import { step, personEmail } from '@/store/form-store';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Email is not valid')
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
      <input placeholder='Email' {...register('email')} />
      {errors.email ? (
        <p className='text-slate-50'>{errors.email.message}</p>
      ) : null}
      <button className='relative z-10 p-5 text-slate-50' type='submit'>
        Next {'->'}
      </button>
    </form>
  );
};

export default Step2;
