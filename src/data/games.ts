import { Game } from '@/types/game'

export const games: Game[] = [
  {
    id: 'narrow-one',
    title: 'Narrow One',
    description: 'A challenging platformer where you must navigate through narrow passages and obstacles. Test your reflexes and timing in this addictive game!',
    url: 'https://example.com/games/narrow-one',
    imageUrl: '/images/games/narrow-one.jpg',
    developer: 'GameDev Studio',
    genre: 'Platform',
    platform: 'HTML5',
    controls: 'Arrow keys or WASD to move, Space to jump',
    version: '1.0.0',
    releaseDate: '2024-03-25',
    lastUpdated: '2024-03-25',
    browsers: ['Chrome', 'Firefox', 'Safari', 'Edge'],
    graphics: 'WebGL 2.0',
    processor: 'Any modern CPU',
    memory: '2GB RAM',
    plays: 1000,
    rating: 4.5,
    duration: '10-15 min',
    category: 'shooter',
    tags: ['platform', 'action', 'challenge', 'reflexes'],
    screenshots: [
      '/screenshots/narrow-one-1.jpg',
      '/screenshots/narrow-one-2.jpg',
      '/screenshots/narrow-one-3.jpg'
    ],
    stats: {
      plays: 1000,
      rating: 4.5,
      reviews: 100
    },
    requirements: {
      browsers: ['Chrome', 'Firefox', 'Safari', 'Edge'],
      graphics: 'WebGL 2.0',
      processor: 'Any modern CPU',
      memory: '2GB RAM'
    }
  }
] 