import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from 'next'
import { LanguageProvider } from '@/contexts/language-context'
import { ClientLayout } from '@/components/layout/client-layout'
import { GoogleAnalytics } from '@/components/analytics/google-analytics'

const inter = Inter({ subsets: ["latin"] })

// 基础URL配置
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nologingames.online'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'NoLoginGames - Free Online Games | Play Without Login',
    template: '%s | NoLoginGames'
  },
  description: '🎮 Play 1000+ free online games instantly! No login required. Action, RPG, shooting & casual games. Mobile-friendly, no download needed.',
  keywords: 'free online games, no login games, browser games, HTML5 games, casual games, action games, shooting games, RPG games',
  openGraph: {
    title: 'NoLoginGames - Free Online Games | Play Without Login',
    description: '🎮 Play 1000+ free online games instantly! No login required. Action, RPG, shooting & casual games. Mobile-friendly, no download needed.',
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'NoLoginGames',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'NoLoginGames - Free Online Games',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NoLoginGames - Free Online Games | Play Without Login',
    description: '🎮 Play 1000+ free online games instantly! No login required. Action, RPG, shooting & casual games. Mobile-friendly, no download needed.',
    images: ['/images/og-default.jpg'],
    creator: '@nologingames',
  },
  alternates: {
    canonical: '/'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <LanguageProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}
