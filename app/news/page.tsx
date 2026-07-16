import type { Metadata } from 'next';
import NewsList from '../components/news-list';
import { articles } from '../lib/news-data';

export const metadata: Metadata = {
  title: '财税知识_政策解读_办事指南_礼乘财税',
  description:
    '礼乘财税知识频道：公司注册流程、代理记账常识、税务政策解读、经营异常处理、社保公积金、资质许可等实用文章，帮企业老板把财税这件事看明白。',
  alternates: { canonical: '/news' },
};

const NewsPage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">财税知识</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            办事指南、政策解读、常见问题——用大白话讲清企业财税，持续更新。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <NewsList articles={articles} />
        </div>
      </section>
    </>
  );
};

export default NewsPage;
