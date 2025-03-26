# SEO 最佳实践指南

本文档提供了NoLoginGames游戏门户网站的SEO最佳实践指南,以确保所有页面都具有良好的SEO优化。

## 目录

1. [SEO自动化系统概述](#seo自动化系统概述)
2. [Metadata基本要求](#metadata基本要求)
3. [SEO模板使用指南](#seo模板使用指南)
4. [添加新页面SEO指南](#添加新页面seo指南)
5. [SEO验证与测试](#seo验证与测试)
6. [常见问题解决](#常见问题解决)

## SEO自动化系统概述

NoLoginGames实现了一套SEO自动化系统,通过预定义的模板、生成器函数和验证工具,确保所有页面都遵循一致的SEO最佳实践。该系统的主要组件包括:

- **SEO模板**: 针对不同类型页面的预定义元数据模板
- **生成器函数**: 用于动态生成特定页面元数据的函数
- **SEO组件**: 可重用的SEO相关React组件
- **验证工具**: 用于检查SEO合规性的自动化脚本

## Metadata基本要求

每个页面的元数据必须包含以下基本要素:

| 元数据类型 | 要求 | 示例 |
|---------|------|------|
| 标题 (title) | 60字符以内,包含主要关键词 | `纳罗沃恩 - 免费在线射击游戏 \| NoLoginGames` |
| 描述 (description) | 150字符以内,包含关键词和吸引点 | `畅玩纳罗沃恩免费在线射击游戏!简单操作,休闲射击,无需下载,即开即玩。在NoLoginGames享受流畅游戏体验!` |
| 规范链接 (canonical) | 完整URL路径 | `https://nologingames.online/games/narrow-one` |
| Open Graph | 标题、描述、图片、类型 | 见下文Open Graph示例 |
| Twitter Cards | 卡片类型、标题、描述、图片 | 见下文Twitter Cards示例 |

### Open Graph 示例

```typescript
openGraph: {
  title: '纳罗沃恩 - 免费在线射击游戏 | NoLoginGames',
  description: '畅玩纳罗沃恩免费在线射击游戏!简单操作,休闲射击,无需下载,即开即玩。',
  type: 'website',
  url: 'https://nologingames.online/games/narrow-one',
  images: [
    {
      url: '/images/games/narrow-one.jpg',
      width: 1200,
      height: 630,
      alt: '纳罗沃恩游戏截图',
    }
  ],
}
```

### Twitter Cards 示例

```typescript
twitter: {
  card: 'summary_large_image',
  title: '纳罗沃恩 - 免费在线射击游戏 | NoLoginGames',
  description: '畅玩纳罗沃恩免费在线射击游戏!简单操作,休闲射击,无需下载,即开即玩。',
  images: ['/images/games/narrow-one.jpg'],
}
```

## SEO模板使用指南

SEO自动化系统提供了不同类型页面的预定义模板,位于`src/lib/seo/templates.ts`。以下是主要模板的使用示例:

### 静态页面模板

用于内容相对固定的页面(如首页、关于页等):

```typescript
// src/app/about/page.tsx
import { staticPageTemplate } from '@/lib/seo/templates';

export const metadata = {
  ...staticPageTemplate,
  title: '关于我们 | NoLoginGames',
  description: 'NoLoginGames是一个提供免费在线游戏的平台,无需注册登录即可畅玩。了解我们的故事和使命。',
  alternates: {
    canonical: '/about'
  }
};
```

### 动态页面模板

用于内容动态生成的页面(如游戏详情页、分类页等):

```typescript
// src/app/games/[id]/page.tsx
import { games } from '@/data/games';
import { generateGamePageSEO } from '@/lib/seo/generators';

export async function generateMetadata({ params }: PageProps) {
  return generateGamePageSEO({ gameId: params.id });
}
```

## 添加新页面SEO指南

### 静态页面

1. 导入适当的SEO模板
2. 扩展模板并自定义必要的字段
3. 导出`metadata`对象

```typescript
// src/app/faq/page.tsx
import { staticPageTemplate } from '@/lib/seo/templates';

export const metadata = {
  ...staticPageTemplate,
  title: '常见问题 | NoLoginGames',
  description: '查看NoLoginGames平台上的常见问题解答。了解如何开始游戏、技术要求和更多信息。',
  alternates: {
    canonical: '/faq'
  }
};
```

### 动态路由页面

1. 导入适当的SEO生成器函数
2. 使用`generateMetadata`异步函数
3. 返回生成器函数结果

```typescript
// src/app/categories/[id]/page.tsx
import { generateCategoryPageSEO } from '@/lib/seo/generators';

export async function generateMetadata({ params }: PageProps) {
  return generateCategoryPageSEO({ categoryId: params.id });
}
```

## SEO验证与测试

### 手动验证

使用以下工具验证SEO设置:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Meta Tags](https://metatags.io/)

### 自动验证

项目包含SEO验证脚本`scripts/check-seo.js`,可通过以下命令运行:

```bash
node scripts/check-seo.js
```

该脚本将检查:
1. 所有页面是否导出元数据
2. 元数据是否包含必需字段
3. 规范链接是否正确设置
4. Open Graph和Twitter卡片是否完整

## 常见问题解决

### 1. 元数据不显示在社交媒体分享中

**问题**: 分享链接到社交媒体时,预览没有显示正确的标题、描述或图片。

**解决方案**:
- 确保Open Graph标签正确设置
- 图片URL必须是绝对路径
- 使用对应平台的验证工具检查元数据
- 清除平台缓存(使用调试工具)

### 2. 规范链接配置错误

**问题**: 页面显示警告"此页面包含重复内容"。

**解决方案**:
- 确保规范链接是完整的URL(包含域名)
- 检查动态路由中的规范链接参数是否正确
- 验证baseUrl配置是否正确

### 3. 动态页面元数据生成错误

**问题**: 动态路由页面没有正确生成元数据。

**解决方案**:
- 确保`generateMetadata`函数是异步的
- 检查数据获取逻辑是否正确
- 验证参数传递是否正确
- 添加错误处理和回退值

### 4. 图片尺寸问题

**问题**: 社交媒体分享图片被裁剪或显示不完整。

**解决方案**:
- 使用推荐尺寸:1200x630像素
- 确保图片URL是可访问的
- 在OpenGraph标签中指定宽度和高度
- 使用`alt`属性提供替代文本 