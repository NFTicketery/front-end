# NFT Ticketery - Technical Specifications

## Project Overview
NFT Ticketery is a decentralized event ticketing platform that uses Solana blockchain and NFTs to create secure, transparent, and transferable event tickets. The platform allows event organizers to create and manage events, and users to purchase, transfer, and validate tickets as NFTs.

## Technology Stack

### Frontend
- **Framework**: Next.js 15.3.0
- **Language**: TypeScript 5
- **UI Library**: React 19.0.0
- **Styling**: TailwindCSS 4
- **Rendering Strategy**: Hybrid (Server + Client Components)
- **Build Tool**: Turbopack (via Next.js)

### Blockchain Integration
- **Blockchain**: Solana
- **Network**: Devnet (currently), Mainnet (planned for production)
- **Wallet Support**:
  - Phantom
  - Solflare
  - (Additional wallets can be added with minimal code changes)
- **Wallet Connection**: @solana/wallet-adapter ecosystem
- **NFT Standard**: Metaplex NFT Standard
- **Smart Contract Framework**: Anchor

### Dependencies
- **Solana Ecosystem**:
  - @solana/web3.js: ^1.98.0
  - @solana/wallet-adapter-base: ^0.9.24
  - @solana/wallet-adapter-react: ^0.15.36
  - @solana/wallet-adapter-react-ui: ^0.9.36
  - @solana/wallet-adapter-wallets: ^0.19.33
- **NFT Integration**:
  - @metaplex-foundation/js: ^0.20.1
- **Anchor Framework**:
  - @project-serum/anchor: ^0.26.0

## Architecture

### Frontend Structure
- **App Router**: Using Next.js App Router for routing and layouts
- **Client/Server Split**: Using a hybrid approach with client-specific components loaded dynamically
- **Components**:
  - `Navbar.tsx`: Main navigation component
  - `WalletConnectButton.tsx`: UI for connecting wallet
  - `WalletProvider.tsx`: Provides wallet context to the application
  - `WalletContextProvider.tsx`: Alternative context provider implementation

### Blockchain Integration
- **Wallet Connection Flow**:
  1. User clicks "Connect Wallet" button
  2. Wallet selection modal appears (Phantom, Solflare options)
  3. User approves connection in wallet
  4. UI updates to show connected wallet address
  
- **NFT Ticketing Model** (To be implemented by Solana program team):
  1. Event creation and configuration
  2. NFT metadata structure for tickets
  3. Minting process and distribution
  4. Transfer mechanisms
  5. Validation and check-in process

## Required Solana Program Functionality

The Solana program should implement the following functionality:

### 1. Event Management
- Create new events with details (name, date, venue, etc.)
- Set ticket types, pricing, and quantities
- Update event details (if needed)
- Cancel events and handle refunds

### 2. Ticket Minting
- Mint NFT tickets with event metadata
- Include unique identifiers for each ticket
- Support for different ticket tiers/categories
- Limit minting to authorized accounts

### 3. Ticket Sales
- Purchase tickets with SOL or other tokens
- Fee distribution to event organizers
- Optional: Support for secondary market sales with royalties

### 4. Ticket Validation
- Verify ticket authenticity and ownership
- Mark tickets as used/redeemed
- Prevent double-usage of tickets

### 5. Administrative Functions
- Allow event organizers to manage their events
- Support for emergency functions (e.g., cancellations)
- Fee management and distribution

## Data Models

### Event
```typescript
interface Event {
  id: string;            // Unique identifier
  name: string;          // Event name
  description: string;   // Event description
  date: string;          // ISO date string
  venue: string;         // Venue name/address
  organizer: PublicKey;  // Organizer's wallet address
  ticketTypes: TicketType[];  // Available ticket types
  imageUrl?: string;     // Optional event image
  status: EventStatus;   // Active, Cancelled, Completed
}
```

### Ticket Type
```typescript
interface TicketType {
  id: string;            // Unique identifier
  name: string;          // Type name (e.g., "VIP", "General Admission")
  price: number;         // Price in lamports
  supply: number;        // Total available
  remaining: number;     // Remaining available
  metadata: {            // Additional NFT metadata
    attributes: Array<{trait_type: string, value: string}>;
    // Other Metaplex metadata fields
  }
}
```

### NFT Ticket
```typescript
interface NFTTicket {
  mint: PublicKey;       // NFT mint address
  eventId: string;       // Associated event
  ticketTypeId: string;  // Ticket type
  serial: number;        // Serial number within event
  owner: PublicKey;      // Current owner
  used: boolean;         // Whether ticket has been used
  metadata: object;      // NFT metadata (follows Metaplex standard)
}
```

## Integration Points

The frontend will integrate with the Solana program through:

1. **Connection to Solana Network**:
   - Already implemented using ConnectionProvider

2. **Wallet Authentication**:
   - Already implemented using WalletProvider

3. **Program Integration** (to be implemented):
   - Use Anchor client to interact with deployed Solana program
   - Create transaction instructions for program interaction
   - Sign and send transactions using connected wallet
   - Listen for program events and account changes

4. **NFT Handling** (to be implemented):
   - Use Metaplex SDK to interpret and display NFT ticket data
   - Handle NFT transfers and ownership verification

## Development Environment

- **Node.js**: v18+
- **Package Manager**: Yarn
- **Solana CLI Tools**: For program deployment and testing
- **Anchor Framework**: For Solana program development

## Deployment Workflow

1. **Frontend**:
   - Build with `yarn build`
   - Deploy to hosting provider (Vercel recommended)

2. **Solana Program**:
   - Build with Anchor
   - Deploy to Devnet for testing
   - Deploy to Mainnet for production

## Testing Strategy

1. **Frontend Testing**:
   - Unit tests for components
   - Integration tests for wallet connection
   - E2E tests for user flows

2. **Program Testing**:
   - Unit tests for program instructions
   - Integration tests with frontend
   - Security audits before mainnet deployment