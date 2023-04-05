import { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='container mx-auto max-w-5xl w-full px-5 xl:px-0 relative z-20'>
      {children}
    </div>
  );
};

export default Container;
