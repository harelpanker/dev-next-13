import Hero from '@/components/About/Hero';
import Images from '@/components/About/Images';
import Gradient from '@/components/ui/Gradient';

export default async function Page() {
  return (
    <div className='flex flex-col pt-16 md:pt-36 relative'>
      <Gradient gradientType='type-3' />
      <div className='flex flex-col gap-10 lg:gap-24'>
        <Hero />
        <Images />
      </div>
    </div>
  );
}
