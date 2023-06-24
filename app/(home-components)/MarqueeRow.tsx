import Image from 'next/image';
import { logosData } from '../../utils/about_logos';

const MarqueeRow = ({}) => {
  return (
    <>
      {logosData.map((item) => (
        <div
          className='flex items-center justify-center rounded-full bg-white w-16 h-16 mr-2'
          key={item.alt}>
          <Image src={item.src} alt={item.alt} />
        </div>
      ))}
    </>
  );
};

export default MarqueeRow;
