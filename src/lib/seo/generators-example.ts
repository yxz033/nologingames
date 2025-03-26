import { Metadata } from 'next';
import { games } from '@/data/games';
import { categoryInfo } from '@/data/categories';
import { 
  gamePageTemplate, 
  categoryPageTemplate, 
  notFoundTemplate,
  homePageTemplate
} from './templates-example';

/**
 * 生成游戏页面的元数据
 * @param param0 包含gameId的对象
 * @returns Metadata对象
 */
export async function generateGamePageSEO({ 
  gameId 
}: { 
  gameId: string 
}): Promise<Metadata> {
  try {
    // 查找游戏
    const game = games.find(g => g.id === gameId);
    
    // 如果找不到游戏,返回404元数据
    if (!game) {
      console.warn(`Game not found with ID: ${gameId}`);
      return notFoundTemplate('Game');
    }
    
    // 返回游戏页面元数据
    return gamePageTemplate({
      id: game.id,
      title: game.title,
      description: game.description,
      imageUrl: game.imageUrl,
      developer: game.developer,
      genre: game.genre
    });
  } catch (error) {
    console.error('Error generating game page SEO:', error);
    return notFoundTemplate('Game');
  }
}

/**
 * 生成分类页面的元数据
 * @param param0 包含categoryId的对象
 * @returns Metadata对象
 */
export async function generateCategoryPageSEO({
  categoryId
}: {
  categoryId: string
}): Promise<Metadata> {
  try {
    // 查找分类
    const category = categoryInfo[categoryId];
    
    // 如果找不到分类,返回404元数据
    if (!category) {
      console.warn(`Category not found with ID: ${categoryId}`);
      return notFoundTemplate('Category');
    }
    
    // 返回分类页面元数据
    return categoryPageTemplate({
      id: categoryId,
      name: category.name,
      description: category.description,
      imageUrl: category.imageUrl
    });
  } catch (error) {
    console.error('Error generating category page SEO:', error);
    return notFoundTemplate('Category');
  }
}

/**
 * 生成搜索页面的元数据
 * @param param0 包含query的对象
 * @returns Metadata对象
 */
export async function generateSearchPageSEO({
  query
}: {
  query?: string
}): Promise<Metadata> {
  // 如果没有查询参数,返回默认搜索页面元数据
  if (!query) {
    return {
      ...homePageTemplate,
      title: 'Search Games | NoLoginGames',
      description: 'Search our collection of free online games. Find action, puzzle, sports, racing games and more.',
    };
  }
  
  // 如果有查询参数,返回带有查询的搜索页面元数据
  return {
    ...homePageTemplate,
    title: `Search: ${query} | NoLoginGames`,
    description: `Search results for "${query}". Play free online games without login.`,
    robots: {
      index: false,  // 搜索结果页不应被索引
      follow: true,
    },
  };
}

/**
 * 使用示例:
 * 
 * // 在游戏详情页中
 * export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
 *   return generateGamePageSEO({ gameId: params.id });
 * }
 * 
 * // 在分类页中
 * export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
 *   return generateCategoryPageSEO({ categoryId: params.id });
 * }
 * 
 * // 在搜索页中
 * export async function generateMetadata({ searchParams }: { searchParams: { q?: string } }): Promise<Metadata> {
 *   return generateSearchPageSEO({ query: searchParams.q });
 * }
 */ 