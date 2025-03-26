export interface Game {
  id: string
  title: string
  description: string
  url: string
  imageUrl: string
  developer: string
  genre: string
  platform: string
  controls: string
  version: string
  releaseDate: string
  lastUpdated: string
  browsers: string[]
  graphics: string
  processor: string
  memory: string
  plays: number
  rating: number
  duration?: string
  category: string
  relatedGames?: string[]
  tags?: string[]
  screenshots?: string[]
  stats?: {
    plays: number
    rating: number
    reviews: number
  }
  requirements?: {
    browsers: string[]
    graphics: string
    processor: string
    memory: string
  }
} 