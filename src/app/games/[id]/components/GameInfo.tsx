import { Game } from '@/types/game';
import { formatDate } from '@/lib/utils';

interface GameInfoProps {
  game: Game;
}

export default function GameInfo({ game }: GameInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
      {/* 基本信息 */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">游戏信息</h2>
        <div className="space-y-3 text-gray-600">
          <div className="flex justify-between">
            <span className="font-medium">开发者</span>
            <span>{game.developer}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">类型</span>
            <span>{game.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">平台</span>
            <span>{game.platform}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">控制方式</span>
            <span>{game.controls}</span>
          </div>
          {game.version && (
            <div className="flex justify-between">
              <span className="font-medium">版本</span>
              <span>{game.version}</span>
            </div>
          )}
          {game.releaseDate && (
            <div className="flex justify-between">
              <span className="font-medium">发布日期</span>
              <span>{formatDate(game.releaseDate)}</span>
            </div>
          )}
          {game.lastUpdated && (
            <div className="flex justify-between">
              <span className="font-medium">最后更新</span>
              <span>{formatDate(game.lastUpdated)}</span>
            </div>
          )}
        </div>
      </div>

      {/* 游戏描述 */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">游戏描述</h2>
        <p className="text-gray-600 mb-4">{game.description}</p>
      </div>

      {/* 系统要求 */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">系统要求</h2>
        <div className="space-y-3 text-gray-600">
          <div>
            <span className="font-medium block mb-1">支持浏览器</span>
            <span>{game.browsers}</span>
          </div>
          <div>
            <span className="font-medium block mb-1">显卡</span>
            <span>{game.graphics}</span>
          </div>
          <div>
            <span className="font-medium block mb-1">处理器</span>
            <span>{game.processor}</span>
          </div>
          <div>
            <span className="font-medium block mb-1">内存</span>
            <span>{game.memory}</span>
          </div>
        </div>
      </div>

      {/* 标签 */}
      {game.tags && game.tags.length > 0 && (
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">标签</h2>
          <div className="flex flex-wrap gap-2">
            {game.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 