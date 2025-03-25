'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  return paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`;
    const label = path.charAt(0).toUpperCase() + path.slice(1);
    return { label, href };
  });
}

export function Breadcrumb() {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  if (pathname === '/') return null;

  return (
    <nav aria-label="面包屑导航" className="flex items-center space-x-2 text-sm text-gray-600 py-4">
      <Link 
        href="/"
        className="flex items-center hover:text-blue-600 transition-colors duration-200"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">首页</span>
      </Link>

      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          {index === breadcrumbs.length - 1 ? (
            <span className="font-medium text-gray-900">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
} 