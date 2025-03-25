import { Game } from '@/data/games';
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
            <span>{game.platforms.join(', ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">设备</span>
            <span>{game.devices.join(', ')}</span>
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
        <p className="text-gray-600 mb-4">{game.longDescription || game.description}</p>
        {game.features && game.features.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium text-gray-900 mb-2">主要特性</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {game.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 系统要求 */}
      {game.requirements && (
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">系统要求</h2>
          <div className="space-y-3 text-gray-600">
            {game.requirements.browser && (
              <div>
                <span className="font-medium block mb-1">支持浏览器</span>
                <span>{game.requirements.browser.join(', ')}</span>
              </div>
            )}
            {game.requirements.graphics && (
              <div>
                <span className="font-medium block mb-1">显卡</span>
                <span>{game.requirements.graphics}</span>
              </div>
            )}
            {game.requirements.processor && (
              <div>
                <span className="font-medium block mb-1">处理器</span>
                <span>{game.requirements.processor}</span>
              </div>
            )}
            {game.requirements.memory && (
              <div>
                <span className="font-medium block mb-1">内存</span>
                <span>{game.requirements.memory}</span>
              </div>
            )}
          </div>
        </div>
      )}

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