import { games } from '@/data/games';
import GameCard from '@/components/games/game-card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 分类导航 - 移动端可横向滚动 */}
      <div className="relative">
        <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 space-x-3 sm:space-x-4">
          <Link href="/categories/action" className="flex-none min-w-[120px] sm:flex-1 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 text-center text-sm sm:text-base transition-colors">
            Action
          </Link>
          <Link href="/categories/rpg" className="flex-none min-w-[120px] sm:flex-1 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 text-center text-sm sm:text-base transition-colors">
            RPG
          </Link>
          <Link href="/categories/casual" className="flex-none min-w-[120px] sm:flex-1 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 text-center text-sm sm:text-base transition-colors">
            Casual
          </Link>
          <Link href="/categories/popular" className="flex-none min-w-[120px] sm:flex-1 py-3 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 text-center text-sm sm:text-base transition-colors">
            Popular
          </Link>
        </div>
        {/* 滚动指示器 */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white pointer-events-none sm:hidden" />
      </div>

      {/* 顶部广告位 */}
      <div className="w-full h-20 sm:h-24 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Advertisement</span>
      </div>

      {/* 游戏展示区 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {/* 底部广告位 */}
      <div className="w-full h-20 sm:h-24 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">Advertisement</span>
      </div>
    </div>
  );
}
