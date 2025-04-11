'use client';

import React from 'react';
import dynamic from 'next/dynamic';

import Navbar from '@/components/Navbar';

const WalletProvider = dynamic(
  () => import('@/components/WalletProvider'),
  { ssr: false }
);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider>
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </WalletProvider>
  );
}