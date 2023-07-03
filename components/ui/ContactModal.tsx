import { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { personName, success, step } from '@/store/form-store';
import Step1 from '../contact/Step1';
import Step2 from '../contact/Step2';
import Step3 from '../contact/Step3';
import { useAtom } from 'jotai';

type ContactModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const ContactModal: FC<ContactModalProps> = ({ isOpen, closeModal }) => {
  const [name] = useAtom(personName);
  const [isSuccess] = useAtom(success);
  const [state] = useAtom(step);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='fixed z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-theme_black/50 backdrop-blur' />
        </Transition.Child>

        <div className='fixed inset-0 flex items-center justify-center overflow-y-auto'>
          <div className='min-h-full flex w-full p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='mx-auto w-full max-w-lg transform overflow-hidden rounded-2xl border border-theme_white/50 bg-theme_black p-6 text-left align-middle text-theme_white shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='mb-10 font-serif text-6xl font-bold'>
                  {!isSuccess ? 'Contact me' : `Thank you ${name}!`}
                </Dialog.Title>
                {!isSuccess ? (
                  <>
                    {state === 1 ? <Step1 /> : null}
                    {state === 2 ? <Step2 /> : null}
                    {state === 3 ? <Step3 /> : null}
                  </>
                ) : (
                  <div>I will be back to you in the next work day</div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
