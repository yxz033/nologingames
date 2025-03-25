import { Game } from '@/types/game'

export const games: Game[] = [
  {
    id: 'narrow-one',
    title: 'Narrow One',
    description: 'A casual shooting game with simple controls and addictive gameplay.',
    url: '@https://narrow.one/',
    imageUrl: '/images/games/narrow-one.jpg',
    developer: 'Pelican Party',
    genre: 'Shooting',
    platform: 'Browser, Mobile',
    controls: 'Keyboard/Mouse, Touch',
    version: '1.2.0',
    releaseDate: '2023-12-01',
    lastUpdated: '2024-03-15',
    browsers: 'Chrome 88+, Firefox 87+, Safari 14+',
    graphics: 'WebGL 2.0',
    processor: '1.6 GHz',
    memory: '2 GB RAM',
    plays: 250000,
    rating: 4.7,
    duration: '10-15 min',
    category: 'shooter',
    tags: ['Shooter', 'Casual', 'Action', 'Multiplayer'],
    screenshots: [
      '/screenshots/narrow-one-1.jpg',
      '/screenshots/narrow-one-2.jpg',
      '/screenshots/narrow-one-3.jpg'
    ]
  }
] 