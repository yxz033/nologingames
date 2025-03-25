import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from 'next'
import { LanguageProvider } from '@/contexts/language-context'
import { ClientLayout } from '@/components/layout/client-layout'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'NoLoginGames - Free Online Games',
  description: 'Play free online games without login required. Enjoy action, shooting, RPG and casual games.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}
