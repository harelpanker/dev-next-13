import About from './(home-components)/About';
import CTA from './(home-components)/CTA';
import Hero from './(home-components)/Hero';
import RecommendationSection from './(home-components)/RecommendationSection';
import WorkSection from './(home-components)/WorkSection';

export default function Home() {
  return (
    <div className='relative flex flex-col justify-center pt-12 lg:gap-0 lg:pt-20'>
      <Hero />
      <div className='relative'>
        <div className='relative z-20 grid gap-32 sm:gap-40 md:gap-48 lg:gap-64'>
          <About />
          <WorkSection />
          <RecommendationSection />
          <CTA />
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
          className='absolute inset-0 z-10'></div>
      </div>
    </div>
  );
}
