import type { NextConfig } from 'next';
import { execSync } from 'node:child_process';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** ISO date (YYYY-MM-DD) of the latest git commit — used by the footer “Latest update”. */
function getSiteLastUpdate(): string {
  try {
    return execSync('git log -1 --format=%cs', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

const nextConfig: NextConfig = {
  devIndicators: false,
  env: {
    NEXT_PUBLIC_SITE_LAST_UPDATE: getSiteLastUpdate(),
  },
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
