import { Game } from '@/types/game';
import { games } from '@/data/games';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedGamesProps {
  game: Game;
}

export default function RelatedGames({ game }: RelatedGamesProps) {
  if (!game.relatedGames || game.relatedGames.length === 0) return null;

  const relatedGames = game.relatedGames
    .map((id: string) => games.find(g => g.id === id))
    .filter((g): g is Game => g !== undefined)
    .slice(0, 4);

  if (relatedGames.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">相关游戏</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {relatedGames.map((relatedGame: Game) => (
          <Link
            key={relatedGame.id}
            href={`/games/${relatedGame.id}`}
            className="group"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden mb-2">
              <Image
                src={relatedGame.imageUrl}
                alt={relatedGame.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
              {relatedGame.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {relatedGame.category}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
} 