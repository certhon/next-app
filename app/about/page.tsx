import type { Metadata } from 'next';
import LeadForm from '../components/lead-form';
import { siteConfig } from '../lib/site-config';

export const metadata: Metadata = {
  title: '关于我们_资质公示_上海礼乘信息技术有限公司',
  description:
    '礼乘财税是持代理记账许可证的上海财税服务机构，核心成员人均 10 年以上财务经验、中级以上职称，上海/北京/深圳/成都园区合作商，资质信息可在监管平台核验。',
  alternates: { canonical: '/about' },
};

const AboutPage = () => {
  const c = siteConfig.credentials;

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">关于我们</h1>
          <p className="text-slate-600">{siteConfig.slogan}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-14 space-y-12 md:space-y-14">
        {/* 公司介绍 */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">我们是谁</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              {siteConfig.companyName}成立于 2023
              年，致力于为中小企业提供一站式财税服务，助力企业轻松创业，为企业财税保驾护航。
              我们是上海、北京、深圳、成都各大园区的财税合作商。
            </p>
            <p>
              与销售驱动的财税平台不同，礼乘没有销售环节——内部核心成员均来自企业财务一线，
              人均 10 年以上财务工作经验、中级以上职称，熟悉主流行业的全盘财税工作。
              您从咨询那一刻起对接的就是做账的会计本人，需求不经转述、责任不被稀释。
            </p>
            <p>
              我们的宗旨很朴素：以满足中小企业老板们切实的财税需求为出发点，让客户选得放心、用得安心。
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {siteConfig.trustStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white border border-slate-100 shadow-sm px-4 py-5 text-center"
              >
                <dt className="order-2 text-xs text-slate-500 mt-1">{stat.label}</dt>
                <dd className="text-2xl font-bold text-blue-700">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 资质公示 */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">资质公示</h2>
          <p className="text-sm text-slate-500 mb-6">
            代理记账属财政部门许可经营业务。我们主动公示资质信息，欢迎在官方监管平台核验。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
              <p className="text-xs text-slate-400 mb-2">许可资质</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{c.licenseName}</h3>
              <p className="text-sm text-slate-600 mb-1">{c.licenseNo}</p>
              <p className="text-sm text-slate-500 mb-4">{c.licenseIssuer}</p>
              <a
                href={c.regulatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-700 hover:underline"
              >
                在{c.regulatorName}核验 →
              </a>
            </div>
            <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
              <p className="text-xs text-slate-400 mb-2">主体登记</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">营业执照</h3>
              <p className="text-sm text-slate-600 mb-1">{siteConfig.companyName}</p>
              <p className="text-sm text-slate-500 mb-4">登记信息可在官方公示系统查询</p>
              <a
                href={c.gsxtUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-700 hover:underline"
              >
                在{c.gsxtName}查询 →
              </a>
            </div>
          </div>
        </section>

        {/* 联系与到访 */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">联系与到访</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6 space-y-3 text-sm text-slate-600">
              <p>
                <span className="text-slate-400 mr-2">电话</span>
                <a href={`tel:${siteConfig.phoneRaw}`} className="font-semibold text-blue-700 hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <span className="text-slate-400 mr-2">微信</span>
                {siteConfig.wechatId}
              </p>
              <p>
                <span className="text-slate-400 mr-2">邮箱</span>
                {siteConfig.email}
              </p>
              <p>
                <span className="text-slate-400 mr-2">地址</span>
                {siteConfig.address}
              </p>
              <p className="text-slate-400">{siteConfig.workTime}</p>
              <a
                href={`https://ditu.amap.com/search?query=${encodeURIComponent(siteConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-700 hover:underline"
              >
                在高德地图中查看位置 →
              </a>
              <p className="pt-2 border-t border-slate-100 text-slate-500 leading-relaxed">
                欢迎提前电话预约后到访面谈——眼见为实，办公室就在这里，账交给谁看得见。
              </p>
            </div>
            <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6 text-center">
              <img
                src="/wx.png"
                alt="礼乘财税微信二维码"
                width={180}
                height={180}
                className="mx-auto rounded-lg"
              />
              <p className="mt-3 text-sm text-slate-500">扫码添加微信，资深顾问直接对接</p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <LeadForm />
        </section>
      </div>
    </>
  );
};

export default AboutPage;
