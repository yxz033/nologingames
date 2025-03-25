import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/data/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/games/${game.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-video">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 truncate">{game.title}</h3>
          <p className="text-gray-600 text-sm mb-2 overflow-hidden text-ellipsis line-clamp-2">{game.description}</p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{game.category}</span>
            <span className="text-blue-600">{game.developer}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 