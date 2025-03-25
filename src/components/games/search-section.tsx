'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useTranslation } from '@/contexts/language-context'
import { ChangeEvent } from 'react'

interface SearchSectionProps {
  totalCount: number
  filteredCount: number
  categoryName: string
}

export function SearchSection({ filteredCount }: SearchSectionProps) {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchQuery = searchParams.get('q') || ''

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      <input
        type="search"
        placeholder={t('common.search.placeholder')}
        className="w-full max-w-xl px-4 py-2 rounded-lg border bg-background"
        value={searchQuery}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
      />
      <div className="text-sm text-muted-foreground">
        {t('common.search.total').replace('{count}', filteredCount.toString())}
      </div>
    </div>
  )
} 