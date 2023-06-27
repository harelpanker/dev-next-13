import Image from 'next/image';

import Container from '../ui/Container';

import { FileText, Linkedin, Github, Mail } from 'lucide-react';

import logo from 'public/images/p.svg';

const smLinks = [
  {
    link: 'https://www.linkedin.com/in/panker-harel/',
    icon: <Linkedin />,
  },
  {
    link: 'https://github.com/harelpanker',
    icon: <Github />,
  },
  {
    link: 'https://dub.sh/harel-cv',
    icon: <FileText />,
  },
  {
    link: 'harelpanker@protonmail.com',
    icon: <Mail />,
  },
];

const Footer = () => {
  return (
    <footer className='bg-theme_black px-5 lg-px-12 py-6 lg:py-8 relative z-20 text-theme_white'>
      <Container>
        <div className='flex items-center justify-between'>
          <Image src={logo} alt='logo' className='h-12' />
          <ul className='flex items-center gap-5 group'>
            {smLinks.map((link) => (
              <li key={link.link}>
                <a
                  className='group-hover:opacity-40 hover:!opacity-100 transition duration-300'
                  href={link.link}>
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
