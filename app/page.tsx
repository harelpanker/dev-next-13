import Hero from '@/components/home-page/Hero';
import RecommendationSection from '@/components/home-page/RecommendationSection';
import WorkSection from '@/components/home-page/WorkSection';
import CvButton from '@/components/layout/CvButton';

export default function Home() {
  return (
    <div className='flex flex-col justify-center relative gap-32 lg:gap-0 py-12 lg:py-20'>
      {/* hero */}
      <Hero />
      {/* companys logos */}
      {/* about */}
      {/* recommendations */}
      {/* cta */}
    </div>
  );
}
