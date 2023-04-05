import { FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type SocialMediaProps = {};

const SocialMedia: FC<SocialMediaProps> = ({}) => {
  return (
    <ul className='text-slate-50/80 flex gap-9 lg:gap-6 items-center'>
      <li>
        <a href='#'>
          <FaGithub className='w-5 h-5 hover:text-slate-50 transition duration-500' />
        </a>
      </li>
      <li>
        <a href='#'>
          <FaLinkedin className='w-5 h-5 hover:text-slate-50 transition duration-500' />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
