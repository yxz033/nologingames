import { games } from '@/data/games'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { GameDetail } from '@/components/games/game-detail'
import { generateGamePageSEO } from '@/lib/seo/generators'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  return generateGamePageSEO({ gameId: id })
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