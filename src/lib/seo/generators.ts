import { Metadata } from 'next';
import { games } from '@/data/games';
import { categoryInfo } from '@/data/categories';
import { 
  gamePageTemplate, 
  categoryPageTemplate, 
  notFoundTemplate,
  searchPageTemplate
} from './templates';

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
      description: category.description
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
  return searchPageTemplate(query);
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