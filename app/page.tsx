import Hero from '@/components/home-page/Hero';
import Container from '@/components/ui/Container';

export default function Home() {
  return (
    <div className='flex flex-col justify-center relative py-20'>
      <Container>
        <Hero />
      </Container>
    </div>
  );
}
