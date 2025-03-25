'use client';

import { Game } from '@/data/games';
import Image from 'next/image';
import { useState } from 'react';

interface GameScreenshotsProps {
  game: Game;
}

export default function GameScreenshots({ game }: GameScreenshotsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!game.screenshots || game.screenshots.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">游戏截图</h2>
      
      {/* 主图片展示 */}
      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
        <Image
          src={game.screenshots[selectedIndex].url}
          alt={game.screenshots[selectedIndex].caption || `${game.title} 截图 ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority={selectedIndex === 0}
        />
      </div>

      {/* 缩略图列表 */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
        {game.screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-200 ${
              selectedIndex === index
                ? 'ring-2 ring-blue-500'
                : 'hover:ring-2 hover:ring-gray-300'
            }`}
          >
            <Image
              src={screenshot.url}
              alt={screenshot.caption || `${game.title} 截图 ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, 16.666vw"
            />
          </button>
        ))}
      </div>

      {/* 图片说明 */}
      {game.screenshots[selectedIndex].caption && (
        <p className="mt-4 text-sm text-gray-600 text-center">
          {game.screenshots[selectedIndex].caption}
        </p>
      )}
    </div>
  );
} 