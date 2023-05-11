import { FileText } from 'lucide-react';
import { FC } from 'react';

type CvButtonProps = {};

const CvButton: FC<CvButtonProps> = ({}) => {
  return (
    <a
      className='fixed z-50 whitespace-pre top-auto left-auto bottom-5 right-5 xl:right-[5vw] font-medium flex gap-2 items-center rounded-full px-4 py-1 bg-purple-300 text-purple-700 transition hover:bg-purple-700 hover:text-slate-50'
      href='https://drive.google.com/file/d/1DpwfkAxD1QdB239tj2nq_GFGR3kz5uwl/view?usp=share_link'
      target='_blank'
      download='Harel Panker CV - 2021'
      rel='noopener noreferrer'>
      <FileText size={16} />

      <span>Download CV</span>
    </a>
  );
};

export default CvButton;
