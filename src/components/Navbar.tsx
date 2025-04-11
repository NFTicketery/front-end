'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const WalletButton = dynamic(
  () => import('./WalletConnectButton'),
  { ssr: false, loading: () => <div className="w-[180px] h-[36px] bg-purple-600 rounded"></div> }
);

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-xl font-bold text-purple-600 cursor-pointer">NFT Ticketery</span>
              </Link>
            </div>
            <nav className="ml-10 flex items-center space-x-4">
              <Link href="/">
                <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">Home</span>
              </Link>
              <Link href="/events">
                <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">Events</span>
              </Link>
              <Link href="/organization/dashboard">
                <span className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">Organization</span>
              </Link>
            </nav>
          </div>
          <div>
            <WalletButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;