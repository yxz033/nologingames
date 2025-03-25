'use client';

import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import { useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* 导航栏 */}
          <header className="bg-white shadow sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">NoLoginGames</div>
                
                {/* 移动端汉堡菜单按钮 */}
                <button 
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>

                {/* 桌面端导航链接 */}
                <div className="hidden lg:flex space-x-6">
                  <Link href="/" className="hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-100">Home</Link>
                  <Link href="/categories/action" className="hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-100">Action</Link>
                  <Link href="/categories/rpg" className="hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-100">RPG</Link>
                  <Link href="/categories/casual" className="hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-100">Casual</Link>
                </div>
              </div>

              {/* 移动端折叠菜单 */}
              <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 space-y-2`}>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Home</Link>
                <Link href="/categories/action" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Action</Link>
                <Link href="/categories/rpg" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">RPG</Link>
                <Link href="/categories/casual" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Casual</Link>
              </div>
            </nav>
          </header>

          {/* 主要内容区域 */}
          <main className="flex-grow container mx-auto px-4 py-6 sm:py-8">
            {children}
          </main>

          {/* 页脚 */}
          <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-sm text-gray-600">
                  © 2024 NoLoginGames. All rights reserved.
                </div>
                <div className="space-x-4 text-sm">
                  <Link href="/about" className="hover:text-blue-600 px-2 py-1">About</Link>
                  <Link href="/contact" className="hover:text-blue-600 px-2 py-1">Contact</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
