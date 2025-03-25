'use client'

import { games } from '@/data/games'
import GameCard from '@/components/games/game-card'
import { useSearchParams } from 'next/navigation'

interface CategoryGameListSectionProps {
  categoryId: string
}

export function CategoryGameListSection({ categoryId }: CategoryGameListSectionProps) {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q')?.toLowerCase() || ''

  // 过滤游戏
  const filteredGames = games.filter(game => {
    const matchesCategory = game.category === categoryId
    if (!searchQuery) return matchesCategory

    return (
      matchesCategory &&
      (game.title.toLowerCase().includes(searchQuery) ||
        game.description.toLowerCase().includes(searchQuery) ||
        game.tags?.some(tag => tag.toLowerCase().includes(searchQuery)))
    )
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredGames.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
      {filteredGames.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">No games found</p>
        </div>
      )}
    </div>
  )
} 