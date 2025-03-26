import { baseUrl } from '../constants';

/**
 * 游戏页面结构化数据生成器
 */
export function generateGameSchema(game: {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  developer?: string;
  genre?: string;
  releaseDate?: string;
  controls?: string;
  platform?: string;
  rating?: number;
  plays?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    'name': game.title,
    'description': game.description,
    'url': `${baseUrl}/games/${game.id}`,
    'image': game.imageUrl ? `${baseUrl}${game.imageUrl}` : `${baseUrl}/images/og-default.jpg`,
    ...(game.developer && { 'author': {
      '@type': 'Organization',
      'name': game.developer
    }}),
    ...(game.genre && { 'genre': game.genre }),
    ...(game.releaseDate && { 'datePublished': game.releaseDate }),
    ...(game.controls && { 'gamePlatform': game.controls }),
    ...(game.platform && { 'playMode': game.platform }),
    ...(game.rating !== undefined && { 
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': game.rating,
        'bestRating': '5',
        'worstRating': '1',
        'ratingCount': game.plays || 0
      }
    }),
    'applicationCategory': 'Game',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    }
  };
}

/**
 * 分类页面结构化数据生成器
 */
export function generateCategorySchema(category: {
  id: string;
  name: string;
  description: string;
  gameCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': `${category.name} Games`,
    'description': category.description,
    'url': `${baseUrl}/categories/${category.id}`,
    ...(category.gameCount !== undefined && { 'numberOfItems': category.gameCount }),
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [], // 游戏列表应在使用时填充
      'numberOfItems': category.gameCount || 0,
      'name': `${category.name} Games Collection`
    }
  };
}

/**
 * 分类结构化数据类型
 */
interface CategorySchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  numberOfItems?: number;
  mainEntity?: {
    '@type': string;
    itemListElement: Array<unknown>;
    numberOfItems: number;
    name: string;
  };
  [key: string]: unknown;
}

/**
 * 添加游戏到分类结构化数据中
 */
export function addGameToCollectionSchema(schema: CategorySchema, game: {
  id: string;
  title: string;
  imageUrl?: string;
}, position: number) {
  if (!schema.mainEntity?.itemListElement) {
    return schema;
  }
  
  schema.mainEntity.itemListElement.push({
    '@type': 'ListItem',
    'position': position,
    'item': {
      '@type': 'VideoGame',
      'name': game.title,
      'url': `${baseUrl}/games/${game.id}`,
      'image': game.imageUrl ? `${baseUrl}${game.imageUrl}` : `${baseUrl}/images/og-default.jpg`,
    }
  });
  
  return schema;
}

/**
 * 主页结构化数据生成器
 */
export function generateHomeSchema(featuredGamesCount: number = 0) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'NoLoginGames - Free Online Games',
    'description': 'Play 1000+ free online games instantly! No login required. Action, RPG, shooting & casual games.',
    'url': baseUrl,
    ...(featuredGamesCount > 0 && {
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': [], // 游戏列表应在使用时填充
        'numberOfItems': featuredGamesCount
      }
    })
  };
}

/**
 * 404页面结构化数据生成器
 */
export function generateNotFoundSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Page Not Found | NoLoginGames',
    'description': 'Sorry, the page you are looking for cannot be found.',
    'url': `${baseUrl}/404`
  };
}

/**
 * 搜索页面结构化数据生成器
 */
export function generateSearchSchema(query?: string, resultsCount?: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SearchResultsPage',
    'name': query ? `Search Results for "${query}" | NoLoginGames` : 'Search Games | NoLoginGames',
    'description': query 
      ? `Search results for "${query}". Find and play free online games.` 
      : 'Search our collection of free online games.',
    'url': `${baseUrl}/search${query ? `?q=${encodeURIComponent(query)}` : ''}`,
    ...(resultsCount !== undefined && query && { 
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': [], // 搜索结果列表应在使用时填充
        'numberOfItems': resultsCount
      }
    })
  };
}

/**
 * 面包屑导航结构化数据生成器
 */
export function generateBreadcrumbSchema(items: {name: string; url: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  };
} 