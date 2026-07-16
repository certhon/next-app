import type { Metadata } from 'next';
import { siteConfig } from '../lib/site-config';

export const metadata: Metadata = {
  title: '隐私政策_礼乘财税官网',
  description: '礼乘财税官网个人信息保护政策：说明我们收集哪些信息、如何使用与保护，以及您享有的权利。',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
};

const sections = [
  {
    h: '一、本政策的适用范围',
    ps: [
      `本隐私政策适用于${siteConfig.companyName}（下称"我们"）运营的官方网站（${siteConfig.siteUrl}）。您通过本网站提交信息或浏览页面，即适用本政策。本政策不适用于我们通过服务协议向您提供的财税服务（该等服务的数据处理以双方签署的协议及保密条款为准）。`,
    ],
  },
  {
    h: '二、我们收集哪些信息',
    ps: [
      '1. 您主动提供的信息：当您通过网站咨询表单提交称呼、手机号码、意向服务时，我们会收集这些信息。',
      '2. 自动收集的信息：为统计访问情况、保障网站安全与改进服务，我们可能记录您的 IP 地址、访问页面路径等技术信息。若网站启用第三方统计工具（如百度统计），该等工具可能通过 Cookie 收集匿名的访问统计数据。',
    ],
  },
  {
    h: '三、我们如何使用这些信息',
    ps: [
      '1. 使用您提交的联系方式，通过电话或微信与您联系，解答咨询并提供服务方案与报价；',
      '2. 使用访问统计信息改进网站内容与体验；',
      '3. 我们不会将您的个人信息出售给任何第三方，也不会用于与咨询无关的营销用途。',
    ],
  },
  {
    h: '四、信息的存储与保护',
    ps: [
      '您通过表单提交的信息将推送至我们的内部工作群，仅限服务团队为联络目的使用。我们采取合理的技术与管理措施保护您的信息安全，防止未经授权的访问、披露或丢失。',
    ],
  },
  {
    h: '五、您的权利',
    ps: [
      `您有权要求我们更正或删除您的个人信息、撤回联系授权。您可以通过电话 ${siteConfig.phone} 或邮箱 ${siteConfig.email} 联系我们，我们将在核实身份后及时处理。`,
    ],
  },
  {
    h: '六、政策的更新',
    ps: [
      '我们可能适时更新本政策并在本页面发布。更新后的政策自发布之日起生效。',
      '本政策更新日期：2026 年 7 月。',
    ],
  },
];

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">隐私政策</h1>
      <p className="text-sm text-slate-500 mb-10">
        我们重视您的个人信息保护。本政策说明礼乘财税官网如何收集、使用与保护您的信息。
      </p>
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

export default PrivacyPage;
