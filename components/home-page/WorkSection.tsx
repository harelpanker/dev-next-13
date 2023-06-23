import Container from '../ui/Container';
import TypographyH2 from '../ui/TypographyH2';

const WorkSection = () => {
  return (
    <section className=''>
      <Container>
        <header className='flex flex-col gap-4 md:gap-10 text-center items-center'>
          <TypographyH2 text='Content-focused' />
          <p className='max-w-3xl md:text-2xl'>
            My experience working as a freelance web developer has provided me
            with a broad spectrum of knowledge in a range of technologies,
            including React, Next.js, Tailwind CSS, TypeScript, and more.
          </p>
        </header>
      </Container>
    </section>
  );
};

export default WorkSection;
