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
    }
  }

  return {
    title: `${game.title} - NoLoginGames`,
    description: game.description,
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