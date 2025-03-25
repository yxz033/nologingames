'use client'

import { SearchBar } from '@/components/ui/search-bar';
import { useSearchParams } from 'next/navigation';

interface SearchSectionProps {
  totalCount: number;
  filteredCount: number;
  categoryName: string;
}

export function SearchSection({ totalCount, filteredCount, categoryName }: SearchSectionProps) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const query = searchQuery.toLowerCase();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
      <SearchBar />
      <div className="text-sm text-gray-500">
        {query 
          ? `在 ${categoryName} 中找到 ${filteredCount} 个游戏`
          : `共 ${totalCount} 个游戏`
        }
      </div>
    </div>
  );
} 