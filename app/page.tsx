import Hero from '@/components/home-page/Hero';
import RecommendationSection from '@/components/home-page/RecommendationSection';
import WorkSection from '@/components/home-page/WorkSection';

export default function Home() {
  return (
    <div className='flex flex-col justify-center relative gap-32 lg:gap-0 py-12 lg:py-20'>
      <Hero />
      {/* https://beta.nextjs.org/docs/configuring/typescript#async-server-component-typescript-error */}
      {/* @ts-expect-error Async Server Component */}
      <WorkSection />
      {/* @ts-expect-error Async Server Component */}
      <RecommendationSection />
    </div>
  );
}
