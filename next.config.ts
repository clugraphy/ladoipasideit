import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: 'allow'
});

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  output: 'standalone',
  experimental: {
    mdxRs: true,
    viewTransition: true
  },
  outputFileTracingRoot: undefined,
  async redirects() {
    if (!process.env.POSTGRES_URL) {
      return [];
    }

    let redirects = await sql`
      SELECT source, destination, permanent
      FROM redirects;
    `;

    return redirects.map(({ source, destination, permanent }) => ({
      source,
      destination,
      permanent: !!permanent
    }));
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
