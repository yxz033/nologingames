import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoLoginGames - Free Online Games",
  description: "Play free online games without login required",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* 导航栏 */}
          <header className="bg-white shadow">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">NoLoginGames</div>
                <div className="space-x-4">
                  <a href="/" className="hover:text-blue-600">Home</a>
                  <a href="/categories/action" className="hover:text-blue-600">Action</a>
                  <a href="/categories/rpg" className="hover:text-blue-600">RPG</a>
                  <a href="/categories/casual" className="hover:text-blue-600">Casual</a>
                </div>
              </div>
            </nav>
          </header>

          {/* 主要内容区域 */}
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          {/* 页脚 */}
          <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  © 2024 NoLoginGames. All rights reserved.
                </div>
                <div className="space-x-4 text-sm">
                  <a href="/about" className="hover:text-blue-600">About</a>
                  <a href="/contact" className="hover:text-blue-600">Contact</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
