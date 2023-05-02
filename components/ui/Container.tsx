import { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  size?: 'md' | 'lg';
};

const Container: FC<ContainerProps> = ({ children, size }) => {
  return (
    <div
      className={`container mx-auto ${
        size === 'md' ? 'max-w-7xl' : 'max-w-screen-2xl'
      } w-full px-5 xl:px-0 relative z-20`}>
      {children}
    </div>
  );
};

export default Container;
