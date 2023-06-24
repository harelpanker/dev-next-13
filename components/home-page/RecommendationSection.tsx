'use client';

import Image from 'next/image';
import Container from '../ui/Container';
import TypographyH2 from '../ui/TypographyH2';

import noise from '/public/images/noise.webp';
import eitan from '/public/images/quotes/eitan.webp';
import elizabeth from '/public/images/quotes/elizabeth.webp';
import shimon from '/public/images/quotes/shimon.webp';

const RecommendationSection = () => {
  return (
    <>
      <section className='relative w-full'>
        <Container>
          <div className='flex gap-12 flex-col lg:grid lg:grid-cols-[1fr_1.75fr] relative max-w-7xl mx-auto'>
            <header className='flex flex-col items-start gap-6 w-full max-w-xl'>
              <TypographyH2 text="What my clients' say" />
              <p className='max-w-3xl md:text-2xl'>
                Thrilled to be joining forces with exceptional individuals and
                esteemed companies throughout my path!
              </p>
            </header>
            <div className='quotes relative flex flex-col items-center lg:items-start'>
              <article className='relative border flex flex-col gap-3 p-5 shadow-md ml-16 -translate-y-4 scale-90'>
                <header className='flex items-center gap-4'>
                  <Image
                    src={eitan}
                    alt='Eitan'
                    className='h-10 w-10 rounded-full border border-white'
                  />
                  <strong className='text-white'>Eitan</strong>
                </header>
                <p>
                  ...He&apos;s hard-working, creative, energetic, and very
                  knowledgeable. In all honesty, I could not recommend him more
                  highly.
                </p>
              </article>
              <article className='relative border flex flex-col gap-3 p-5 shadow-md z-20 ml-6'>
                <header className='flex items-center gap-4'>
                  <Image
                    src={elizabeth}
                    alt='Elizabeth'
                    className='h-10 w-10 rounded-full border border-white'
                  />
                  <strong className='text-white'>Elizabeth</strong>
                </header>
                <p>
                  I have worked with Harel as a freelance developer at Antidote
                  Health. He processes a great deal of knowledge and experience
                  in the field of development, and always does extensive
                  research when investigating if something can be done. Harel
                  has great communication skills and professionalism and is
                  always quick and efficient when completing projects. He has
                  been a great pleasure to work with and I highly recommend him
                  to any company looking to partner with him in development.
                </p>
              </article>
              <article className='relative border flex flex-col gap-3 p-5 shadow-md z-10 lg:ml-24 -translate-y-6 scale-90'>
                <header className='flex items-center gap-4'>
                  <Image
                    src={shimon}
                    alt='Shimon'
                    className='h-10 w-10 rounded-full border border-white'
                  />
                  <strong className='text-white'>Shimon</strong>
                </header>
                <p>
                  A very talented and resourceful developer that I am happy to
                  work with.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>
      <style jsx>{`
        article {
          position: relative;
          isolation: isolate;
          border-width: 1px;
          border-color: rgb(52 56 65);
          background-color: rgb(35 38 45);
        }
        article > p {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }

        .quotes::before {
          position: absolute;
          content: '';
          aspect-ratio: 1/1;
          width: 90%;
          left: -10%;
          top: -35%;
          background: url(${noise.src}) repeat,
            linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%);
          background-blend-mode: overlay;
          -webkit-mask-image: radial-gradient(
            rgba(0, 0, 0, 1),
            transparent 60%
          );
          mask-image: radial-gradient(rgba(0, 0, 0, 1), transparent 60%);
        }
      `}</style>
    </>
  );
};

export default RecommendationSection;
