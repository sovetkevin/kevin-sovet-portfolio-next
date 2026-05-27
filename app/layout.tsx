import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import './index.css';

export const metadata: Metadata = {
  title: 'Kevin Sovet - Portfolio 2026 | Graphic, Web & UX/UI Designer',
  description: 'Kevin Sovet, Graphic, Web & UX/UI Designer with 10+ years of experience. Portfolio of digital products and brand identities.',
  metadataBase: new URL('https://by-sovet.me'),
  keywords: ['Kevin Sovet', 'UX/UI Designer', 'Web Designer', 'Graphic Designer', 'Portfolio', 'Belgium'],
  authors: [{ name: 'Kevin Sovet' }],
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'y-1Gwl9K-NNpf-Xrm3y8f7Hb8SCQVTpiB7BMpKC5y74',
  },
  openGraph: {
    title: 'Kevin Sovet - Portfolio 2026 | Graphic, Web & UX/UI Designer',
    description: 'Kevin Sovet, Graphic, Web & UX/UI Designer with 10+ years of experience.',
    url: 'https://by-sovet.me',
    siteName: 'Kevin Sovet Portfolio',
    images: [
      {
        url: '/images/hero_picture_2.jpg',
        width: 1800,
        height: 1800,
        alt: 'Kevin Sovet Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Sovet - Portfolio 2026 | Graphic, Web & UX/UI Designer',
    description: 'Kevin Sovet, Graphic, Web & UX/UI Designer with 10+ years of experience.',
    images: ['/images/hero_picture_2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico', sizes: 'any' },
      { url: '/images/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    shortcut: '/images/favicon/favicon.ico',
    apple: [
      { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
  other: {
    'theme-color': '#eef7f7',
    'msapplication-TileColor': '#eef7f7',
    'revisit-after': '7 days',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/images/hero_picture.avif"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}