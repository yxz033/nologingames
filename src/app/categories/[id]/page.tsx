import { categoryInfo } from '@/data/categories';
import { CategoryPage } from './category-page';
import { Metadata } from 'next';
import { generateCategoryPageSEO } from '@/lib/seo/generators';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return generateCategoryPageSEO({ categoryId: id });
}

export function generateStaticParams() {
  return Object.keys(categoryInfo).map((id) => ({ id }));
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <CategoryPage params={resolvedParams} />;
} 