import { Metadata } from 'next';
import { categoryInfo } from '@/data/categories';

interface MetadataProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = categoryInfo[resolvedParams.id];
  
  if (!category) {
    return {
      title: 'Category Not Found'
    };
  }

  return {
    title: `${category.name} 🎮 NoLoginGames`,
    description: category.description,
    openGraph: {
      title: `${category.name} 🎮 NoLoginGames`,
      description: category.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} 🎮 NoLoginGames`,
      description: category.description,
    },
  };
} 