'use client'

import { useTranslation } from '@/contexts/language-context'
import { Game } from '@/types/game'

interface GameDetailProps {
  game: Game
}

export function GameDetail({ game }: GameDetailProps) {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-8">
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