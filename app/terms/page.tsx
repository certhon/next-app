import type { Metadata } from 'next';
import { siteConfig } from '../lib/site-config';

export const metadata: Metadata = {
  title: '服务条款_礼乘财税官网',
  description: '礼乘财税官网使用条款：网站内容的性质、知识产权与责任说明。',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
};

const sections = [
  {
    h: '一、网站内容的性质',
    ps: [
      '本网站展示的服务介绍、价格信息与文章内容仅供参考，属一般性信息说明，不构成对任何具体事项的承诺或专业意见。财税政策存在时效性与地区差异，具体办理事项请以咨询确认及双方签署的服务协议为准。',
    ],
  },
  {
    h: '二、服务的成立',
    ps: [
      '通过本网站提交咨询信息或与我们取得联系，不代表服务关系成立。双方的权利义务（服务范围、费用、责任承担等）以正式签署的服务协议为准。',
    ],
  },
  {
    h: '三、知识产权',
    ps: [
      `本网站的文章、页面设计与标识归${siteConfig.companyName}所有。欢迎注明出处的合理转载，禁止用于商业性抄袭或仿冒。`,
    ],
  },
  {
    h: '四、外部链接',
    ps: [
      '本网站可能包含指向政府监管平台等第三方网站的链接，该等网站的内容与可用性由其运营方负责。',
    ],
  },
  {
    h: '五、联系我们',
    ps: [
      `对本条款有任何疑问，可通过电话 ${siteConfig.phone} 或邮箱 ${siteConfig.email} 与我们联系。`,
      '本条款更新日期：2026 年 7 月。',
    ],
  },
];

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">服务条款</h1>
      <p className="text-sm text-slate-500 mb-10">使用本网站前，请阅读以下条款。</p>
      <div className="space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-lg font-semibold text-slate-900 mb-3">{s.h}</h2>
            <div className="space-y-2">
              {s.ps.map((p) => (
                <p key={p.slice(0, 20)} className="text-sm text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsPage;
