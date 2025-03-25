import { categoryInfo } from '@/data/categories';
import { CategoryPage } from './category-page';

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return Object.keys(categoryInfo).map((id) => ({ id }));
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <CategoryPage params={resolvedParams} />;
} 