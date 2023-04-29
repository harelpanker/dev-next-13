import { FC } from 'react';

type TypographyH2Props = {
  text: string;
};

const TypographyH2: FC<TypographyH2Props> = (props) => {
  const { text } = props;
  return (
    <h2 className='text-5xl md:text-8xl xl:text-9xl font-semibold font-serif'>
      {text}
    </h2>
  );
};

export default TypographyH2;
