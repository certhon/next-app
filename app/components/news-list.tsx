'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Article } from '../lib/news-data';

const categories = ['全部', '办事指南', '常见问题', '政策解读'] as const;

// 知识频道列表 + 分类筛选（纯客户端过滤，全部文章已在静态 HTML 中）
const NewsList = ({ articles }: { articles: Article[] }) => {
  const [active, setActive] = useState<(typeof categories)[number]>('全部');

  const filtered = active === '全部' ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="文章分类">
        {categories.map((c) => {
          const count = c === '全部' ? articles.length : articles.filter((a) => a.category === c).length;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? 'bg-blue-700 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              {c}（{count}）
            </button>
          );
        })}
      </div>

      <div className="space-y-5">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/news/${a.slug}`}
            className="group block rounded-xl bg-white border border-slate-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all"
          >
            <div className="flex items-center gap-3 text-xs mb-2.5">
              <span className="text-blue-700 bg-blue-50 rounded-full px-2.5 py-1">{a.category}</span>
              <time className="text-slate-400" dateTime={a.date}>
                {a.date}
              </time>
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
              {a.title}
            </h2>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">{a.excerpt}</p>
            <span className="mt-3 inline-block text-sm text-blue-700">阅读全文 →</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NewsList;
