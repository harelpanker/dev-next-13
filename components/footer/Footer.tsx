'use client';
import { FC, useState, useEffect } from 'react';
import { SunMedium, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <footer className='fixed inset-0 top-auto left-auto bottom-5 right-5'>
      <button
        className='w-7 h-7 flex justify-center items-center text-slate-900 dark:text-slate-50 font-semibold rounded-md'
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}>
        {theme === 'dark' ? <Moon /> : <SunMedium />}
      </button>
    </footer>
  );
};

export default Footer;
