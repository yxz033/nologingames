import { HomePage } from './home-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Online Games | No Login Required | Action, RPG & More',
  description: '🎮 Discover the best free online games! Browse our curated collection of action-packed adventures, RPGs, shooting games & casual fun. Play instantly, no registration needed.',
  keywords: 'free online games, no login games, browser games, HTML5 games, action games, RPG games, shooting games, casual games',
  openGraph: {
    title: 'Free Online Games | No Login Required | Action, RPG & More',
    description: '🎮 Discover the best free online games! Browse our curated collection of action-packed adventures, RPGs, shooting games & casual fun. Play instantly, no registration needed.',
    type: 'website',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'NoLoginGames - Free Online Games Collection',
      }
    ]
  },
  alternates: {
    canonical: '/'
  }
};

export default function Page() {
  return <HomePage />;
}
