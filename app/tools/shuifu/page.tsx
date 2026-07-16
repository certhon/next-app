import Link from 'next/link';
import type { Metadata } from 'next';
import LeadForm from '../../components/lead-form';
import ShuifuCalculator from '../../components/shuifu-calculator';

export const metadata: Metadata = {
  title: '税负测算器_小规模和一般纳税人哪个划算_礼乘财税',
  description:
    '免费税负测算：输入年营收、行业和进项比例，一键对比小规模纳税人与一般纳税人的年增值税及附加差额，帮你在注册或转登记前选对纳税人身份。',
  alternates: { canonical: '/tools/shuifu' },
  openGraph: {
    title: '税负测算器_小规模和一般纳税人哪个划算_礼乘财税',
    description: '输入三个数字，看清两种纳税人身份一年差多少税。',
    url: '/tools/shuifu',
  },
};

const tips = [
  {
    t: '什么时候小规模更划算',
    d: '客户以个人或小商户为主、不强求专票；成本里能取得专票的很少（人力成本为主的服务型公司）；年销售额在免征额度附近——1% 征收率加免征额度，通常明显更省。',
  },
  {
    t: '什么时候一般纳税人更划算',
    d: '下游是大企业、普遍要求 13%/9%/6% 专票；采购、房租、设备支出大且都能取得专票——抵扣之后实际税负可能低于小规模，还不影响接大单。',
  },
  {
    t: '最容易踩的误区',
    d: '只看税率高低不看抵扣、为了短期省税放弃大客户订单、年销售额接近 500 万却没提前规划被动转登记。身份选择影响的是全年，注册前值得认真算一次。',
  },
];

const ShuifuPage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <nav className="text-sm text-slate-500 mb-6" aria-label="面包屑">
            <Link href="/" className="hover:text-blue-700">首页</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">税负测算器</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              税负测算器：小规模 vs 一般纳税人
            </h1>
            <p className="text-slate-600">
              纳税人身份选错，一年可能多缴好几万。输入年营收、行业和进项比例，
              马上看到两种身份的年增值税及附加对比——先自己算，再让税务师免费复核。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <ShuifuCalculator />
        </div>
      </section>

      <section className="pb-12 md:pb-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">怎么理解测算结果</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tips.map((tip) => (
              <div key={tip.t} className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
                <h3 className="font-semibold text-slate-900 mb-2">{tip.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{tip.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            想系统了解两种身份的区别？看这篇：
            <Link href="/news/xiaoguimo-vs-yibanranshuiren" className="text-blue-700 hover:underline">
              《小规模纳税人和一般纳税人怎么选？一篇讲清差别》
            </Link>
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <LeadForm
            defaultService="纳税筹划"
            title="让税务师帮你确认测算结果"
            subtitle="留下联系方式，按你的真实业务免费复核身份选择与可用优惠"
          />
        </div>
      </section>
    </>
  );
};

export default ShuifuPage;
