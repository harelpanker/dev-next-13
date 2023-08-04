import Image from 'next/image';

import { logosData } from '@/utils/company_logos';

const CompanyLogos = () => {
  return (
    <section className='mt-20 flex flex-col items-center gap-4 md:mt-28'>
      <h2 className='font-medium opacity-80 md:text-2xl'>
        I am proud to be working with
      </h2>
      <ul className='flex flex-wrap items-center justify-center gap-5 lg:grid lg:grid-flow-col lg:gap-10'>
        {logosData.map((logo) => (
          <li key={logo.alt}>
            <a target='_blank' rel='noopener noreferrer' href={logo.href}>
              <Image
                src={logo.src}
                alt={logo.alt}
                className='h-full max-h-[36px] w-20 md:w-28'
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompanyLogos;
