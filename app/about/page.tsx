import Gradient from '@/components/ui/Gradient';
import CTA from '@/components/layout/CTA';
import Hero from '@/components/About/Hero';

export default async function Page() {
  return (
    <div className='min-h-screen flex flex-col pt-28 md:pt-36 relative'>
      <Gradient gradientType='type-3' />
      <div className='flex flex-col gap-10 lg:gap-24'>
        <Hero />
      </div>
      <CTA />
    </div>
  );
}
