import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import TopBar from '@/components/shared/TopBar';
import LeftSidebar from '@/components/shared/LeftSideBar';
import RightSidebar from '@/components/shared/RIghtSideBar';
import BottomBar from '@/components/shared/BottomBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Threads',
  description: 'A Next.js 14 Threads Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
