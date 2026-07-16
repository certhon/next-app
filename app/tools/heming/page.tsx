import Link from 'next/link';
import type { Metadata } from 'next';
import HemingForm from '../../components/heming-form';

export const metadata: Metadata = {
  title: '公司核名查询_上海注册公司名称免费预查_礼乘财税',
  description:
    '注册公司第一步先核名。礼乘财税提供免费公司名称核验：资深顾问对照登记规则人工核查重名与禁用词，30 分钟内回电反馈，通过后可免费代办注册。',
  alternates: { canonical: '/tools/heming' },
  openGraph: {
    title: '公司核名查询_上海注册公司名称免费预查_礼乘财税',
    description: '输入想用的公司名，顾问免费人工核验可用性，30 分钟内回电反馈。',
    url: '/tools/heming',
  },
};

const rules = [
  {
    t: '名称结构要完整',
    d: '标准结构为"行政区划＋字号＋行业表述＋组织形式"，例如"上海＋礼乘＋财务咨询＋有限公司"，缺一项都无法通过登记。',
  },
  {
    t: '同行业不能重名或近似',
    d: '与同区域同行业已登记企业重名、读音相同或字形近似都会被驳回，这是核名不通过的最主要原因。',
  },
  {
    t: '避开禁用与限用词',
    d: '"中国""国际""集团"等词有严格使用条件；涉及金融、教育等敏感行业的表述需要前置审批。',
  },
  {
    t: '字号建议 3-4 个字',
    d: '两字字号重名率极高，3-4 字原创字号通过率明显更高；建议避开常见吉祥词组合。',
  },
  {
    t: '不能与知名品牌近似',
    d: '与驰名商标、知名企业字号近似的名称即使通过登记，后续也有被异议或诉讼的风险。',
  },
  {
    t: '一次准备 3-5 个备选',
    d: '按优先级排列备选字号，核名时逐个验证，避免单个名称反复驳回浪费时间。',
  },
  {
    t: '行业表述要规范',
    d: '行业用语需参照国民经济行业分类的规范表述，自创写法（如"某某研究社"）容易被退回。',
  },
  {
    t: '通过后尽快提交设立',
    d: '核名通过的名称有保留期限，逾期未提交设立登记会被释放，需要重新核名。',
  },
];

const HemingPage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <nav className="text-sm text-slate-500 mb-6" aria-label="面包屑">
            <Link href="/" className="hover:text-blue-700">首页</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">免费核名</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">公司核名查询</h1>
            <p className="text-slate-600 mb-2">
              注册公司的第一步是给公司起一个能通过登记的名字。机器粗查只能看完全重名，
              读音近似、字形近似、禁限用词这些真正的驳回原因，需要有经验的人来判断。
            </p>
            <p className="text-slate-600">
              把想用的名字告诉我们，资深顾问对照登记规则<b className="text-slate-900">免费人工核验</b>，
              工作时间 30 分钟内回电反馈；名字可用的话，注册代办也是免费的。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <HemingForm />
        </div>
      </section>

      <section className="pb-12 md:pb-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">核名规则速览</h2>
          <p className="text-sm text-slate-500 mb-8">先了解规则，起名一次到位</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rules.map((r, i) => (
              <div key={r.t} className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-6 h-6 rounded-md bg-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-slate-900">{r.t}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl bg-blue-700 text-white p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2">名字通过后，注册也交给我们</h2>
            <p className="text-blue-100 mb-5">注册代办 0 服务费，最快 1 天拿证，材料一次备齐</p>
            <Link
              href="/services/gongshang-zhuce"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              了解免费注册服务 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HemingPage;
