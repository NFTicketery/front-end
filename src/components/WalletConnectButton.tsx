'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css';

const WalletConnectButton: React.FC = () => {
  const { wallet, publicKey } = useWallet();

  return (
    <div className="flex items-center">
      <WalletMultiButton className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" />
      {publicKey && (
        <div className="ml-4 text-sm">
          <p className="text-gray-600">Connected with {wallet?.adapter?.name}</p>
          <p className="text-gray-800 font-mono">
            {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-4)}
          </p>
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;