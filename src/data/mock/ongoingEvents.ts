import { Event } from '@/types/event';

// Helper functions to get dates relative to today
const getPastDate = (dayOffset: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - dayOffset);
  return date.toISOString();
};

const getFutureDate = (dayOffset: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return date.toISOString();
};

export const mockOngoingEvents: Event[] = [
  {
    id: 'ongoing-event-1',
    name: 'Solana DeFi Week',
    description: 'A week-long series of workshops, panels, and networking events focused on decentralized finance applications built on Solana.',
    startDate: getPastDate(3),
    endDate: getFutureDate(4),
    venue: 'Finance District, New York',
    organizer: 'SolanaFoundation',
    ticketTypes: [
      {
        id: 'ongoing-ticket-1-1',
        name: 'Full Week Pass',
        price: 3 * 1_000_000_000, // 3 SOL
        supply: 500,
        remaining: 100,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Full Week' },
            { trait_type: 'Event', value: 'DeFi Week' }
          ]
        }
      },
      {
        id: 'ongoing-ticket-1-2',
        name: 'Daily Pass',
        price: 0.8 * 1_000_000_000, // 0.8 SOL
        supply: 1000,
        remaining: 350,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Single Day' },
            { trait_type: 'Event', value: 'DeFi Week' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/defi-week.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-2',
    name: 'Web3 Developer Bootcamp',
    description: 'Intensive two-week training program for developers looking to transition into Web3 and blockchain development on Solana.',
    startDate: getPastDate(8),
    endDate: getFutureDate(6),
    venue: 'Tech Campus, San Francisco',
    organizer: 'SolanaEdu',
    ticketTypes: [
      {
        id: 'ongoing-ticket-2-1',
        name: 'Full Bootcamp',
        price: 10 * 1_000_000_000, // 10 SOL
        supply: 200,
        remaining: 30,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Full Program' },
            { trait_type: 'Program', value: 'Bootcamp' }
          ]
        }
      },
      {
        id: 'ongoing-ticket-2-2',
        name: 'Online Stream',
        price: 2 * 1_000_000_000, // 2 SOL
        supply: 1000,
        remaining: 600,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Online Only' },
            { trait_type: 'Program', value: 'Bootcamp' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/developer-bootcamp.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-3',
    name: 'NFT Art Residency',
    description: 'A month-long art residency program for digital artists exploring NFTs as a medium, with weekly public exhibitions.',
    startDate: getPastDate(15),
    endDate: getFutureDate(15),
    venue: 'Digital Arts Center, Miami',
    organizer: 'NFTCuratorDAO',
    ticketTypes: [
      {
        id: 'ongoing-ticket-3-1',
        name: 'Exhibition Pass',
        price: 0.5 * 1_000_000_000, // 0.5 SOL
        supply: 3000,
        remaining: 1800,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Exhibition' },
            { trait_type: 'Program', value: 'Art Residency' }
          ]
        }
      },
      {
        id: 'ongoing-ticket-3-2',
        name: 'Artist Workshop Pass',
        price: 2.5 * 1_000_000_000, // 2.5 SOL
        supply: 100,
        remaining: 20,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Workshop' },
            { trait_type: 'Program', value: 'Art Residency' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/art-residency.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-4-hackathon',
    name: 'Solana Global Hackathon',
    description: 'A three-week global hackathon challenging developers to build innovative applications on Solana with $1M in prizes.',
    startDate: getPastDate(10),
    endDate: getFutureDate(11),
    venue: 'Virtual Event (Worldwide)',
    organizer: 'SolanaFoundation',
    ticketTypes: [
      {
        id: 'ongoing-ticket-4-1',
        name: 'Participant Registration',
        price: 0, // Free
        supply: 10000,
        remaining: 7500,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Participant' },
            { trait_type: 'Event', value: 'Hackathon' }
          ]
        }
      },
      {
        id: 'ongoing-ticket-4-2',
        name: 'Mentor Access',
        price: 0.5 * 1_000_000_000, // 0.5 SOL
        supply: 200,
        remaining: 120,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Mentor' },
            { trait_type: 'Event', value: 'Hackathon' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/global-hackathon.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-5',
    name: 'Crypto Trading Championship',
    description: 'A month-long trading competition where participants compete for the highest returns using a Solana-based trading simulator.',
    startDate: getPastDate(20),
    endDate: getFutureDate(10),
    venue: 'Online',
    organizer: 'TradingDAO',
    ticketTypes: [
      {
        id: 'ongoing-ticket-5-1',
        name: 'Competitor Entry',
        price: 1 * 1_000_000_000, // 1 SOL
        supply: 5000,
        remaining: 2200,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Competitor' },
            { trait_type: 'Competition', value: 'Trading' }
          ]
        }
      },
      {
        id: 'ongoing-ticket-5-2',
        name: 'Spectator Pass',
        price: 0.2 * 1_000_000_000, // 0.2 SOL
        supply: 10000,
        remaining: 7500,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Spectator' },
            { trait_type: 'Competition', value: 'Trading' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/trading-championship.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-6',
    name: 'Blockchain Gaming Summit',
    description: 'Three-day summit connecting game developers, players, and investors in the blockchain gaming ecosystem.',
    startDate: getPastDate(2),
    endDate: getFutureDate(1),
    venue: 'Game Center, Tokyo',
    organizer: 'GameFi Alliance',
    ticketTypes: [
      {
        id: 'ongoing-ticket-6-1',
        name: 'Summit Pass',
        price: 2 * 1_000_000_000, // 2 SOL
        supply: 800,
        remaining: 350,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Standard' },
            { trait_type: 'Summit', value: 'Gaming' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/gaming-summit.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-7',
    name: 'Solana Development Workshop',
    description: 'Hands-on workshop series for learning Solana development fundamentals, Rust programming, and smart contract creation.',
    startDate: getPastDate(5),
    endDate: getFutureDate(3),
    venue: 'Crypto University, Berlin',
    organizer: 'SolDev Community',
    ticketTypes: [
      {
        id: 'ongoing-ticket-7-1',
        name: 'Workshop Series',
        price: 1.5 * 1_000_000_000, // 1.5 SOL
        supply: 300,
        remaining: 120,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Series' },
            { trait_type: 'Workshop', value: 'Development' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/dev-workshop.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-8',
    name: 'Digital Identity Forum',
    description: 'Forum exploring the future of digital identity, credentials, and authentication using blockchain technology.',
    startDate: getPastDate(4),
    endDate: getFutureDate(2),
    venue: 'Tech Hub, Amsterdam',
    organizer: 'IdentityDAO',
    ticketTypes: [
      {
        id: 'ongoing-ticket-8-1',
        name: 'Forum Access',
        price: 1.2 * 1_000_000_000, // 1.2 SOL
        supply: 500,
        remaining: 180,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Standard' },
            { trait_type: 'Forum', value: 'Identity' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/identity-forum.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-9',
    name: 'Crypto Art Exhibition',
    description: 'Ongoing exhibition showcasing digital art, NFTs, and immersive experiences from leading crypto artists.',
    startDate: getPastDate(12),
    endDate: getFutureDate(18),
    venue: 'Virtual Gallery, Worldwide',
    organizer: 'CryptoArtCollective',
    ticketTypes: [
      {
        id: 'ongoing-ticket-9-1',
        name: 'Gallery Pass',
        price: 0.3 * 1_000_000_000, // 0.3 SOL
        supply: 10000,
        remaining: 7800,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Standard' },
            { trait_type: 'Exhibition', value: 'Art' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/crypto-art.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-10',
    name: 'Solana Ecosystem Conference',
    description: 'Major conference highlighting projects and innovations across the Solana ecosystem.',
    startDate: getPastDate(1),
    endDate: getFutureDate(3),
    venue: 'Blockchain Center, Dubai',
    organizer: 'SolanaFoundation',
    ticketTypes: [
      {
        id: 'ongoing-ticket-10-1',
        name: 'Conference Pass',
        price: 3 * 1_000_000_000, // 3 SOL
        supply: 1500,
        remaining: 700,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Standard' },
            { trait_type: 'Conference', value: 'Ecosystem' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/ecosystem-conf.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-11',
    name: 'Web3 Job Fair',
    description: 'Virtual job fair connecting talent with companies building in the Web3 and blockchain space.',
    startDate: getPastDate(2),
    endDate: getFutureDate(5),
    venue: 'Virtual Platform',
    organizer: 'Web3Talent',
    ticketTypes: [
      {
        id: 'ongoing-ticket-11-1',
        name: 'Job Seeker Pass',
        price: 0, // Free
        supply: 10000,
        remaining: 6000,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Job Seeker' },
            { trait_type: 'Fair', value: 'Jobs' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/job-fair.jpg',
    status: 'active'
  },
  {
    id: 'ongoing-event-12',
    name: 'DeFi Protocol Launch',
    description: 'Launch event for a new DeFi protocol on Solana with airdrops, tutorials, and community challenges.',
    startDate: getPastDate(3),
    endDate: getFutureDate(7),
    venue: 'Online',
    organizer: 'DeFiDAO',
    ticketTypes: [
      {
        id: 'ongoing-ticket-12-1',
        name: 'Launch Party Access',
        price: 0.5 * 1_000_000_000, // 0.5 SOL
        supply: 2000,
        remaining: 1200,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Standard' },
            { trait_type: 'Launch', value: 'DeFi' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/defi-launch.jpg',
    status: 'active'
  }
];