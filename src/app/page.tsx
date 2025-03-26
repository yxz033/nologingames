import { HomePage } from './home-page';
import { homePageTemplate } from '@/lib/seo/templates';

export const metadata = homePageTemplate;

export default function Page() {
  return <HomePage />;
}
