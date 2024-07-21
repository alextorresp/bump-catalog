import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Nav from '@/components/layout/nav/Nav';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BUMP',
  description: 'Create and share your own musical mood board',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${jakarta.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
