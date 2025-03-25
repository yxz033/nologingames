'use client'

import { Game } from '@/types/game';
import { useState, useRef, useCallback, useEffect } from 'react';

// 扩展Document接口以包含浏览器特定的全屏属性
declare global {
  interface Document {
    webkitFullscreenElement?: Element;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitExitFullscreen?: () => void;
    mozCancelFullScreen?: () => void;
    msExitFullscreen?: () => void;
  }

  interface HTMLElement {
    webkitRequestFullscreen?: () => Promise<void>;
    mozRequestFullScreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  }
}

interface GameIframeProps {
  game: Game;
}

export default function GameIframe({ game }: GameIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // 检查是否处于全屏模式
  const checkFullscreen = useCallback(() => {
    const fullscreenElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement;
    setIsFullscreen(!!fullscreenElement);
  }, []);

  // 切换全屏模式
  const toggleFullscreen = useCallback(async () => {
    if (!iframeRef.current) return;

    if (!isFullscreen) {
      try {
        if (iframeRef.current.requestFullscreen) {
          await iframeRef.current.requestFullscreen();
        } else if (iframeRef.current.webkitRequestFullscreen) {
          await iframeRef.current.webkitRequestFullscreen();
        } else if (iframeRef.current.mozRequestFullScreen) {
          await iframeRef.current.mozRequestFullScreen();
        } else if (iframeRef.current.msRequestFullscreen) {
          await iframeRef.current.msRequestFullscreen();
        }
      } catch (error) {
        console.error('Failed to enter fullscreen:', error);
      }
    } else {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } catch (error) {
        console.error('Failed to exit fullscreen:', error);
      }
    }
  }, [isFullscreen]);

  // 监听全屏状态变化
  useEffect(() => {
    document.addEventListener('fullscreenchange', checkFullscreen);
    document.addEventListener('webkitfullscreenchange', checkFullscreen);
    document.addEventListener('mozfullscreenchange', checkFullscreen);
    document.addEventListener('MSFullscreenChange', checkFullscreen);

    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreen);
      document.removeEventListener('webkitfullscreenchange', checkFullscreen);
      document.removeEventListener('mozfullscreenchange', checkFullscreen);
      document.removeEventListener('MSFullscreenChange', checkFullscreen);
    };
  }, [checkFullscreen]);

  return (
    <div className="relative aspect-video bg-card rounded-lg overflow-hidden">
      <iframe
        ref={iframeRef}
        src={game.url}
        className="w-full h-full"
        allow="fullscreen"
      />
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-4 right-4 px-4 py-2 bg-black/50 text-white rounded-lg backdrop-blur-sm hover:bg-black/60 transition-colors"
      >
        {isFullscreen ? '退出全屏' : '全屏游戏'}
      </button>
    </div>
  );
} 