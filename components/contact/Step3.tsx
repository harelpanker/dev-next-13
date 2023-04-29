'use client';

import { FC, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAtom } from 'jotai';
import { yupResolver } from '@hookform/resolvers/yup';
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [, setSuccess] = useAtom(success);
  const [, setPersonMessage] = useAtom(personMessage);
  const [person] = useAtom(personName);
  const [userEmail] = useAtom(personEmail);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (buttonRef.current !== null) {
      buttonRef.current.disabled;
      buttonRef.current.style.opacity = '.5';
      buttonRef.current.style.pointerEvents = 'none';
    }
    fetch('https://formsubmit.co/ajax/harelpanker@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: person,
        email: userEmail,
        message: data.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccess(true);
        setPersonMessage(data.message);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setFocus('message');
  }, [setFocus]);

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
          className='block min-h-[270px] w-full p-4 text-slate-900 text-3xl lg:text-6xl font-medium border-b-4 border-slate-300 rounded-lg bg-slate-50 sm:text-md focus:ring-purple-500 focus:border-purple-500'
        />
        {errors.message ? (
          <p className='text-red-500 mt-2 text-lg font-medium'>
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className='flex w-full justify-start'>
        <button
          ref={buttonRef}
          className='text-4xl lg:text-6xl font-medium border-b-4 border-slate-500 hover:border-slate-900 transition duration-500'
          type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step3;
