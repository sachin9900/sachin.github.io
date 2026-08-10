import './globals.css';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'EmbeddedX Projects | Embedded & IoT Lead Generation',
  description:
    'Industry-oriented final-year project solutions in Embedded Systems, IoT, Wireless Technologies, and AIoT for students and colleges.',
  metadataBase: new URL('https://sachin9900.github.io'),
  openGraph: {
    title: 'EmbeddedX Projects | Embedded & IoT Lead Generation',
    description:
      'Industry-oriented final-year project solutions in Embedded Systems, IoT, Wireless Technologies, and AIoT for students and colleges.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EmbeddedX Projects | Embedded & IoT Lead Generation',
    description:
      'Industry-oriented final-year project solutions in Embedded Systems, IoT, Wireless Technologies, and AIoT for students and colleges.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
