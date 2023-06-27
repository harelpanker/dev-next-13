import { FC } from 'react';

type TypographyH2Props = {
  text: string;
};

const TypographyH2: FC<TypographyH2Props> = (props) => {
  const { text } = props;
  return (
    <h2 className='text-4xl md:text-6xl xl:text-7xl font-semibold font-serif'>
      {text}
    </h2>
  );
};

export default TypographyH2;
