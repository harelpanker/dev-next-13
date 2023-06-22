import { FC } from 'react';
import Container from '../ui/Container';
import TypographyH2 from '../ui/TypographyH2';

type AboutProps = {};

const About: FC<AboutProps> = ({}) => {
  return (
    <section>
      <Container>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-10 text-center items-center'>
            <TypographyH2 text='Skill set' />
            <p className='max-w-3xl md:text-2xl'>
              My experience working as a freelance web developer has provided me
              with a broad spectrum of knowledge in a range of technologies,
              including React, Next.js, Tailwind CSS, TypeScript, and more.
            </p>
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export default About;
