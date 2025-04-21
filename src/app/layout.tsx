// app/layout.tsx
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SiteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Providers } from './Providers';
import './globals.css';
import { TailwindIndicator } from '@/components/TailwindIndicator';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'h-full bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </>
  );
}