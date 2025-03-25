'use client'

import { games } from '@/data/games'
import GameCard from '@/components/games/game-card'
import { useSearchParams } from 'next/navigation'

export function GameListSection() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q')?.toLowerCase() || ''

  const filteredGames = games.filter(game => {
    if (!searchQuery) return true
    return (
      game.title.toLowerCase().includes(searchQuery) ||
      game.description.toLowerCase().includes(searchQuery) ||
      game.tags?.some(tag => tag.toLowerCase().includes(searchQuery))
    )
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredGames.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
      {filteredGames.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">没有找到相关游戏</p>
        </div>
      )}
    </div>
  )
} 