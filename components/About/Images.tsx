import { FC } from 'react';
import Image from 'next/image';

import image_1 from '../../public/images/1.jpeg';
import image_2 from '../../public/images/2.jpeg';
import image_3 from '../../public/images/3.jpeg';
import image_4 from '../../public/images/4.jpeg';
import image_5 from '../../public/images/5.jpeg';

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const imagesArray = [
  {
    id: 1,
    src: image_1,
    alt: '',
    priority: false,
  },
  {
    id: 2,
    src: image_2,
    alt: '',
    priority: false,
  },
  {
    id: 5,
    src: image_5,
    alt: '',
    priority: false,
  },
  {
    id: 4,
    src: image_4,
    alt: '',
    priority: false,
  },
  {
    id: 3,
    src: image_3,
    alt: '',
    priority: false,
  },
];

type ImagesProps = {};

const Images: FC<ImagesProps> = ({}) => {
  return (
    <section className='w-full overflow-hidden'>
      <ul className='flex items-center justify-center gap-4 lg:gap-7'>
        {imagesArray.map((item) => (
          <li className='w-[40vw] shrink-0 lg:w-auto lg:shrink' key={item.id}>
            <Image
              src={item.src}
              alt={item.alt}
              priority={item.priority}
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Images;
