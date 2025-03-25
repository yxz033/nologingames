// 基础页面属性
export interface BasePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// 动态路由页面属性
export interface DynamicPageProps extends BasePageProps {
  params: Promise<{ id: string }>;
}

// 主页属性
export type HomePageProps = BasePageProps; 