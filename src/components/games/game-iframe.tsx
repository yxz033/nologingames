'use client'

import { Game } from '@/data/games';
import { useState, useRef, useCallback, useEffect } from 'react';

// 扩展Document接口以包含浏览器特定的全屏属性
interface FullscreenDocument extends Document {
  webkitFullscreenEnabled?: boolean;
  mozFullScreenEnabled?: boolean;
  msFullscreenEnabled?: boolean;
  webkitFullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  msFullscreenElement?: Element | null;
}

// 扩展HTMLElement接口以包含浏览器特定的全屏方法
interface FullscreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface GameIframeProps {
  game: Game;
}

export default function GameIframe({ game }: GameIframeProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 检查是否支持全屏
  const checkFullscreenSupport = useCallback(() => {
    const doc = document as FullscreenDocument;
    return doc.fullscreenEnabled ||
      doc.webkitFullscreenEnabled ||
      doc.mozFullScreenEnabled ||
      doc.msFullscreenEnabled;
  }, []);

  // 请求全屏
  const requestFullscreen = useCallback(async (element: HTMLElement) => {
    const fullscreenElement = element as FullscreenElement;
    if (fullscreenElement.requestFullscreen) {
      await fullscreenElement.requestFullscreen();
    } else if (fullscreenElement.webkitRequestFullscreen) {
      await fullscreenElement.webkitRequestFullscreen();
    } else if (fullscreenElement.mozRequestFullScreen) {
      await fullscreenElement.mozRequestFullScreen();
    } else if (fullscreenElement.msRequestFullscreen) {
      await fullscreenElement.msRequestFullscreen();
    }
  }, []);

  // 退出全屏
  const exitFullscreen = useCallback(async () => {
    const doc = document as FullscreenDocument & {
      webkitExitFullscreen?: () => Promise<void>;
      mozCancelFullScreen?: () => Promise<void>;
      msExitFullscreen?: () => Promise<void>;
    };
    
    if (doc.exitFullscreen) {
      await doc.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      await doc.webkitExitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      await doc.mozCancelFullScreen();
    } else if (doc.msExitFullscreen) {
      await doc.msExitFullscreen();
    }
  }, []);

  // 切换全屏
  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current || !checkFullscreenSupport()) return;

    try {
      const doc = document as FullscreenDocument;
      if (!doc.fullscreenElement &&
          !doc.webkitFullscreenElement &&
          !doc.mozFullScreenElement &&
          !doc.msFullscreenElement) {
        await requestFullscreen(containerRef.current);
      } else {
        await exitFullscreen();
      }
    } catch (err) {
      console.error('Error attempting to toggle fullscreen:', err);
    }
  }, [checkFullscreenSupport, requestFullscreen, exitFullscreen]);

  // 监听全屏变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as FullscreenDocument;
      setIsFullscreen(
        Boolean(
          doc.fullscreenElement ||
          doc.webkitFullscreenElement ||
          doc.mozFullScreenElement ||
          doc.msFullscreenElement
        )
      );
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // 监听键盘快捷键
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // F 键或 F11 键触发全屏
      if ((e.key === 'f' || e.key === 'F' || e.key === 'F11') && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggleFullscreen]);

  return (
    <div className="relative group">
      <div 
        ref={containerRef}
        className="w-full aspect-video bg-white rounded-lg shadow-md overflow-hidden"
      >
        <iframe 
          src={game.gameUrl}
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
        aria-label={isFullscreen ? "退出全屏 (按F键)" : "全屏模式 (按F键)"}
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