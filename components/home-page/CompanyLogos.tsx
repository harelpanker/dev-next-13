import { FC } from 'react';
import { logosData } from '@/public/lib/company_logos';
import Image from 'next/image';

type CompanyLogosProps = {};

const CompanyLogos: FC<CompanyLogosProps> = ({}) => {
  return (
    <div className='mt-20 md:mt-28 flex flex-col gap-4 items-center'>
      <h2 className='md:text-2xl font-medium opacity-80'>
        I&apos;m proud of working with
      </h2>
      <ul className='flex flex-wrap justify-center items-center gap-5 md:gap-10'>
        {logosData.map((logo) => (
          <li key={logo.alt}>
            <a target='_blank' rel='noopener noreferrer' href={logo.href}>
              <Image
                src={logo.src}
                alt={logo.alt}
                className='md:w-20 md:max-h-[32px] max-h-[28px] w-16'
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
