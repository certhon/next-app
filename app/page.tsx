import Link from 'next/link';
import type { Metadata } from 'next';
import CtaButtons from './components/cta-buttons';
import LeadForm from './components/lead-form';
import { faqs } from './lib/faq-data';
import { articles } from './lib/news-data';
import { coreServiceSlugs, services } from './lib/services-data';
import { siteConfig } from './lib/site-config';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// 核心服务排前，其余保持原顺序
const orderedServices = [
  ...coreServiceSlugs.map((slug) => services.find((s) => s.slug === slug)!),
  ...services.filter((s) => !coreServiceSlugs.includes(s.slug)),
];

const scenarios = [
  {
    title: '公司刚起步',
    desc: '注册、刻章、开户、税务登记一站办齐，再由专属会计接手记账报税，创业第一年财税不操心。',
    links: [
      { slug: 'gongshang-zhuce', text: '工商注册' },
      { slug: 'daili-jizhang', text: '代理记账' },
    ],
  },
  {
    title: '想换个靠谱的代账',
    desc: '对现在的代账不满意？我们负责清点账套、核对申报状态、出具交接清单，衔接期申报盯守，换所不断档。',
    links: [{ slug: 'daili-jizhang', text: '代理记账' }],
  },
  {
    title: '公司异常了 / 不想经营了',
    desc: '先免费诊断异常原因，解除异常后按您的打算继续经营或规范注销，避免拖成吊销影响个人信用。',
    links: [
      { slug: 'jiechu-yichang', text: '解除异常' },
      { slug: 'qiye-zhuxiao', text: '企业注销' },
    ],
  },
];

const HomePage = () => {
  const featuredFaqs = faqs.filter((f) => f.featured);

  return (
    <>
      {/* Hero：价值主张 + 双 CTA + 信任数字带 */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-3/5">
              <p className="inline-block rounded-full bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 mb-5">
                持代理记账许可证 · 资深财务直接对接
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
                上海中小企业的
                <br className="hidden md:block" />
                一站式财税伙伴
              </h1>
              <p className="text-lg text-slate-600 mb-4">
                公司注册 · 代理记账 · 税务疑难处理——没有销售转手，
                从咨询起对接的就是做账会计本人。{siteConfig.slogan}。
              </p>
              <p className="inline-flex items-center gap-2 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 font-semibold px-4 py-2 mb-8">
                🎉 注册公司免费，最快 1 天拿证
              </p>
              <CtaButtons source="hero" />
            </div>
            <div className="md:w-2/5 hidden md:block">
              <img
                src="/11.jpg"
                alt="礼乘财税专业服务团队"
                width={563}
                height={375}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {siteConfig.trustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white border border-slate-100 shadow-sm px-4 py-5 text-center"
              >
                <dt className="order-2 text-sm text-slate-500 mt-1">{stat.label}</dt>
                <dd className="text-2xl md:text-3xl font-bold text-blue-700">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 服务网格 */}
      <section className="py-14 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">服务项目</h2>
          <p className="text-slate-500 text-center mb-10">
            12 项企业财税服务，报价即全价，无隐形收费
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {orderedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl bg-white border border-slate-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all flex flex-col"
              >
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-grow">{service.brief}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-orange-600">{service.price}</span>
                  <span className="text-sm text-slate-400 group-hover:text-blue-700 transition-colors">
                    了解详情 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 服务承诺 */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">
            为什么选择礼乘
          </h2>
          <p className="text-slate-500 text-center mb-10">四条承诺，写进服务协议</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.promises.map((p, i) => (
              <div key={p.title} className="rounded-xl bg-slate-50 border border-slate-100 p-6">
                <div className="w-9 h-9 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 典型服务场景 */}
      <section className="py-14 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">
            您现在的情况，我们都常处理
          </h2>
          <p className="text-slate-500 text-center mb-10">对号入座，直接看解决路径</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {scenarios.map((sc) => (
              <div key={sc.title} className="rounded-xl bg-white border border-slate-100 shadow-sm p-6 flex flex-col">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{sc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{sc.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sc.links.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/services/${l.slug}`}
                      className="rounded-full bg-blue-50 text-blue-700 text-sm px-3 py-1 hover:bg-blue-100 transition-colors"
                    >
                      {l.text} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 精选：原生 details 手风琴，零 JS 且可被搜索引擎收录 */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-2">常见问题</h2>
          <p className="text-slate-500 text-center mb-10">
            敏感问题也直说，
            <Link href="/faq" className="text-blue-700 hover:underline">
              查看全部问答 →
            </Link>
          </p>
          <div className="space-y-3">
            {featuredFaqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-slate-200 bg-slate-50 px-5 py-4"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between text-base font-medium text-slate-900">
                  {f.q}
                  <span className="text-slate-400 group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 财税知识预览 */}
      <section className="py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">财税知识</h2>
              <p className="text-slate-500">办事指南与政策要点，持续更新</p>
            </div>
            <Link href="/news" className="text-blue-700 text-sm font-medium hover:underline shrink-0">
              全部文章 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className="group rounded-xl bg-white border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all"
              >
                <span className="text-xs text-blue-700 bg-blue-50 rounded-full px-2.5 py-1">
                  {a.category}
                </span>
                <h3 className="mt-3 text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors leading-snug">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3">{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 留资表单 */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <LeadForm />
        </div>
      </section>
    </>
  );
};

export default HomePage;
