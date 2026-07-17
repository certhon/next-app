import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CtaButtons from '../../components/cta-buttons';
import LeadForm from '../../components/lead-form';
import { getService, services } from '../../lib/services-data';
import { siteConfig } from '../../lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/services/${service.slug}`,
    },
  };
}

const ServiceDetailPage = ({ params }: { params: { slug: string } }) => {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      {/* 头部：面包屑 + 标题 + 价格锚点 + CTA */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <nav className="text-sm text-slate-500 mb-6" aria-label="面包屑">
            <Link href="/" className="hover:text-blue-700">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-blue-700">服务项目</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{service.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-10">
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {service.title}
              </h1>
              <p className="text-lg text-slate-600 mb-6">{service.tagline}</p>
              <CtaButtons
                source={`service_${service.slug}`}
                secondaryHref="#lead-form"
                secondaryText="留言让顾问回电"
              />
            </div>
            <div className="shrink-0 rounded-xl bg-white border border-slate-100 shadow-sm px-6 py-5 lg:text-center">
              <p className="text-sm text-slate-500 mb-1">服务费用</p>
              <p className={`text-2xl font-bold ${service.price ? 'text-orange-600' : 'text-blue-700'}`}>
                {service.price ?? '免费咨询报价'}
              </p>
              {service.priceNote && (
                <p className="mt-2 text-xs text-slate-400 max-w-[240px] leading-relaxed">
                  {service.priceNote}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-14 space-y-12 md:space-y-14">
        {/* 服务介绍 */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">服务介绍</h2>
          <div className="space-y-4">
            {service.intro.map((p) => (
              <p key={p.slice(0, 20)} className="text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* 纳税筹划专属：税负测算器入口 */}
        {service.slug === 'nashui-chouhua' && (
          <section className="rounded-2xl bg-orange-50 border border-orange-200 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-grow">
              <h2 className="text-lg font-bold text-slate-900 mb-1">先自己算算：小规模和一般纳税人差多少？</h2>
              <p className="text-sm text-slate-600">免费税负测算器：输入营收和进项比例，马上看到两种身份一年差多少税。</p>
            </div>
            <Link
              href="/tools/shuifu"
              className="shrink-0 inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 text-white text-sm font-semibold hover:bg-orange-700 transition-colors"
            >
              免费测算 →
            </Link>
          </section>
        )}

        {/* 工商注册专属：核名工具 + 选区指南入口 */}
        {service.slug === 'gongshang-zhuce' && (
          <>
            <section className="rounded-2xl bg-orange-50 border border-orange-200 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-slate-900 mb-1">还没想好名字能不能用？</h2>
                <p className="text-sm text-slate-600">先用免费核名：顾问人工核验重名与禁限用词，30 分钟内回电反馈。</p>
              </div>
              <Link
                href="/tools/heming"
                className="shrink-0 inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 text-white text-sm font-semibold hover:bg-orange-700 transition-colors"
              >
                免费核名 →
              </Link>
            </section>
            <section className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-1">注册在哪个区更合适？</h2>
              <p className="text-sm text-slate-600 mb-4">
                浦东、临港、崇明、奉贤……不同区的园区政策和适配行业差别不小，先看指南再决定。
              </p>
              <div className="flex flex-wrap gap-2">
                {['pudong', 'lingang', 'chongming', 'fengxian', 'minhang', 'songjiang'].map((slug) => {
                  const names: Record<string, string> = {
                    pudong: '浦东', lingang: '临港', chongming: '崇明',
                    fengxian: '奉贤', minhang: '闵行', songjiang: '松江',
                  };
                  return (
                    <Link
                      key={slug}
                      href={`/districts/${slug}`}
                      className="rounded-full bg-blue-50 text-blue-700 text-sm px-3.5 py-1.5 hover:bg-blue-100 transition-colors"
                    >
                      {names[slug]}注册
                    </Link>
                  );
                })}
                <Link
                  href="/districts"
                  className="rounded-full border border-blue-200 text-blue-700 text-sm px-3.5 py-1.5 hover:bg-blue-50 transition-colors"
                >
                  全部区域 →
                </Link>
              </div>
            </section>
          </>
        )}

        {/* 办理流程 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">办理流程</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {service.process.map((p, i) => (
              <li key={p.step} className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-slate-900">{p.step}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 所需材料 + 交付物 */}
        {(service.materials || service.deliverables) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.materials && (
              <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">需要您准备</h2>
                <ul className="space-y-2.5">
                  {service.materials.map((m) => (
                    <li key={m} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                      <span className="text-blue-700 shrink-0">☑</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {service.deliverables && (
              <div className="rounded-xl bg-blue-700 text-white shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">您将获得</h2>
                <ul className="space-y-2.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-blue-50 leading-relaxed">
                      <span className="shrink-0">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* 服务承诺 */}
        <section className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-5">服务承诺</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.promises.map((p) => (
              <div key={p.title}>
                <h3 className="font-semibold text-blue-700 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 页内 FAQ */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">关于{service.title}的常见问题</h2>
          <div className="space-y-3">
            {service.faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 bg-white px-5 py-4">
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
        </section>

        {/* 相关服务 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-5">相关服务</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group rounded-xl bg-white border border-slate-100 shadow-sm p-5 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{r.brief}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 留资表单：预选当前服务 */}
        <section className="max-w-3xl">
          <LeadForm
            defaultService={service.title}
            title={`咨询「${service.title}」服务`}
            subtitle="留下联系方式，顾问按您的情况给出方案与准确报价"
          />
        </section>
      </div>
    </>
  );
};

export default ServiceDetailPage;
