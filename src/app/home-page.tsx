'use client'

import { games } from '@/data/games';
import { SearchSection } from '@/components/games/search-section';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Suspense } from 'react';
import { GameListSection } from '@/components/games/game-list-section';

const categories = [
  { id: 'action', name: '动作游戏' },
  { id: 'puzzle', name: '解谜游戏' },
  { id: 'strategy', name: '策略游戏' },
  { id: 'arcade', name: '街机游戏' },
  { id: 'sports', name: '体育游戏' },
  { id: 'racing', name: '竞速游戏' },
  { id: 'adventure', name: '冒险游戏' },
  { id: 'shooter', name: '射击游戏' },
  { id: 'rpg', name: '角色扮演' },
  { id: 'casual', name: '休闲游戏' },
];

export function HomePage() {
  return (
    <div className="space-y-8">
      <Suspense>
        <SearchSection 
          totalCount={games.length} 
          filteredCount={games.length} 
          categoryName="全部游戏"
        />
      </Suspense>

      <Breadcrumb />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map(category => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
          >
            <div className="text-center">
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg" />
          <div className="relative p-6 rounded-lg border bg-card/50">
            <h2 className="text-xl font-semibold mb-2">热门游戏</h2>
            <p className="text-muted-foreground">发现最受欢迎的游戏</p>
          </div>
        </div>

        <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Advertisement</span>
        </div>

        <Suspense>
          <GameListSection />
        </Suspense>
      </div>
    </div>
  );
} 