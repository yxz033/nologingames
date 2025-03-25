'use client'

import { games } from '@/data/games';
import { SearchSection } from '@/components/games/search-section';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Suspense } from 'react';
import { CategoryGameListSection } from '@/components/games/category-game-list-section';
import { categoryInfo } from '@/data/categories';

interface CategoryPageProps {
  params: {
    id: string
  }
}

export function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params;
  const categoryName = categoryInfo[id]?.name || 'Unknown Category';

  // Get games for current category
  const categoryGames = games.filter(game => game.category === id);

  return (
    <div className="space-y-8">
      <Suspense>
        <SearchSection
          totalCount={categoryGames.length}
          filteredCount={categoryGames.length}
          categoryName={categoryName}
        />
      </Suspense>

      <Breadcrumb />

      <div className="space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg" />
          <div className="relative p-6 rounded-lg border bg-card/50">
            <h2 className="text-xl font-semibold mb-2">{categoryName}</h2>
            <p className="text-muted-foreground">Browse all games in {categoryName}</p>
          </div>
        </div>

        <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Advertisement</span>
        </div>

        <Suspense>
          <CategoryGameListSection categoryId={id} />
        </Suspense>
      </div>
    </div>
  );
} 