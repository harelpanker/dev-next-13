import Hero from '@/components/home-page/Hero';
import About from '@/components/home-page/About';
import WorkSection from '@/components/home-page/WorkSection';

export default function Home() {
  return (
    <div className='flex flex-col justify-center relative lg:gap-0 py-12 lg:py-20'>
      <Hero />
      <div className='relative'>
        <div className='relative grid gap-32 sm:gap-40 md:gap-48 lg:gap-64 z-20 pb-[50vh]'>
          <About />
          <WorkSection />
          {/* recommendations */}
          {/* cta */}
        </div>
        <div
          style={{
            backgroundSize: '20px 20px',
            backgroundImage:
              'linear-gradient(to right,#23262D 1px,transparent 1px),linear-gradient(to bottom,#23262D 1px,transparent 1px)',
            backgroundPosition: 'top center',
            imageRendering: 'pixelated',
            maskImage:
              'linear-gradient(to bottom,transparent,10%,white,90%,transparent)',
            WebkitMaskImage:
              'linear-gradient(to bottom,transparent,10%,white,90%,transparent)',
          }}
          className='absolute z-10 inset-0'></div>
      </div>
    </div>
  );
}
