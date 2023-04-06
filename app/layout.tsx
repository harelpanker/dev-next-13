import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/navbar/Navbar';
import Body from '@/components/layout/Body';
import Footer from '@/components/footer/Footer';

type RootProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'Harel Panker | Frontend Developer',
  description: '',
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
    </html>
  );
}
