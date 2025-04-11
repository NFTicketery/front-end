import { Event } from '@/types/event';

// Helper function to get dates relative to today but in the past
const getPastDate = (dayOffset: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - dayOffset);
  return date.toISOString();
};

export const mockPastEvents: Event[] = [
  {
    id: 'past-event-1',
    name: 'Solana Summer Hackathon 2024',
    description: 'A global hackathon for developers to build innovative applications on Solana.',
    startDate: getPastDate(60),
    endDate: getPastDate(56),
    venue: 'Virtual Event',
    organizer: 'SolanaFoundation',
    ticketTypes: [
      {
        id: 'ticket-p1-1',
        name: 'Participant',
        price: 0, // Free
        supply: 5000,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Participant' },
            { trait_type: 'Event', value: 'Hackathon' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/hackathon.jpg',
    status: 'completed'
  },
  {
    id: 'past-event-2',
    name: 'Metaverse Art Summit',
    description: 'A gathering of artists, creators, and collectors exploring the intersection of art and blockchain technology.',
    startDate: getPastDate(90),
    endDate: getPastDate(88),
    venue: 'Digital Museum, Paris',
    organizer: 'ArtDAO',
    ticketTypes: [
      {
        id: 'ticket-p2-1',
        name: 'Standard Pass',
        price: 1 * 1_000_000_000, // 1 SOL
        supply: 1000,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Standard' },
            { trait_type: 'Summit', value: 'Art' }
          ]
        }
      },
      {
        id: 'ticket-p2-2',
        name: 'Creator Pass',
        price: 2.5 * 1_000_000_000, // 2.5 SOL
        supply: 200,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Creator' },
            { trait_type: 'Summit', value: 'Art' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/art-summit.jpg',
    status: 'completed'
  },
  {
    id: 'past-event-3',
    name: 'Crypto Trading Conference',
    description: 'Expert panels and workshops on cryptocurrency trading strategies, market analysis, and risk management.',
    startDate: getPastDate(120),
    endDate: getPastDate(119),
    venue: 'Finance Center, Singapore',
    organizer: 'TradingDAO',
    ticketTypes: [
      {
        id: 'ticket-p3-1',
        name: 'Attendee',
        price: 1.5 * 1_000_000_000, // 1.5 SOL
        supply: 800,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Attendee' },
            { trait_type: 'Conference', value: 'Trading' }
          ]
        }
      },
      {
        id: 'ticket-p3-2',
        name: 'VIP Access',
        price: 4 * 1_000_000_000, // 4 SOL
        supply: 100,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'VIP' },
            { trait_type: 'Conference', value: 'Trading' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/trading-conf.jpg',
    status: 'completed'
  },
  {
    id: 'past-event-4',
    name: 'NFT Gaming Launch Party',
    description: 'Celebration and showcase of the latest NFT-based games launching on Solana.',
    startDate: getPastDate(150),
    endDate: getPastDate(150),
    venue: 'Tech Hub, Berlin',
    organizer: 'GameFi Alliance',
    ticketTypes: [
      {
        id: 'ticket-p4-1',
        name: 'Player Pass',
        price: 0.8 * 1_000_000_000, // 0.8 SOL
        supply: 1500,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Player' },
            { trait_type: 'Event', value: 'Launch' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/nft-gaming.jpg',
    status: 'completed'
  },
  {
    id: 'past-event-5',
    name: 'Blockchain Security Workshop',
    description: 'Hands-on workshop focusing on security best practices for blockchain developers and auditors.',
    startDate: getPastDate(200),
    endDate: getPastDate(198),
    venue: 'Secure Labs, London',
    organizer: 'SecurityDAO',
    ticketTypes: [
      {
        id: 'ticket-p5-1',
        name: 'Developer Seat',
        price: 1.2 * 1_000_000_000, // 1.2 SOL
        supply: 200,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Developer' },
            { trait_type: 'Workshop', value: 'Security' }
          ]
        }
      },
      {
        id: 'ticket-p5-2',
        name: 'Enterprise Access',
        price: 3 * 1_000_000_000, // 3 SOL
        supply: 50,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Enterprise' },
            { trait_type: 'Workshop', value: 'Security' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/security-workshop.jpg',
    status: 'completed'
  },
  {
    id: 'past-event-6',
    name: 'Solana Community Meetup',
    description: 'Informal gathering of Solana enthusiasts, developers, and investors to network and share ideas.',
    startDate: getPastDate(40),
    endDate: getPastDate(40),
    venue: 'Blockchain Cafe, Tokyo',
    organizer: 'SolanaJapan',
    ticketTypes: [
      {
        id: 'ticket-p6-1',
        name: 'Community Pass',
        price: 0.3 * 1_000_000_000, // 0.3 SOL
        supply: 100,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Community' },
            { trait_type: 'Event', value: 'Meetup' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/community-meetup.jpg',
    status: 'completed'
  },
  {
    id: 'past-event-7',
    name: 'Web3 Career Fair',
    description: 'Connection point for job seekers and companies building in the Web3 space.',
    startDate: getPastDate(75),
    endDate: getPastDate(74),
    venue: 'Innovation Center, Amsterdam',
    organizer: 'Web3Talent',
    ticketTypes: [
      {
        id: 'ticket-p7-1',
        name: 'Job Seeker',
        price: 0, // Free
        supply: 2000,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Job Seeker' },
            { trait_type: 'Fair', value: 'Career' }
          ]
        }
      },
      {
        id: 'ticket-p7-2',
        name: 'Recruiter',
        price: 2 * 1_000_000_000, // 2 SOL
        supply: 100,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Recruiter' },
            { trait_type: 'Fair', value: 'Career' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/career-fair.jpg',
    status: 'completed'
  },
  {
    id: 'past-event-8',
    name: 'Crypto Investment Summit',
    description: 'Insights from top investors and fund managers on crypto asset investment strategies.',
    startDate: getPastDate(160),
    endDate: getPastDate(158),
    venue: 'Financial District, Hong Kong',
    organizer: 'CryptoCapital',
    ticketTypes: [
      {
        id: 'ticket-p8-1',
        name: 'Investor Pass',
        price: 3 * 1_000_000_000, // 3 SOL
        supply: 500,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Investor' },
            { trait_type: 'Summit', value: 'Investment' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/investment-summit.jpg',
    status: 'completed'
  },
  {
    id: 'past-event-9',
    name: 'Decentralized Governance Forum',
    description: 'Discussions on DAO structures, voting mechanisms, and the future of decentralized governance.',
    startDate: getPastDate(210),
    endDate: getPastDate(209),
    venue: 'Democracy Center, Zurich',
    organizer: 'GovDAO',
    ticketTypes: [
      {
        id: 'ticket-p9-1',
        name: 'Forum Access',
        price: 1 * 1_000_000_000, // 1 SOL
        supply: 600,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Standard' },
            { trait_type: 'Forum', value: 'Governance' }
          ]
        }
      },
      {
        id: 'ticket-p9-2',
        name: 'Speaker Pass',
        price: 0, // Free for speakers
        supply: 50,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Speaker' },
            { trait_type: 'Forum', value: 'Governance' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/governance-forum.jpg',
    status: 'completed'
  },
  {
    id: 'past-event-10',
    name: 'Solana Ecosystem Showcase',
    description: 'Demo day for projects building on Solana to present their innovations and progress.',
    startDate: getPastDate(100),
    endDate: getPastDate(99),
    venue: 'Tech Campus, Barcelona',
    organizer: 'SolanaEcosystem',
    ticketTypes: [
      {
        id: 'ticket-p10-1',
        name: 'Audience',
        price: 0.5 * 1_000_000_000, // 0.5 SOL
        supply: 1000,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Audience' },
            { trait_type: 'Showcase', value: 'Ecosystem' }
          ]
        }
      },
      {
        id: 'ticket-p10-2',
        name: 'Presenter',
        price: 1 * 1_000_000_000, // 1 SOL
        supply: 100,
        remaining: 0,
        metadata: {
          attributes: [
            { trait_type: 'Access', value: 'Presenter' },
            { trait_type: 'Showcase', value: 'Ecosystem' }
          ]
        }
      }
    ],
    imageUrl: '/images/events/ecosystem-showcase.jpg',
    status: 'completed'
  }
];

// Generate 30 more generic past events for infinite scroll testing
export const generateMorePastEvents = (count: number = 30): Event[] => {
  return Array.from({ length: count }).map((_, index) => {
    const daysAgo = 250 + index * 5; // Spread events across time
    return {
      id: `past-event-gen-${index + 11}`,
      name: `Past Crypto Event #${index + 1}`,
      description: 'Generic past event for testing infinite scroll functionality.',
      startDate: getPastDate(daysAgo),
      endDate: getPastDate(daysAgo - 1 - (index % 3)), // Vary the duration
      venue: `Virtual Event ${index + 1}`,
      organizer: `OrganizationDAO${index + 1}`,
      ticketTypes: [
        {
          id: `ticket-gen-${index + 1}`,
          name: 'Standard Ticket',
          price: (0.5 + (index % 5)) * 1_000_000_000, // Vary the price
          supply: 1000,
          remaining: 0,
          metadata: {
            attributes: [
              { trait_type: 'Access', value: 'Standard' },
              { trait_type: 'Event', value: 'Generic' }
            ]
          }
        }
      ],
      imageUrl: `/images/events/generic-${(index % 5) + 1}.jpg`, // Cycle through 5 generic images
      status: 'completed'
    };
  });
};

// Export combined past events
export const allPastEvents = [...mockPastEvents, ...generateMorePastEvents()];