'use client';

import { Game } from '@/types/game';
import { useState, useRef, useCallback } from 'react';

interface GameIframeProps {
  game: Game;
}

export default function GameIframe({ game }: GameIframeProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Error attempting to toggle fullscreen:', err);
    }
  }, []);

  return (
    <div className="relative group">
      <div 
        ref={containerRef}
        className="w-full aspect-video bg-white rounded-lg shadow-md overflow-hidden"
      >
        <iframe
          src={game.url}
          className="w-full h-full border-0"
          allow="fullscreen"
          loading="lazy"
          title={game.title}
        />
      </div>
      
      {/* 全屏按钮 */}
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label={isFullscreen ? "退出全屏" : "全屏模式"}
      >
        {isFullscreen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0l5-5M4 4l5 5M15 9l5-5m0 0l-5-5m5 5l-5 5M9 15l-5 5m0 0l5 5M4 20l5-5M15 15l5 5m0 0l-5 5m5-5l-5-5" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        )}
      </button>
    </div>
  );
} 