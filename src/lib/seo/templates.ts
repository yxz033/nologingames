import { Metadata } from 'next';
import { baseUrl } from '@/lib/constants';

/**
 * 基础元数据模板 - 所有页面共享的基本SEO设置
 */
export const baseTemplate: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: 'NoLoginGames',
  authors: [{ name: 'NoLoginGames Team' }],
  generator: 'Next.js',
  keywords: ['free online games', 'no login games', 'browser games', 'HTML5 games', 'casual games'],
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3B82F6' },
    { media: '(prefers-color-scheme: dark)', color: '#1F2937' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
};

/**
 * 首页元数据模板
 */
export const homePageTemplate: Metadata = {
  ...baseTemplate,
  title: {
    default: 'NoLoginGames - Free Online Games | Play Without Login',
    template: '%s | NoLoginGames'
  },
  description: '🎮 Play 1000+ free online games instantly! No login required. Action, RPG, shooting & casual games. Mobile-friendly, no download needed.',
  alternates: {
    canonical: baseUrl
  },
  openGraph: {
    title: 'NoLoginGames - Free Online Games | Play Without Login',
    description: '🎮 Play 1000+ free online games instantly! No login required. Action, RPG, shooting & casual games. Mobile-friendly, no download needed.',
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'NoLoginGames',
    images: [
      {
        url: `${baseUrl}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'NoLoginGames - Free Online Games',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NoLoginGames - Free Online Games | Play Without Login',
    description: '🎮 Play 1000+ free online games instantly! No login required. Action, RPG, shooting & casual games. Mobile-friendly, no download needed.',
    images: [`${baseUrl}/images/og-default.jpg`],
    creator: '@nologingames',
  },
};

/**
 * 游戏详情页元数据模板函数
 */
export const gamePageTemplate = (game: {
  title: string;
  description: string;
  id: string;
  imageUrl?: string;
  developer?: string;
  genre?: string;
}): Metadata => ({
  ...baseTemplate,
  title: `${game.title} | Play Free Online Games`,
  description: `Play ${game.title} online for free! ${game.description.substring(0, 120)}${game.description.length > 120 ? '...' : ''}`,
  alternates: {
    canonical: `${baseUrl}/games/${game.id}`
  },
  openGraph: {
    title: `${game.title} | Play Free Online Games`,
    description: `Play ${game.title} online for free! ${game.description.substring(0, 120)}${game.description.length > 120 ? '...' : ''}`,
    type: 'website',
    url: `${baseUrl}/games/${game.id}`,
    siteName: 'NoLoginGames',
    locale: 'en_US',
    images: [
      {
        url: game.imageUrl ? `${baseUrl}${game.imageUrl}` : `${baseUrl}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: game.title,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${game.title} | Play Free Online Games`,
    description: `Play ${game.title} online for free! ${game.description.substring(0, 120)}${game.description.length > 120 ? '...' : ''}`,
    images: [game.imageUrl ? `${baseUrl}${game.imageUrl}` : `${baseUrl}/images/og-default.jpg`],
    creator: '@nologingames',
  },
});

/**
 * 分类页元数据模板函数
 */
export const categoryPageTemplate = (category: {
  id: string;
  name: string;
  description: string;
}): Metadata => ({
  ...baseTemplate,
  title: `${category.name} | Free Online ${category.name} Games`,
  description: `Play free online ${category.name.toLowerCase()} games. No download, no login required. Enjoy the best ${category.name.toLowerCase()} games collection.`,
  alternates: {
    canonical: `${baseUrl}/categories/${category.id}`
  },
  openGraph: {
    title: `${category.name} | Free Online ${category.name} Games`,
    description: `Play free online ${category.name.toLowerCase()} games. No download, no login required. Enjoy the best ${category.name.toLowerCase()} games collection.`,
    type: 'website',
    url: `${baseUrl}/categories/${category.id}`,
    siteName: 'NoLoginGames',
    locale: 'en_US',
    images: [
      {
        url: `${baseUrl}/images/categories/${category.id}.jpg`,
        width: 1200,
        height: 630,
        alt: `${category.name} Games`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${category.name} | Free Online ${category.name} Games`,
    description: `Play free online ${category.name.toLowerCase()} games. No download, no login required. Enjoy the best ${category.name.toLowerCase()} games collection.`,
    images: [`${baseUrl}/images/categories/${category.id}.jpg`],
    creator: '@nologingames',
  },
});

/**
 * 搜索页元数据模板函数
 */
export const searchPageTemplate = (query?: string): Metadata => ({
  ...baseTemplate,
  title: query ? `Search: ${query} | NoLoginGames` : 'Search Games | NoLoginGames',
  description: query
    ? `Search results for "${query}". Find and play free online games without login or download.`
    : 'Search our collection of free online games. Find action, puzzle, sports, racing games and more.',
  alternates: {
    canonical: `${baseUrl}/search${query ? `?q=${encodeURIComponent(query)}` : ''}`
  },
  robots: {
    index: !query, // 仅索引主搜索页,不索引搜索结果页
    follow: true,
  },
  openGraph: {
    title: query ? `Search: ${query} | NoLoginGames` : 'Search Games | NoLoginGames',
    description: query
      ? `Search results for "${query}". Find and play free online games without login or download.`
      : 'Search our collection of free online games. Find action, puzzle, sports, racing games and more.',
    type: 'website',
    url: `${baseUrl}/search${query ? `?q=${encodeURIComponent(query)}` : ''}`,
    siteName: 'NoLoginGames',
    locale: 'en_US',
    images: [
      {
        url: `${baseUrl}/images/og-search.jpg`,
        width: 1200,
        height: 630,
        alt: 'Search NoLoginGames',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: query ? `Search: ${query} | NoLoginGames` : 'Search Games | NoLoginGames',
    description: query
      ? `Search results for "${query}". Find and play free online games without login or download.`
      : 'Search our collection of free online games. Find action, puzzle, sports, racing games and more.',
    images: [`${baseUrl}/images/og-search.jpg`],
    creator: '@nologingames',
  },
});

/**
 * 404页面元数据模板
 */
export const notFoundTemplate = (type: string = 'Page'): Metadata => ({
  ...baseTemplate,
  title: `${type} Not Found | NoLoginGames`,
  description: `Sorry, the ${type.toLowerCase()} you're looking for cannot be found. Try browsing our collection of free online games instead.`,
  alternates: {
    canonical: `${baseUrl}/404`
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: `${type} Not Found | NoLoginGames`,
    description: `Sorry, the ${type.toLowerCase()} you're looking for cannot be found. Try browsing our collection of free online games instead.`,
    type: 'website',
    url: `${baseUrl}/404`,
    siteName: 'NoLoginGames',
    locale: 'en_US',
    images: [
      {
        url: `${baseUrl}/images/og-404.jpg`,
        width: 1200,
        height: 630,
        alt: 'Page Not Found',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${type} Not Found | NoLoginGames`,
    description: `Sorry, the ${type.toLowerCase()} you're looking for cannot be found. Try browsing our collection of free online games instead.`,
    images: [`${baseUrl}/images/og-404.jpg`],
    creator: '@nologingames',
  },
}); 