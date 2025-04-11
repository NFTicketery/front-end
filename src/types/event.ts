import { PublicKey } from '@solana/web3.js';

export type EventStatus = 'active' | 'cancelled' | 'completed';

export interface TicketType {
  id: string;
  name: string;
  price: number; // In lamports (1 SOL = 1,000,000,000 lamports)
  supply: number;
  remaining: number;
  metadata: {
    attributes: Array<{trait_type: string, value: string}>;
  }
}

export interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string; // ISO date string
  endDate: string;   // ISO date string
  venue: string;
  organizer: string; // Will be converted to PublicKey when interacting with blockchain
  ticketTypes: TicketType[];
  imageUrl?: string;
  status: EventStatus;
}