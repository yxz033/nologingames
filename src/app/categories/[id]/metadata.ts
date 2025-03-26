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
      title: 'Category Not Found - NoLoginGames',
      description: 'The requested game category could not be found.',
      openGraph: {
        title: 'Category Not Found - NoLoginGames',
        description: 'The requested game category could not be found.',
        type: 'website',
        images: [
          {
            url: '/images/og-404.jpg',
            width: 1200,
            height: 630,
            alt: 'Category Not Found - NoLoginGames',
          }
        ]
      },
      alternates: {
        canonical: '/categories/not-found'
      }
    };
  }

  const categoryId = resolvedParams.id;

  return {
    title: `${category.name} Games - Free Online Games | NoLoginGames`,
    description: `🎮 ${category.description} Dive into our exciting collection of free online ${category.name.toLowerCase()} games! Play instantly in your browser, no download or registration needed.`,
    keywords: `${category.name.toLowerCase()} games, free online games, browser games, HTML5 games, no login games, ${category.name.toLowerCase()} browser games`,
    openGraph: {
      title: `${category.name} Games - Free Online Games | NoLoginGames`,
      description: `🎮 ${category.description} Dive into our exciting collection of free online ${category.name.toLowerCase()} games! Play instantly in your browser, no download or registration needed.`,
      type: 'website',
      images: [
        {
          url: `/images/categories/${categoryId}.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.name} Games - Free Online Games`,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} Games - Free Online Games | NoLoginGames`,
      description: `🎮 ${category.description} Dive into our exciting collection of free online ${category.name.toLowerCase()} games! Play instantly in your browser, no download or registration needed.`,
      images: [`/images/categories/${categoryId}.jpg`],
    },
    alternates: {
      canonical: `/categories/${categoryId}`
    }
  };
} 