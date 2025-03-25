import { games } from '@/data/games';
import GameCard from '@/components/GameCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* 分类导航 */}
      <div className="flex space-x-4 text-center">
        <a href="/categories/action" className="flex-1 py-2 bg-gray-100 rounded hover:bg-gray-200">
          Action
        </Link>
        <Link href="/categories/rpg" className="flex-1 py-2 bg-gray-100 rounded hover:bg-gray-200">
          RPG
        </Link>
        <Link href="/categories/casual" className="flex-1 py-2 bg-gray-100 rounded hover:bg-gray-200">
          Casual
        </Link>
        <Link href="/categories/popular" className="flex-1 py-2 bg-gray-100 rounded hover:bg-gray-200">
          Popular
        </Link>
      </div>

      {/* 顶部广告位 */}
      <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Advertisement</span>
      </div>

      {/* 游戏展示区 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {/* 底部广告位 */}
      <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Advertisement</span>
      </div>
    </div>
  );
}
