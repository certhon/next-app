import Link from 'next/link';
import type { Metadata } from 'next';
import LeadForm from '../components/lead-form';
import { districts } from '../lib/districts-data';

export const metadata: Metadata = {
  title: '上海各区注册公司指南_园区政策对比_礼乘财税',
  description:
    '上海注册公司选哪个区？浦东、临港、崇明、奉贤、闵行、松江、徐汇、静安八区注册环境与园区政策对比，按业务类型选对注册地，注册代办免费。',
  alternates: { canonical: '/districts' },
};

const DistrictsPage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">上海各区注册公司指南</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            注册地选对了，政策、成本、形象一步到位。八个热门区域的注册环境与园区特点，
            按你的业务类型对号入座——注册代办免费，选区咨询也免费。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {districts.map((d) => (
              <Link
                key={d.slug}
                href={`/districts/${d.slug}`}
                className="group rounded-xl bg-white border border-slate-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {d.name}
                  </h2>
                  <span className="text-sm text-slate-400 group-hover:text-blue-700 transition-colors shrink-0">
                    了解详情 →
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-medium text-blue-700">{d.tagline}</p>
                <p className="mt-2.5 text-sm text-slate-500 leading-relaxed line-clamp-2">{d.intro[0]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {d.suitable.slice(0, 3).map((s) => (
                    <span key={s} className="rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs px-2.5 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <LeadForm
            defaultService="工商注册"
            title="拿不准选哪个区？顾问帮你比"
            subtitle="说说你的行业和经营打算，按当期各园区实际政策给你建议"
          />
        </div>
      </section>
    </>
  );
};

export default DistrictsPage;
