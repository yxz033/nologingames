import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      {...props}
    />
  );
}

export { Skeleton };

// 游戏卡片骨架屏
export function GameCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-video">
        <Skeleton className="absolute inset-0" />
      </div>
      <div className="p-4 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-6 w-16" />
        </div>
      </div>
    </div>
  );
}

// 游戏详情骨架屏
export function GameDetailSkeleton() {
  return (
    <div className="space-y-8">
      {/* 标题区域 */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-1/3 mb-2" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要内容区 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 游戏iframe */}
            <Skeleton className="aspect-video w-full rounded-lg" />
            
            {/* 游戏截图 */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Skeleton className="aspect-video rounded-lg" />
                <Skeleton className="aspect-video rounded-lg" />
                <Skeleton className="aspect-video rounded-lg" />
              </div>
            </div>

            {/* 相关游戏 */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-32" />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Skeleton className="aspect-video rounded-lg" />
                <Skeleton className="aspect-video rounded-lg" />
                <Skeleton className="aspect-video rounded-lg" />
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="space-y-8">
            {/* 游戏统计 */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <Skeleton className="h-6 w-24" />
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="h-8" />
                <Skeleton className="h-8" />
                <Skeleton className="h-8" />
                <Skeleton className="h-8" />
              </div>
            </div>

            {/* 游戏信息 */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <Skeleton className="h-6 w-24" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 