import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/navbar/Navbar';
import Body from '@/components/layout/Body';
import Footer from '@/components/footer/Footer';
import GoogleTagManeger from '@/utils/GoogleTagManager';

type RootProps = {
  children: React.ReactNode;
};

export const metadata = {
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
    url: 'https://nextjs.org',
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
    icon: 'https://res.cloudinary.com/dmcmglu0n/image/upload/v1680968325/32_yobuyl.png',
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
      className={`${general.variable} ${cabinetgrotesk.variable}`}>
      <Body>
        <div className='flex flex-col min-h-screen justify-between'>
          <Navbar />
          <main className='grow'>{children}</main>
          <Footer />
        </div>
      </Body>
      <GoogleTagManeger />
    </html>
  );
}
