import Link from 'next/link';
import type { Metadata } from 'next';
import { coreServiceSlugs, services } from './lib/services-data';
import { siteConfig } from './lib/site-config';

export const metadata: Metadata = {
  title: '页面不存在_礼乘财税',
  robots: { index: false, follow: true },
};

// 自定义 404：中文提示 + 热门服务导流，把走丢的流量接回来
const NotFound = () => {
  const hotServices = coreServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-2xl text-center">
      <p className="text-6xl font-bold text-blue-700 mb-4">404</p>
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">这个页面不存在或已被移动</h1>
      <p className="text-slate-500 mb-10">
        可能是链接输错了，或页面已经更新。您要找的服务应该在下面：
      </p>

      <div className="grid grid-cols-2 gap-3 mb-10">
        {hotServices.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-xl bg-white border border-slate-200 px-4 py-3.5 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
          >
            {s.title}
          </Link>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-7 py-3 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
        >
          回到首页
        </Link>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center justify-center rounded-xl border-2 border-blue-700 px-7 py-3 text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors"
        >
          直接电话咨询 {siteConfig.phone}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
