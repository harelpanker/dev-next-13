import Hero from '@/components/About/Hero';
import Images from '@/components/About/Images';
import SkillsSection from '@/components/About/SkillsSection';
import CvButton from '@/components/layout/CvButton';

export const metadata = {
  title: 'About & Skills',
  description: 'Find more about me and my skill set',
  metadataBase: new URL('https://www.panker.dev/about'),
  openGraph: {
    title: 'About & Skills',
    description: 'Find more about me and my skill set',
    url: 'https://www.panker.dev/about',
  },
  twitter: {
    title: 'About & Skills',
    description: 'Find more about me and my skill set',
  },
};

export default async function Page() {
  return (
    <div className='flex flex-col gap-24 pt-16 md:pt-36 relative'>
      <Hero />
      <Images />
      <SkillsSection />

      <CvButton />
    </div>
  );
}
