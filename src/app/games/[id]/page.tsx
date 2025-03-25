import { games } from '@/data/games';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const game = games.find((g) => g.id === params.id);
  
  if (!game) {
    return {
      title: 'Game Not Found'
    };
  }

  return {
    title: game.title,
    description: game.description
  };
}

export default async function Page(
  { params }: { params: { id: string } }
) {
  const game = games.find((g) => g.id === params.id);

  if (!game) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* 游戏标题 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">{game.title}</h1>
        <p className="text-gray-600">
          By {game.developer} | {game.category} | {game.type}
        </p>
      </div>

      {/* 游戏预览和链接 */}
      <div className="w-full max-w-6xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="relative aspect-video">
          <Image
            src={game.imageUrl}
            alt={game.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <a
              href={game.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>立即游玩</span>
            </a>
          </div>
        </div>
      </div>

      {/* 游戏信息 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">游戏信息</h2>
          <div className="space-y-2 text-gray-600">
            <p>游戏类型: {game.type}</p>
            <p>开发者: {game.developer}</p>
            <p>分类: {game.category}</p>
            <p>原始链接: <a href={game.gameUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{game.gameUrl}</a></p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">游戏说明</h2>
          <div className="space-y-2 text-gray-600">
            <p>{game.description}</p>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-800">
                <span className="font-semibold">提示:</span> 为了获得最佳游戏体验,请点击&ldquo;立即游玩&rdquo;按钮访问游戏官方页面。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 广告位 */}
      <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Advertisement</span>
      </div>
    </div>
  );
} 