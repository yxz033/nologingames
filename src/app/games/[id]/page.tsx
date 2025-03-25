import { games } from '@/data/games';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import GameIframe from '@/components/games/game-iframe';
import GameInfo from './components/GameInfo';
import GameStats from './components/GameStats';
import GameScreenshots from './components/GameScreenshots';
import RelatedGames from './components/RelatedGames';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { GameDetailSkeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { DynamicPageProps } from '@/types/page';

// 添加generateStaticParams函数来生成所有可能的游戏路径
export async function generateStaticParams() {
  return games.map((game) => ({
    id: game.id
  }));
}

export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const { id } = await params;
  const game = games.find((g) => g.id === id);
  
  if (!game) {
    return {
      title: 'Game Not Found'
    };
  }

  return {
    title: `${game.title} 🕹️ Play on NoLoginGames`,
    description: game.description,
    openGraph: {
      title: `${game.title} 🕹️ Play on NoLoginGames`,
      description: game.description,
      images: [game.imageUrl],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${game.title} 🕹️ Play on NoLoginGames`,
      description: game.description,
      images: [game.imageUrl],
    },
  };
}

export default async function Page({ params }: DynamicPageProps) {
  const { id } = await params;
  const game = games.find((g) => g.id === id);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 面包屑导航 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>
      </div>

      {/* 游戏标题 */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{game.title}</h1>
              <p className="text-gray-600">
                By {game.developer} | {game.category} | {game.type}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              {game.rating && (
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-900">{game.rating}</span>
                  {game.ratingCount && (
                    <span className="ml-1 text-gray-500">({game.ratingCount})</span>
                  )}
                </div>
              )}
              {game.playCount && (
                <div className="text-gray-500">
                  {game.playCount.toLocaleString()} 次游玩
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<GameDetailSkeleton />}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 主要内容区 */}
            <div className="lg:col-span-2 space-y-8">
              {/* 游戏iframe */}
              <GameIframe game={game} />
              
              {/* 游戏描述 */}
              {game.longDescription && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">游戏介绍</h2>
                  <p className="text-gray-600 whitespace-pre-line">{game.longDescription}</p>
                </div>
              )}
              
              {/* 游戏截图 */}
              <GameScreenshots game={game} />

              {/* 相关游戏 */}
              <RelatedGames game={game} />
            </div>

            {/* 侧边栏 */}
            <div className="space-y-8">
              {/* 游戏统计 */}
              <GameStats game={game} />

              {/* 游戏信息 */}
              <GameInfo game={game} />

              {/* 游戏标签 */}
              {game.tags && game.tags.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">游戏标签</h2>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 广告位 */}
              <div className="sticky top-4">
                <div className="w-full h-[600px] bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Advertisement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>

      {/* 底部广告位 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Advertisement</span>
        </div>
      </div>
    </div>
  );
} 