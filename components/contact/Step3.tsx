'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import {
  success,
  personMessage,
  personName,
  personEmail,
} from '@/store/form-store';
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
  const [person] = useAtom(personName);
  const [userEmail] = useAtom(personEmail);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const formData = {
      name: person,
      email: userEmail,
      message: data.message,
    };
    try {
      emailjs
        .send(
          'service_eippq17',
          'template_97gnqcf',
          formData,
          'user_STfBVK8y2ICUJEb9CbPIR'
        )
        .then(() => {
          setPersonMessage(data.message);
          setSuccess(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-6'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-slate-50'>
          How can I help you
        </label>
        <textarea
          placeholder='How can I help you and what is the best way to reach you'
          {...register('message')}
          name='message'
          id='message'
          className='block min-h-[124px] w-full p-4 text-slate-900 border border-slate-300 rounded-lg bg-slate-50 sm:text-md focus:ring-purple-500 focus:border-purple-500'
        />
        {errors.message ? (
          <p className='text-red-500 mt-2'>{errors.message.message}</p>
        ) : null}
      </div>

      <button
        className='relative z-10 px-7 py-3 rounded text-slate-900 bg-slate-50 font-medium transition duration-300 hover:bg-slate-50/90'
        type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Step3;
