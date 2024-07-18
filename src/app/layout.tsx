import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/layout/nav/Nav';
import './globals.css';
import { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BUMP Catelog',
  description: 'Create your personal music catelog and share with friends.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
