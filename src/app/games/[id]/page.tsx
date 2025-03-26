import { games } from '@/data/games'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { GameDetail } from '@/components/games/game-detail'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const game = games.find(g => g.id === id)

  if (!game) {
    return {
      title: 'Game Not Found - NoLoginGames',
      description: 'The requested game could not be found.',
      openGraph: {
        title: 'Game Not Found - NoLoginGames',
        description: 'The requested game could not be found.',
        type: 'website',
        images: [
          {
            url: '/images/og-404.jpg',
            width: 1200,
            height: 630,
            alt: 'Game Not Found - NoLoginGames',
          }
        ]
      },
      alternates: {
        canonical: '/games/not-found'
      }
    }
  }

  return {
    title: `${game.title} - Free Online Game | NoLoginGames`,
    description: `🎮 ${game.description} Experience ${game.title} - a thrilling ${game.genre.toLowerCase()} game by ${game.developer}. Play instantly in your browser, no download required!`,
    keywords: `${game.title}, free online game, ${game.genre} game, browser game, HTML5 game, ${game.developer}`,
    openGraph: {
      title: `${game.title} - Free Online Game | NoLoginGames`,
      description: `🎮 ${game.description} Experience ${game.title} - a thrilling ${game.genre.toLowerCase()} game by ${game.developer}. Play instantly in your browser, no download required!`,
      type: 'website',
      images: [
        {
          url: game.imageUrl || '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: `${game.title} - Free Online Game`,
        }
      ]
    },
    alternates: {
      canonical: `/games/${game.id}`
    }
  }
}

export async function generateStaticParams() {
  return games.map(game => ({
    id: game.id
  }))
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  const game = games.find(g => g.id === id)

  if (!game) {
    notFound()
  }

  return <GameDetail game={game} />
} 