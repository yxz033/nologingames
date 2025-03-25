'use client';

import { Game } from '@/data/games';
import { useState, useRef, useCallback } from 'react';

interface GameIframeProps {
  game: Game;
}

export default function GameIframe({ game }: GameIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  const handleFullscreen = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.requestFullscreen().catch(() => {
        console.log('全屏请求被拒绝');
      });
    }
  }, []);

  return (
    <div className="space-y-4">
      {/* 游戏容器 */}
      <div className="w-full max-w-6xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        {/* Loading状态 */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-10">
            <div className="text-white text-center">
              <svg className="animate-spin h-8 w-8 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p>游戏加载中，请稍候...</p>
            </div>
          </div>
        )}

        {/* 错误提示 */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-75 z-10">
            <div className="text-white text-center p-4">
              <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="mb-4">游戏加载失败</p>
              <a 
                href={game.gameUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
              >
                访问原始页面
              </a>
            </div>
          </div>
        )}

        {/* Iframe容器 */}
        <div 
          className="relative w-full"
          style={{ paddingBottom: `${(1 / game.aspectRatio) * 100}%` }}
        >
          <iframe
            ref={iframeRef}
            src={game.iframeUrl}
            className="absolute inset-0 w-full h-full"
            onLoad={handleLoad}
            onError={handleError}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>

        {/* 全屏按钮 */}
        <button
          onClick={handleFullscreen}
          className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-lg transition-colors duration-200"
          title="全屏"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>
      </div>

      {/* 游戏控制说明 */}
      {game.controls && (
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">游戏控制说明</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {game.controls.movement && (
              <div className="space-y-1">
                <h3 className="font-medium text-gray-700">移动</h3>
                <p className="text-gray-600">{game.controls.movement}</p>
              </div>
            )}
            {game.controls.action && (
              <div className="space-y-1">
                <h3 className="font-medium text-gray-700">动作</h3>
                <p className="text-gray-600">{game.controls.action}</p>
              </div>
            )}
            {game.controls.special && (
              <div className="space-y-1">
                <h3 className="font-medium text-gray-700">特殊</h3>
                <p className="text-gray-600">{game.controls.special}</p>
              </div>
            )}
            {game.controls.other && (
              <div className="space-y-1">
                <h3 className="font-medium text-gray-700">其他</h3>
                <p className="text-gray-600">{game.controls.other}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 