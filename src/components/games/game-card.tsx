'use client'

import { Game } from '@/data/games';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Users, Clock } from 'lucide-react';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.id}`} className="group">
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
        {/* 游戏缩略图 */}
        <div className="relative aspect-video">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* 游戏标签 */}
          <div className="absolute top-2 left-2 flex gap-2">
            {game.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 播放按钮 */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium transform scale-90 group-hover:scale-100 transition-transform duration-300">
              开始游戏
            </span>
          </div>
        </div>

        {/* 游戏信息 */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
            {game.title}
          </h3>
          
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {game.description}
          </p>

          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              {/* 评分 */}
              <div className="flex items-center text-yellow-500">
                <Star className="w-4 h-4 mr-1 fill-current" />
                <span>{game.rating}</span>
              </div>

              {/* 游玩次数 */}
              <div className="flex items-center text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                <span>{game.playCount}</span>
              </div>

              {/* 游戏时长 */}
              <div className="flex items-center text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>{game.duration || '不限'}</span>
              </div>
            </div>

            {/* 游戏类型 */}
            <div className="flex items-center">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {game.type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 