import type { Metadata } from 'next';
import LeadForm from '../components/lead-form';
import { faqs } from '../lib/faq-data';

export const metadata: Metadata = {
  title: '常见问题_代理记账多少钱_公司注册注销问答_礼乘财税',
  description:
    '代理记账多少钱一个月？账做错了谁负责？换代账公司麻烦吗？公司不经营了怎么办？礼乘财税直答企业老板最关心的财税问题。',
  alternates: { canonical: '/faq' },
};

// FAQPage 结构化数据：搜索结果可展开问答富摘要
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const FaqPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">常见问题</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            价格、责任、数据安全这些敏感问题，我们直接回答。没找到您关心的问题？电话或留言问我们。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 bg-white px-5 py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base font-medium text-slate-900">
                  {f.q}
                  <span className="text-slate-400 group-open:rotate-45 transition-transform text-xl leading-none shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <LeadForm
            title="问题没被覆盖？直接问顾问"
            subtitle="留下联系方式和想问的事，顾问看到即回"
          />
        </div>
      </section>
    </>
  );
};

export default FaqPage;
