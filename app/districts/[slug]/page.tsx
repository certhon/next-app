import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CtaButtons from '../../components/cta-buttons';
import LeadForm from '../../components/lead-form';
import { districts, getDistrict } from '../../lib/districts-data';

export const dynamicParams = false;

export function generateStaticParams() {
  return districts.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const district = getDistrict(params.slug);
  if (!district) return {};
  return {
    title: district.seoTitle,
    description: district.seoDescription,
    alternates: { canonical: `/districts/${district.slug}` },
    openGraph: {
      title: district.seoTitle,
      description: district.seoDescription,
      url: `/districts/${district.slug}`,
    },
  };
}

const registerSteps = [
  { step: '选区与核名', desc: '确认注册区与园区方案，字号免费人工核验' },
  { step: '材料准备', desc: '身份证件、地址材料、章程等一次备齐' },
  { step: '提交登记', desc: '线上提交设立申请，跟进审核进度' },
  { step: '领照开业', desc: '最快 1 天拿证，刻章、开户、税务登记一并安排' },
];

const DistrictDetailPage = ({ params }: { params: { slug: string } }) => {
  const district = getDistrict(params.slug);
  if (!district) notFound();

  const others = districts.filter((d) => d.slug !== district.slug);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <nav className="text-sm text-slate-500 mb-6" aria-label="面包屑">
            <Link href="/" className="hover:text-blue-700">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/districts" className="hover:text-blue-700">上海各区注册</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{district.name}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              在{district.name}注册公司
            </h1>
            <p className="text-lg text-blue-700 font-medium mb-4">{district.tagline}</p>
            <p className="inline-flex items-center gap-2 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 font-semibold px-4 py-2 mb-6 text-sm">
              🎉 注册代办免费，最快 1 天拿证
            </p>
            <div>
              <CtaButtons
                source={`district_${district.slug}`}
                secondaryHref="#lead-form"
                secondaryText="留言让顾问回电"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-14 space-y-12 md:space-y-14">
        {/* 区域介绍 */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{district.shortName}的注册环境</h2>
          <div className="space-y-4">
            {district.intro.map((p) => (
              <p key={p.slice(0, 20)} className="text-slate-600 leading-relaxed">{p}</p>
            ))}
          </div>
        </section>

        {/* 区域亮点 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">在{district.shortName}注册的特点</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {district.highlights.map((h) => (
              <div key={h.title} className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
                <h3 className="font-semibold text-blue-700 mb-2">{h.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 适合谁 + 注意点 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-blue-700 text-white shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">适合注册在{district.shortName}的企业</h2>
            <ul className="space-y-2.5">
              {district.suitable.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-blue-50 leading-relaxed">
                  <span className="shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">注册前要留意</h2>
            <ul className="space-y-2.5">
              {district.notes.map((n) => (
                <li key={n} className="flex gap-2 text-sm text-slate-600 leading-relaxed">
                  <span className="text-orange-500 shrink-0">!</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 流程 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">注册流程</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {registerSteps.map((p, i) => (
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

        {/* 区域 FAQ */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">关于{district.name}注册的常见问题</h2>
          <div className="space-y-3">
            {district.faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 bg-white px-5 py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base font-medium text-slate-900">
                  {f.q}
                  <span className="text-slate-400 group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 相关工具与服务 */}
        <section className="rounded-2xl bg-orange-50 border border-orange-200 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-grow">
            <h2 className="text-lg font-bold text-slate-900 mb-1">名字还没想好？先免费核名</h2>
            <p className="text-sm text-slate-600">顾问人工核验重名与禁限用词，30 分钟内回电反馈，通过后即可启动注册。</p>
          </div>
          <Link
            href="/tools/heming"
            className="shrink-0 inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 text-white text-sm font-semibold hover:bg-orange-700 transition-colors"
          >
            免费核名 →
          </Link>
        </section>

        {/* 其他区域 */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-5">看看其他区域</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((d) => (
              <Link
                key={d.slug}
                href={`/districts/${d.slug}`}
                className="rounded-full bg-white border border-slate-200 text-slate-600 text-sm px-4 py-2 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {d.name}
              </Link>
            ))}
            <Link
              href="/districts"
              className="rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm px-4 py-2 hover:bg-blue-100 transition-colors"
            >
              全部区域对比 →
            </Link>
          </div>
        </section>

        {/* 留资 */}
        <section className="max-w-3xl">
          <LeadForm
            defaultService="工商注册"
            title={`咨询${district.name}注册`}
            subtitle="说说你的行业和打算，顾问按当期园区政策给你方案与报价"
          />
        </section>
      </div>
    </>
  );
};

export default DistrictDetailPage;
