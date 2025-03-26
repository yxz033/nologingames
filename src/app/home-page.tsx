'use client'

import { games } from '@/data/games';
import { SearchSection } from '@/components/games/search-section';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { Suspense } from 'react';
import { GameListSection } from '@/components/games/game-list-section';
import StructuredData from '@/components/seo/StructuredData';
import { generateHomeSchema } from '@/lib/seo/schema';

const categories = [
  { id: 'action', name: 'Action' },
  { id: 'puzzle', name: 'Puzzle' },
  { id: 'strategy', name: 'Strategy' },
  { id: 'arcade', name: 'Arcade' },
  { id: 'sports', name: 'Sports' },
  { id: 'racing', name: 'Racing' },
  { id: 'adventure', name: 'Adventure' },
  { id: 'shooter', name: 'Shooter' },
  { id: 'rpg', name: 'RPG' },
  { id: 'casual', name: 'Casual' },
];

export function HomePage() {
  // 生成主页结构化数据
  const homeSchema = generateHomeSchema(games.length);
  
  return (
    <div className="space-y-8">
      {/* 添加结构化数据 */}
      <StructuredData data={homeSchema} />
      
      <Suspense>
        <SearchSection 
          totalCount={games.length} 
          filteredCount={games.length} 
          categoryName="All Games"
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
            <h2 className="text-xl font-semibold mb-2">Popular Games</h2>
            <p className="text-muted-foreground">Discover the most popular games</p>
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