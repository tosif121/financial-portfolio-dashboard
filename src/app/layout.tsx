import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/dashboard/ThemeProvider';
import { cn } from '@/lib/utils';

import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('@/components/dashboard/Layout'));

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TradeWise',
  description: 'Track your NSE investments and market performance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
