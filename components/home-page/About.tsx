import { FC } from 'react';
import Container from '../ui/Container';

type AboutProps = {};

const About: FC<AboutProps> = ({}) => {
  return (
    <section>
      <Container>
        <div className='flex flex-col gap-12'>
          <div>
            <h2>Full speed</h2>
            <p>
              Astro optimizes your website like no other framework can. Leverage
              Astro&apos;s unique zero-JS frontend architecture to unlock higher
              conversion rates with better SEO.
            </p>
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};

export default About;
