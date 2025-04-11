// src/utils/solana.ts
import { Connection, PublicKey } from '@solana/web3.js';
import { Program, AnchorProvider } from '@project-serum/anchor';
import { Metaplex } from '@metaplex-foundation/js';
import { walletAdapterIdentity } from '@metaplex-foundation/js';
import { WalletContextState } from '@solana/wallet-adapter-react';

// These IDs will need to be updated with the actual program IDs once your colleagues deploy the programs
const ORGANIZATION_REGISTRY_PROGRAM_ID = 'your_organization_registry_program_id_here';
const ORGANIZATION_PROGRAM_ID = 'your_organization_program_id_here';
const EVENT_PROGRAM_ID = 'your_event_program_id_here';

// Connect to the Solana cluster
export const getConnection = (): Connection => {
  // Use the same cluster as in your WalletContextProvider
  return new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_HOST || 'https://api.devnet.solana.com');
};

// Set up a provider to sign transactions (requires a wallet)
export const getProvider = (wallet: WalletContextState): AnchorProvider => {
  const connection = getConnection();
  
  // Ensure wallet is connected
  if (!wallet.connected || !wallet.publicKey) {
    throw new Error('Wallet not connected');
  }
  
  const provider = new AnchorProvider(
    connection,
    wallet as any,
    AnchorProvider.defaultOptions()
  );
  
  return provider;
};

// Initialize Metaplex (for NFT operations)
export const getMetaplex = (connection: Connection, wallet: WalletContextState) => {
  const metaplex = Metaplex.make(connection);
  
  if (wallet.publicKey) {
    return metaplex.use(walletAdapterIdentity(wallet as any));
  }
  
  return metaplex;
};

// Load the organization registry program
export const getOrganizationRegistryProgram = async (wallet: WalletContextState, idl: any) => {
  const provider = getProvider(wallet);
  const programId = new PublicKey(ORGANIZATION_REGISTRY_PROGRAM_ID);
  
  return new Program(idl, programId, provider);
};

// Load an organization program
export const getOrganizationProgram = async (wallet: WalletContextState, idl: any, organizationProgramId = ORGANIZATION_PROGRAM_ID) => {
  const provider = getProvider(wallet);
  const programId = new PublicKey(organizationProgramId);
  
  return new Program(idl, programId, provider);
};

// Load an event program
export const getEventProgram = async (wallet: WalletContextState, idl: any, eventProgramId = EVENT_PROGRAM_ID) => {
  const provider = getProvider(wallet);
  const programId = new PublicKey(eventProgramId);
  
  return new Program(idl, programId, provider);
};

// Find the organization PDA for a wallet
export const findOrganizationAddress = async (program: Program<any>, walletPublicKey: PublicKey) => {
  // This will need to match the PDA derivation logic in your smart contracts
  return PublicKey.findProgramAddressSync(
    [Buffer.from('organization'), walletPublicKey.toBuffer()],
    program.programId
  );
};

// Find an event PDA for an organization
export const findEventAddress = async (program: Program<any>, organizationKey: PublicKey, eventName: string) => {
  // This will need to match the PDA derivation logic in your smart contracts
  return PublicKey.findProgramAddressSync(
    [Buffer.from('event'), organizationKey.toBuffer(), Buffer.from(eventName)],
    program.programId
  );
};

// Interface for ticket data
interface TicketData {
  id: string;
  eventName: string;
  price: number;
  owner: string;
  // ... other ticket fields
}

// Type for the ticket account
interface TicketAccount {
  publicKey: PublicKey;
  account: {
    eventName: string;
    price: number;
    owner: PublicKey;
    // ... other ticket fields
  }
}

// Utility to parse and format ticket data
export const parseTicketData = (ticketAccount: TicketAccount): TicketData => {
  // Format will depend on your program's data structure
  return {
    id: ticketAccount.publicKey.toString(),
    eventName: ticketAccount.account.eventName,
    price: ticketAccount.account.price,
    owner: ticketAccount.account.owner.toString(),
    // ... other ticket fields
  };
};