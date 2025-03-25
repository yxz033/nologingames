import { games } from '@/data/games';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import GameIframe from '@/components/GameIframe';
import GameInfo from '@/components/GameInfo';
import GameStats from '@/components/GameStats';
import GameScreenshots from '@/components/GameScreenshots';
import RelatedGames from '@/components/RelatedGames';

// 添加generateStaticParams函数来生成所有可能的游戏路径
export async function generateStaticParams() {
  return games.map((game) => ({
    id: game.id
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const game = games.find((g) => g.id === resolvedParams.id);
  
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

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const game = games.find((g) => g.id === resolvedParams.id);

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 游戏标题 */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{game.title}</h1>
          <p className="text-gray-600">
            By {game.developer} | {game.category} | {game.type}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要内容区 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 游戏iframe */}
            <GameIframe game={game} />
            
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
          </div>
        </div>
      </div>

      {/* 广告位 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Advertisement</span>
        </div>
      </div>
    </div>
  );
} 