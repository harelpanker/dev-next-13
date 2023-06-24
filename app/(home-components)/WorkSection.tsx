'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import Container from '@/components/ui/Container';
import TypographyH2 from '@/components/ui/TypographyH2';

import { Plus } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

import noise from '/public/images/noise.webp';
import datree from '/public/images/sites/datree.png';

import styles from './styles.module.css';
import { workData } from '@/utils/work_data';

const WorkSection = () => {
  const [order, setOrder] = useState({
    id: '1',
    image: datree,
    name: 'datree',
  });

  const handleImageOrder = (
    id: string,
    image: StaticImageData,
    name: string
  ) => {
    setOrder({ id: id, image: image, name: name });
  };

  return (
    <>
      <section className='noise-work relative w-full px-5 lg:px-12'>
        <Container>
          <div className='flex flex-col gap-12'>
            <header className='flex flex-col gap-4 md:gap-10 text-center items-center'>
              <TypographyH2 text='Content-focused' />
              <p className='max-w-3xl md:text-2xl'>
                In the past few years, I have collaborated with numerous clients
                on a diverse range of projects.
              </p>
            </header>

            {/* main section content */}
            <div className='w-full max-w-screen-xl mx-auto relative lg:gap-20 lg:flex lg:items-center lg:justify-between'>
              <Accordion.Root
                className='grid gap-4 mx-auto lg:mx-0 md:w-[380px] lg:shrink-0'
                type='single'
                defaultValue='item-1'>
                {/* item */}
                {workData.map((item) => (
                  <div key={item.id} className='accordion_item'>
                    <Accordion.Item
                      className='p-4 group flex flex-col'
                      value={`item-${item.id}`}>
                      {/*  */}
                      {/* header  */}
                      <Accordion.Header
                        className={`${styles.accordion_header}`}>
                        <Accordion.Trigger
                          onClick={() =>
                            handleImageOrder(item.id, item.image, item.name)
                          }
                          className='flex justify-between gap-4 items-center w-full text-2xl font-medium cursor-pointer'>
                          <span>{item.name}</span>
                          <Plus className='transition duration-300' />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      {/* content */}
                      <Accordion.Content
                        className={`gap-6 flex flex-col overflow-hidden ${styles.accordion_content} data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp`}>
                        <div>
                          <p className='text-sm md:text-base mb-3'>
                            {item.description}
                          </p>
                          <div className='flex justify-end'>
                            <a
                              className='underline font-medium'
                              target='_blank'
                              rel='noreferrer'
                              href={item.link}>
                              See it in the wild
                            </a>
                          </div>
                        </div>
                        <Image
                          src={item.image}
                          alt={item.name}
                          className='lg:hidden'
                        />
                      </Accordion.Content>
                      {/*  */}
                    </Accordion.Item>
                  </div>
                ))}
              </Accordion.Root>
              <div className='hidden lg:block lg:w-full'>
                <figure>
                  <Image
                    quality={100}
                    className='max-w-[1000px]'
                    src={order.image}
                    alt={order.name}
                  />
                </figure>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <style jsx>{`
        .accordion_item {
          position: relative;
          isolation: isolate;
          border-width: 1px;
          border-color: rgb(52 56 65);
          background-color: rgb(35 38 45);
        }
        .accordion_item::before {
          position: absolute;
          inset: 0;
          z-index: -20;
          opacity: 0.4;
          mix-blend-mode: overlay;
          content: '';
          background-image: url(${noise.src});
        }
        .noise-work::before {
          position: absolute;
          content: '';
          z-index: -1;
          top: 15%;
          height: 80%;
          width: 150%;
          left: -25%;
          background: url(${noise.src}) repeat,
            linear-gradient(247.23deg, #4af2c8 0%, #2f4cb3 100%);
          background-blend-mode: overlay;
          -webkit-mask-image: radial-gradient(
            rgba(0, 0, 0, 0.8),
            transparent 70%
          );
          mask-image: radial-gradient(rgba(0, 0, 0, 0.8), transparent 70%);
        }
      `}</style>
    </>
  );
};

export default WorkSection;
