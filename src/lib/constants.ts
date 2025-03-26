/**
 * 环境变量与常量配置
 */

// 基础URL - 优先使用环境变量中的BASE_URL,否则使用默认值
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nologingames.online';

// 站点信息
export const siteInfo = {
  name: 'NoLoginGames',
  description: 'Free Online Games | Play Without Login',
  twitter: '@nologingames',
  locale: 'en_US',
};

// API端点
export const apiEndpoints = {
  games: '/api/games',
  categories: '/api/categories',
  search: '/api/search',
}; 