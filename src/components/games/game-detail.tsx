'use client'

import { useTranslation } from '@/contexts/language-context'
import { Game } from '@/types/game'
import StructuredData from '@/components/seo/StructuredData'
import { generateGameSchema, generateBreadcrumbSchema } from '@/lib/seo/schema'

interface GameDetailProps {
  game: Game
}

export function GameDetail({ game }: GameDetailProps) {
  const { t } = useTranslation()

  // 生成游戏结构化数据
  const gameSchema = generateGameSchema({
    id: game.id,
    title: game.title,
    description: game.description,
    imageUrl: game.imageUrl,
    developer: game.developer,
    genre: game.genre,
    releaseDate: game.releaseDate,
    controls: game.controls,
    platform: game.platform,
    rating: game.rating,
    plays: game.plays
  })
  
  // 生成面包屑导航结构化数据
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Games', url: '/games' },
    { name: game.title, url: `/games/${game.id}` }
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 添加结构化数据 */}
      <StructuredData data={gameSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Game iframe */}
        <div className="lg:col-span-2">
          <div className="aspect-video bg-card rounded-lg overflow-hidden">
            <iframe
              src={game.url}
              className="w-full h-full"
              allow="fullscreen"
            />
          </div>
        </div>

        {/* Game info */}
        <div className="space-y-8">
          <div className="bg-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{t('game.stats.title')}</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.stats.plays')}</dt>
                <dd>{game.plays}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.stats.rating')}</dt>
                <dd>{game.rating}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{t('game.info.title')}</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.info.developer')}</dt>
                <dd>{game.developer}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.info.genre')}</dt>
                <dd>{game.genre}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.info.platform')}</dt>
                <dd>{game.platform}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.info.controls')}</dt>
                <dd>{game.controls}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.info.version')}</dt>
                <dd>{game.version}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.info.releaseDate')}</dt>
                <dd>{game.releaseDate}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.info.lastUpdated')}</dt>
                <dd>{game.lastUpdated}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{t('game.requirements.title')}</h2>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.requirements.browsers')}</dt>
                <dd>{game.browsers}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.requirements.graphics')}</dt>
                <dd>{game.graphics}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.requirements.processor')}</dt>
                <dd>{game.processor}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">{t('game.requirements.memory')}</dt>
                <dd>{game.memory}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-card rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{t('game.tags.title')}</h2>
            <div className="flex flex-wrap gap-2">
              {game.tags?.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-accent rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">{t('game.content.description')}</h2>
        <p className="text-muted-foreground">{game.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">{t('game.content.screenshots')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {game.screenshots?.map((screenshot: string, index: number) => (
            <img
              key={index}
              src={screenshot}
              alt={`${game.title} screenshot ${index + 1}`}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  )
} 