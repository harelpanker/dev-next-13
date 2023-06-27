import { FC } from 'react';

type SectionIdProps = {
  id: string;
};

const SectionId: FC<SectionIdProps> = ({ id }) => {
  return (
    <div
      className='absolute -top-20 lg:-top-28 left-0 w-full h-p pointer-events-none'
      id={id}></div>
  );
};

export default SectionId;
