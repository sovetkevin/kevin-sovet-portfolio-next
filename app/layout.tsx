import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import './index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/hero_picture.avif" as="image" fetchPriority="high" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}