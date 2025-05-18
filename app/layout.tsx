import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { Analytics } from '@vercel/analytics/react';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { NavBar } from './components/NavBar';
import { TvNoiseTransition } from './components/CrackedScreenTransition';
import LetterGlitch from '@/components/ui/letter-glitch';
import { BackgroundLines } from '@/components/ui/background-lines';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ladoipasideit.ro'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'La Doi Pasi de IT',
    template: '%s | La Doi Pasi de IT'
  },
  description: 'Full Stack Developer, La Doi Pasi de IT, travelling in my spare time.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="antialiased tracking-tight min-h-full flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col bg-black text-zinc-200">
          <main className="flex-1 max-w-[60ch] mx-auto w-full space-y-6 p-8">
            <BackgroundLines>
              <TvNoiseTransition>
                <ViewTransition name="test">{children}</ViewTransition>
              </TvNoiseTransition>
            </BackgroundLines>
          </main>
          <Footer />
        </div>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}

function Footer() {
  const links = [
    { name: '@clugraphy', url: 'https://x.com/clugraphy' },
    { name: 'youtube', url: 'https://www.youtube.com/@clugraphy' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/alexandru-catalin-stroe/' },
    { name: 'github', url: 'https://github.com/clugraphy' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
