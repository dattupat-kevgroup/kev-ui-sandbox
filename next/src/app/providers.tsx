'use client';

import Link from 'next/link';
import { AppLinkProvider } from '@kev-ui/app-link';

export function Providers({ children }: { children: React.ReactNode }) {
  return <AppLinkProvider LinkComponent={Link}>{children}</AppLinkProvider>;
}
