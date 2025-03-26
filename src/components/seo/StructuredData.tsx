'use client'

import { useEffect } from 'react';

/**
 * JSON-LD结构化数据类型
 */
interface JsonLdData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

interface StructuredDataProps {
  data: JsonLdData;
}

/**
 * 结构化数据组件
 * 用于向页面添加JSON-LD结构化数据
 * 
 * @example
 * <StructuredData
 *   data={{
 *     '@context': 'https://schema.org',
 *     '@type': 'VideoGame',
 *     'name': 'Narrow One',
 *     'description': 'A casual shooting game with simple controls',
 *     // 其他游戏属性
 *   }}
 * />
 */
export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    // 创建script标签
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    
    // 添加到文档头部
    document.head.appendChild(script);
    
    // 清理函数
    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
  
  // 不渲染任何可见内容
  return null;
} 