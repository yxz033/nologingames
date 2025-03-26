This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SEO Automation System

This project implements an automated SEO optimization system to ensure consistent SEO across all pages:

### Key Components

- **SEO Templates**: Pre-configured templates for different page types (homepage, game details, categories)
- **Metadata Generators**: Helper functions that generate correct metadata for any page
- **Validation Tools**: Scripts to check SEO compliance during build
- **Component Library**: Reusable SEO components

### Usage Example

```typescript
// In your page.tsx file
import { generateGamePageSEO } from '@/lib/seo/generators';

export function generateMetadata({ params }: PageProps) {
  return generateGamePageSEO({
    gameId: params.id,
    // Other necessary parameters
  });
}
```

See `develop.md` for complete documentation on implementing SEO.

## Common Issues and Solutions

### 1. Dynamic Route Parameters
If you encounter type errors with dynamic route parameters:
```typescript
// Wrong
interface PageProps {
  params: {
    id: string
  }
}

// Correct
interface PageProps {
  params: Promise<{
    id: string
  }>
}
```

### 2. Type Imports
When using Game type:
```typescript
// Wrong
import { Game } from '@/data/games'

// Correct
import { Game } from '@/types/game'
```

### 3. Component Props
Make sure to properly type your components:
```typescript
interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  // ...
}
```

### 4. Image Handling
Use next/image with proper error handling:
```typescript
<Image
  src={game.imageUrl || defaultGameImage}
  alt={game.title}
  onError={(e) => {
    const target = e.target as HTMLImageElement;
    target.src = defaultGameImage;
  }}
/>
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Recent Updates

### 2024-03-25
1. SEO Automation System
   - Added SEO template system
   - Implemented metadata generators
   - Added SEO validation tools
   - Created reusable SEO components

### 2024-03-15
1. Type System
   - Added new Game interface properties
   - Fixed type import paths
   - Improved component typing

2. Components
   - Enhanced GameCard component
   - Optimized GameIframe fullscreen
   - Added error handling

3. Routing
   - Added async params support
   - Improved dynamic routing
   - Enhanced error handling
