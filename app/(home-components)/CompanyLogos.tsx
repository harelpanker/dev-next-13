import Image from 'next/image';

import { logosData } from '@/utils/company_logos';

const CompanyLogos = () => {
  return (
    <section className='mt-20 md:mt-28 flex flex-col gap-4 items-center'>
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
                className='md:w-24 max-h-[36px] w-20'
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompanyLogos;
