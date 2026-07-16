import Link from 'next/link';
import type { Metadata } from 'next';
import LeadForm from '../components/lead-form';
import { coreServiceSlugs, services } from '../lib/services-data';

export const metadata: Metadata = {
  title: '服务项目_公司注册_代理记账_企业注销_礼乘财税',
  description:
    '礼乘财税 12 项企业服务：工商注册、代理记账、企业注销、解除异常、税务疑难、资质许可、纳税筹划、社保服务、补贴申请、灵活用工等，价格透明报价即全价。',
  alternates: { canonical: '/services' },
};

const orderedServices = [
  ...coreServiceSlugs.map((slug) => services.find((s) => s.slug === slug)!),
  ...services.filter((s) => !coreServiceSlugs.includes(s.slug)),
];

const ServicesPage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">服务项目</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            从注册开业到日常财税，再到异常处理与规范退出——企业全生命周期的 12 项服务，
            报价即全价，无隐形收费。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {orderedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl bg-white border border-slate-100 shadow-sm p-6 hover:shadow-md hover:border-blue-200 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h2>
                  {coreServiceSlugs.includes(service.slug) && (
                    <span className="text-xs text-orange-700 bg-orange-50 rounded-full px-2.5 py-1">
                      热门
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{service.brief}</p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-grow">
                  {service.tagline}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-base font-semibold text-orange-600">{service.price}</span>
                  <span className="text-sm text-slate-400 group-hover:text-blue-700 transition-colors">
                    查看详情 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <LeadForm subtitle="不确定需要哪项服务？留下电话，顾问帮您梳理" />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
