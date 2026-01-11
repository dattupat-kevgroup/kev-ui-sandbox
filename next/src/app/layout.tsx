import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { Sidebar } from '../components/Sidebar';

export const metadata: Metadata = {
  title: 'KEV-UI Sandbox (Next.js)',
  description: 'Testing @kev-ui packages in Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <header className="shadow-sm px-6 py-4 bg-white">
                <h1 className="text-2xl font-bold">Package Tests (Next.js)</h1>
              </header>
              <main className="flex-1 p-6 overflow-y-auto bg-blue-50">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
