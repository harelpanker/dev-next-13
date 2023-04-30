import { FC } from 'react';
import Container from '../ui/Container';

type SkillsSectionProps = {};

const SkillsSection: FC<SkillsSectionProps> = ({}) => {
  return (
    <section>
      <Container size='md'>
        <div className='flex flex-col gap-16 lg:gap-20'>
          <h2 className='font-semibold text-2xl'>
            I know a thing or two about:
          </h2>
          <ul className='flex flex-col gap-10 lg:gap-24'>
            {/* 1 */}
            <li className='flex flex-col lg:flex-row gap-2 lg:justify-between'>
              <h3 className='font-medium text-5xl md:text-7xl xl:text-8xl'>
                The basics
                <sup className='text-lg relative -top-6 lg:-top-12 lg:text-2xl'>
                  (01)
                </sup>
              </h3>
              <div className='flex flex-col gap-2 max-w-xl leading-relaxed md:leading-relaxed md:font-medium text-lg md:text-2xl'>
                <p>
                  Strongly emphasize the basics of web development, from{' '}
                  <strong className='font-medium md:font-semibold'>
                    semantic HTML, CSS (SCSS), and JavaScript / TypeScript
                  </strong>
                  , these are the things I&apos;m using on a daily basis.
                </p>
              </div>
            </li>
            {/* 2 */}
            <li className='flex flex-col lg:flex-row gap-2 lg:justify-between'>
              <h3 className='font-medium text-5xl md:text-7xl xl:text-8xl'>
                Frameworks
                <sup className='text-lg relative -top-6 lg:-top-12 lg:text-2xl'>
                  (02)
                </sup>
              </h3>
              <div className='flex flex-col gap-2 lg:gap-4 max-w-xl leading-relaxed md:leading-relaxed md:font-medium text-lg md:text-2xl'>
                <p>
                  Working constantly with{' '}
                  <strong className='font-medium md:font-semibold'>
                    React/Next.js
                  </strong>{' '}
                  (more of Next), know how to work with Styled-Components and
                  MUI, but my styling solution of choice is{' '}
                  <strong className='font-medium md:font-semibold'>
                    TailwindCSS
                  </strong>
                  .
                </p>
                <p>Always glad to learn new things!</p>
              </div>
            </li>
            {/* 3 */}
            <li className='flex flex-col lg:flex-row gap-2 lg:justify-between'>
              <h3 className='font-medium text-5xl md:text-7xl xl:text-8xl'>
                Tools
                <sup className='text-lg relative -top-6 lg:-top-12 lg:text-2xl'>
                  (03)
                </sup>
              </h3>
              <div className='flex flex-col gap-2 max-w-xl leading-relaxed md:leading-relaxed md:font-medium text-lg md:text-2xl'>
                <p>
                  Very comfortable working with{' '}
                  <strong className='font-medium md:font-semibold'>
                    Figma and Webflow
                  </strong>{' '}
                  - that is how I started, and how I build many of my
                  clients&apos; websites.
                </p>
              </div>
            </li>
            {/* 4 */}
            <li className='flex flex-col lg:flex-row gap-2 lg:justify-between'>
              <h3 className='font-medium text-5xl md:text-7xl xl:text-8xl'>
                Soft Skills
                <sup className='text-lg relative -top-6 lg:-top-12 lg:text-2xl'>
                  (04)
                </sup>
              </h3>
              <div className='flex flex-col gap-2 lg:gap-4 max-w-xl leading-relaxed md:leading-relaxed md:font-medium text-lg md:text-2xl'>
                <p>
                  I built my site to perform well - considering{' '}
                  <strong className='font-medium md:font-semibold'>
                    page speed, SEO optimization, and accessibility
                  </strong>
                  .
                </p>
                <p>
                  Strong understanding of the{' '}
                  <strong className='font-medium md:font-semibold'>
                    main principles of UI
                  </strong>
                  , from typography, hierarchy, whitespace, colors, and more.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
