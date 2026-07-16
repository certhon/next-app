import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LeadForm from '../../components/lead-form';
import { articles, getArticle, type ArticleBlock } from '../../lib/news-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: `${article.title}_礼乘财税`,
    description: article.seoDescription,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.seoDescription,
      url: `/news/${article.slug}`,
      publishedTime: article.date,
    },
  };
}

const renderBlock = (block: ArticleBlock, index: number) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={index} className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3">
          {block.text}
        </h2>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-2 my-4">
          {block.items.map((item) => (
            <li key={item} className="flex gap-2 text-slate-600 leading-relaxed">
              <span className="text-blue-700 shrink-0 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={index} className="text-slate-600 leading-relaxed my-4">
          {block.text}
        </p>
      );
  }
};

const ArticlePage = ({ params }: { params: { slug: string } }) => {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-10 md:py-14 max-w-3xl">
          <nav className="text-sm text-slate-500 mb-6" aria-label="面包屑">
            <Link href="/" className="hover:text-blue-700">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-blue-700">财税知识</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{article.category}</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 leading-snug mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span className="text-blue-700 bg-blue-50 rounded-full px-2.5 py-1 text-xs">
              {article.category}
            </span>
            <time dateTime={article.date}>{article.date}</time>
            <span>礼乘财税</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-10 md:py-12 max-w-3xl">
        {article.blocks.map(renderBlock)}

        <div className="mt-10 rounded-xl bg-blue-50 border border-blue-100 p-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            以上内容为一般性介绍，具体政策以办理当期的最新规定为准。您的情况适用哪种方案，
            欢迎电话或微信咨询礼乘财税，资深财务顾问免费为您解答。
          </p>
        </div>
      </article>

      <section className="container mx-auto px-4 pb-10 max-w-3xl">
        <h2 className="text-xl font-bold text-slate-900 mb-4">继续阅读</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {others.map((a) => (
            <Link
              key={a.slug}
              href={`/news/${a.slug}`}
              className="group rounded-xl bg-white border border-slate-100 shadow-sm p-5 hover:shadow-md transition-all"
            >
              <span className="text-xs text-blue-700 bg-blue-50 rounded-full px-2.5 py-1">
                {a.category}
              </span>
              <h3 className="mt-2.5 text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                {a.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-14 max-w-3xl">
        <LeadForm
          title="有具体问题想问？"
          subtitle="留下联系方式，顾问按您的实际情况解答"
        />
      </section>
    </>
  );
};

export default ArticlePage;
