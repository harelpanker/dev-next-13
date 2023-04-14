import Hero from '@/components/home-page/Hero';
import Container from '@/components/ui/Container';
import Gradient from '@/components/ui/Gradient';
import PageWrapper from '@/components/ui/PageWrapper';

export default function Home() {
  return (
    <div className='flex flex-col justify-center relative py-20'>
      <Gradient gradientType='type-1' />
      <PageWrapper>
        <Container>
          <Hero />
        </Container>
      </PageWrapper>
    </div>
  );
}
