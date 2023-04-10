import Hero from '@/components/About/Hero';
import Images from '@/components/About/Images';
import Gradient from '@/components/ui/Gradient';

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
    <div className='flex flex-col pt-16 md:pt-36 relative'>
      <Gradient gradientType='type-3' />
      <div className='flex flex-col gap-10 lg:gap-24'>
        <Hero />
        <Images />
      </div>
    </div>
  );
}
