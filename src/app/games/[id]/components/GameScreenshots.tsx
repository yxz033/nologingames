'use client';

import { Game } from '@/types/game';
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
      
      {/* 主截图 */}
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <Image
          src={game.screenshots[selectedIndex]}
          alt={`${game.title} screenshot ${selectedIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* 缩略图列表 */}
      <div className="grid grid-cols-4 gap-2">
        {game.screenshots.map((screenshot, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-video rounded-lg overflow-hidden ${
              index === selectedIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={screenshot}
              alt={`${game.title} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 20vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 