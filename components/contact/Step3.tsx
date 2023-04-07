'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { yupResolver } from '@hookform/resolvers/yup';
import { success, personMessage } from '@/store/form-store';
import * as yup from 'yup';

const schema = yup
  .object({
    message: yup.string().required('Message is required'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

type Step3Props = {};

const Step3: FC<Step3Props> = ({}) => {
  const [, setSuccess] = useAtom(success);
  const [, setPersonMessage] = useAtom(personMessage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setPersonMessage(data.message);
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        placeholder='How can I help you and what is the best way to reach you'
        {...register('message')}
      />
      {errors.message ? (
        <p className='text-slate-50'>{errors.message.message}</p>
      ) : null}
      <button className='relative z-10 p-5 text-slate-50' type='submit'>
        Submit {'->'}
      </button>
    </form>
  );
};

export default Step3;
