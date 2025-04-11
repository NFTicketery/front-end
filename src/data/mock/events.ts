import { Event } from '@/types/event';

// Helper function to get dates relative to today
const getRelativeDate = (dayOffset: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return date.toISOString();
};

export const mockEvents: Event[] = [
  {
    id: 'event-1',
    name: 'Solana Breakpoint 2025',
    description: 'Annual Solana developer conference featuring workshops, presentations, and networking opportunities.',
    startDate: getRelativeDate(30),
    endDate: getRelativeDate(32),
    venue: 'Crypto Convention Center, San Francisco',
    organizer: 'SolanaFoundation',
    ticketTypes: [
      {
        id: 'ticket-1-1',
        name: 'General Admission',
        price: 2 * 1_000_000_000, // 2 SOL
        supply: 1000,
        remaining: 500,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'General' },
            { trait_type: 'Conference', value: 'Breakpoint' }
          ]
        }
      },
      {
        id: 'ticket-1-2',
        name: 'VIP Access',
        price: 5 * 1_000_000_000, // 5 SOL
        supply: 100,
        remaining: 30,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'VIP' },
            { trait_type: 'Conference', value: 'Breakpoint' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/breakpoint.jpg',
    status: 'active'
  },
  {
    id: 'event-2',
    name: 'NFT Art Exhibition',
    description: 'Showcase of the most innovative NFT art projects, featuring live minting experiences.',
    startDate: getRelativeDate(15),
    endDate: getRelativeDate(17),
    venue: 'Digital Gallery, Miami',
    organizer: 'NFTCuratorDAO',
    ticketTypes: [
      {
        id: 'ticket-2-1',
        name: 'Entrance Pass',
        price: 0.5 * 1_000_000_000, // 0.5 SOL
        supply: 2000,
        remaining: 1200,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Standard' },
            { trait_type: 'Exhibition', value: 'NFT Art' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/nft-art.jpg',
    status: 'active'
  },
  {
    id: 'event-3',
    name: 'DeFi Summit',
    description: 'Conference focused on decentralized finance innovations and the future of financial systems.',
    startDate: getRelativeDate(45),
    endDate: getRelativeDate(46),
    venue: 'Blockchain Center, New York',
    organizer: 'DeFiAlliance',
    ticketTypes: [
      {
        id: 'ticket-3-1',
        name: 'Basic Access',
        price: 1 * 1_000_000_000, // 1 SOL
        supply: 800,
        remaining: 300,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Basic' },
            { trait_type: 'Summit', value: 'DeFi' }
          ]
        }
      },
      {
        id: 'ticket-3-2',
        name: 'Premium Access',
        price: 3 * 1_000_000_000, // 3 SOL
        supply: 200,
        remaining: 50,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Premium' },
            { trait_type: 'Summit', value: 'DeFi' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/defi-summit.jpg',
    status: 'active'
  },
  {
    id: 'event-4',
    name: 'Web3 Gaming Expo',
    description: 'Expo showcasing the latest in blockchain gaming, play-to-earn models, and gaming NFTs.',
    startDate: getRelativeDate(60),
    endDate: getRelativeDate(62),
    venue: 'Gaming Arena, Los Angeles',
    organizer: 'GamersDAO',
    ticketTypes: [
      {
        id: 'ticket-4-1',
        name: 'Gamer Pass',
        price: 1.5 * 1_000_000_000, // 1.5 SOL
        supply: 3000,
        remaining: 2200,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Standard' },
            { trait_type: 'Expo', value: 'Gaming' }
          ]
        }
      },
      {
        id: 'ticket-4-2',
        name: 'Developer Pass',
        price: 3.5 * 1_000_000_000, // 3.5 SOL
        supply: 500,
        remaining: 200,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Developer' },
            { trait_type: 'Expo', value: 'Gaming' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/web3-gaming.jpg',
    status: 'active'
  },
  {
    id: 'event-5',
    name: 'Crypto Music Festival',
    description: 'A music festival where all tickets and merchandise are NFTs on Solana.',
    startDate: getRelativeDate(90),
    endDate: getRelativeDate(92),
    venue: 'Decentralized Park, Austin',
    organizer: 'MusicDAO',
    ticketTypes: [
      {
        id: 'ticket-5-1',
        name: 'Festival Pass',
        price: 2.5 * 1_000_000_000, // 2.5 SOL
        supply: 5000,
        remaining: 4000,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'General' },
            { trait_type: 'Festival', value: 'Music' }
          ]
        }
      },
      {
        id: 'ticket-5-2',
        name: 'VIP Festival Pass',
        price: 6 * 1_000_000_000, // 6 SOL
        supply: 1000,
        remaining: 600,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'VIP' },
            { trait_type: 'Festival', value: 'Music' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/crypto-music.jpg',
    status: 'active'
  }
];