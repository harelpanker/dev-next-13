import './globals.css';
import { Metadata } from 'next';
import GoogleTagManeger from '@/utils/GoogleTagManager';
import localFont from 'next/font/local';
import Script from 'next/script';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import CvButton from '@/components/layout/CvButton';

type RootProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Harel Panker | Frontend Developer',
  description: "Hi! My name is Harel and I'm a front end web developer",
  themeColor: 'black',
  metadataBase: new URL('https://www.panker.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Harel Panker | Frontend Developer',
    description: "Hi! My name is Harel and I'm a front end web developer",
    url: 'https://www.panker.dev',
    siteName: 'panker.dev',
    images: [
      {
        url: 'https://res.cloudinary.com/dmcmglu0n/image/upload/v1680968324/og-image_k6j30f.png',
        width: 1200,
        height: 630,
        alt: 'panker.dev',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dmcmglu0n/image/upload/v1681043882/32_zc4ngz.png',
    apple:
      'https://res.cloudinary.com/dmcmglu0n/image/upload/v1680968324/256_y7erbo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://res.cloudinary.com/dmcmglu0n/image/upload/v1680968324/256_y7erbo.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harel Panker | Frontend Developer',
    description: "Hi! My name is Harel and I'm a front end web developer",
    creator: '@Harel89098978',
    images: [
      'https://res.cloudinary.com/dmcmglu0n/image/upload/v1680968324/og-image_k6j30f.png',
    ],
  },
};

const general = localFont({
  src: [
    { path: '../public/fonts/GeneralSans-Variable.ttf', style: 'normal' },
    { path: '../public/fonts/GeneralSans-VariableItalic.ttf', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-general',
});
const cabinetgrotesk = localFont({
  src: [
    { path: '../public/fonts/CabinetGrotesk-Variable.ttf', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-cabinetgrotesk',
});

export default function RootLayout({ children }: RootProps) {
  return (
    <html
      lang='en'
      dir='ltr'
      className={`${general.variable} ${cabinetgrotesk.variable} scroll-smooth`}>
      <head>
        <GoogleTagManeger />
        {/* <Script
          id='stand-with-israel-widget'
          strategy='lazyOnload'
          src='https://westandwithisrael.io/_functions/widget?position=bottom-left&layout=1'
        /> */}
      </head>
      <body
        className={`flex min-h-dvh w-full flex-col justify-between bg-theme_black text-theme_white antialiased`}>
        <Navbar />
        <main className='relative z-10 grow overflow-hidden'>{children}</main>
        <CvButton />
        <Footer />
      </body>
    </html>
  );
}
