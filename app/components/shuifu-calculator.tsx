'use client';

import { useState } from 'react';
import { track } from '../lib/track';

// 小规模 vs 一般纳税人 年增值税及附加对比测算（纯前端计算）
// 口径：小规模按现行 1% 征收率（月销 10 万内免征）、六税两费减半；
// 一般纳税人按行业税率抵扣进项、附加 12%。政策有时效性，页面已附免责说明。

const industries = [
  { key: 'service', name: '服务业（咨询/技术/设计等）', rate: 0.06 },
  { key: 'trade', name: '贸易零售（买卖货物）', rate: 0.13 },
  { key: 'construction', name: '建筑安装', rate: 0.09 },
];

type Result = {
  small: number;
  general: number;
  smallVat: number;
  generalVat: number;
  smallExempt: boolean;
  overLimit: boolean;
};

const fmt = (n: number) =>
  n.toLocaleString('zh-CN', { maximumFractionDigits: 1, minimumFractionDigits: 0 });

const ShuifuCalculator = () => {
  const [revenue, setRevenue] = useState('');
  const [industry, setIndustry] = useState(industries[0]);
  const [costRatio, setCostRatio] = useState(40);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  const calc = () => {
    setError('');
    const rev = parseFloat(revenue);
    if (!rev || rev <= 0) {
      setError('请填写预计年营业收入（万元）');
      return;
    }

    const r = industry.rate;
    // 小规模：1% 征收率；年营收 120 万内（月均 10 万）开普票免征
    const smallExempt = rev <= 120;
    const smallVat = smallExempt ? 0 : (rev / 1.01) * 0.01;
    const small = smallVat * 1.06; // 附加税费减半（12% × 50%）

    // 一般纳税人：销项 - 进项（假设成本可取得同税率专票）
    const outputVat = (rev / (1 + r)) * r;
    const inputVat = ((rev * costRatio) / 100 / (1 + r)) * r;
    const generalVat = Math.max(0, outputVat - inputVat);
    const general = generalVat * 1.12;

    setResult({
      small,
      general,
      smallVat,
      generalVat,
      smallExempt,
      overLimit: rev > 500,
    });
    track('tool', 'shuifu_calc', `${industry.key}_${rev}w_${costRatio}%`);
  };

  const scrollToForm = () => {
    track('contact', 'message_click', 'shuifu_result');
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const diff = result ? Math.abs(result.small - result.general) : 0;
  const smallBetter = result ? result.small <= result.general : true;

  return (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">开始测算</h2>
      <p className="text-sm text-slate-500 mb-6">三个数字，看清两种身份一年差多少税</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">预计年营业收入（万元）</span>
          <input
            type="number"
            min="1"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            placeholder="如：200"
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-slate-700">主营行业</span>
          <select
            value={industry.key}
            onChange={(e) => setIndustry(industries.find((i) => i.key === e.target.value)!)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {industries.map((i) => (
              <option key={i.key} value={i.key}>
                {i.name}（{(i.rate * 100).toFixed(0)}%）
              </option>
            ))}
          </select>
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-700 flex justify-between">
            <span>成本中能取得进项专票的比例</span>
            <b className="text-blue-700">{costRatio}%</b>
          </span>
          <input
            type="range"
            min="0"
            max="80"
            step="5"
            value={costRatio}
            onChange={(e) => setCostRatio(parseInt(e.target.value, 10))}
            className="mt-2 w-full accent-blue-700"
          />
          <span className="text-xs text-slate-400">
            指采购、房租、设备等能开增值税专用发票的支出占营收比重；人力成本占大头的服务型公司通常偏低
          </span>
        </label>
      </div>

      <button
        type="button"
        onClick={calc}
        className="mt-6 w-full md:w-auto rounded-lg bg-blue-700 text-white px-10 py-3 text-base font-semibold hover:bg-blue-800 transition-colors"
      >
        测算年税负对比
      </button>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      {result && (
        <div className="mt-8 border-t border-slate-100 pt-6">
          {result.overLimit && (
            <p className="mb-4 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 text-sm px-4 py-3">
              年销售额超过 500 万元将被强制登记为一般纳税人，小规模身份仅供对照参考。
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className={`rounded-xl border p-5 ${
                smallBetter ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <p className="text-sm text-slate-500 mb-1">
                小规模纳税人 {smallBetter && <span className="text-blue-700 font-semibold">← 更省</span>}
              </p>
              <p className="text-2xl font-bold text-slate-900">
                约 {fmt(result.small)} <span className="text-sm font-normal">万元/年</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {result.smallExempt
                  ? '月均销售额 10 万以内，开普票可享增值税免征'
                  : `增值税约 ${fmt(result.smallVat)} 万 + 附加税费（减半征收）`}
              </p>
            </div>
            <div
              className={`rounded-xl border p-5 ${
                !smallBetter ? 'border-blue-300 bg-blue-50' : 'border-slate-200 bg-slate-50'
              }`}
            >
              <p className="text-sm text-slate-500 mb-1">
                一般纳税人 {!smallBetter && <span className="text-blue-700 font-semibold">← 更省</span>}
              </p>
              <p className="text-2xl font-bold text-slate-900">
                约 {fmt(result.general)} <span className="text-sm font-normal">万元/年</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">
                销项抵扣进项后增值税约 {fmt(result.generalVat)} 万 + 附加税费 12%
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-slate-900 text-white p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="flex-grow text-sm leading-relaxed">
              两种身份一年相差约 <b className="text-lg text-amber-400">{fmt(diff)} 万元</b>
              。实际还要考虑客户开票要求、免征额度使用、行业细分税率——
              让税务师按你的真实情况免费复核一遍再定。
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="shrink-0 rounded-lg bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              免费预约税务师解读 →
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-400 leading-relaxed">
            测算口径：小规模按 1% 征收率、月销 10 万内免征、六税两费减半；一般纳税人按所选行业税率、
            成本取得同税率专票抵扣、附加税费 12%。均为现行阶段性优惠政策下的简化估算，
            不含企业所得税（两种身份规则相同），执行期限与细则以主管税务机关及最新政策为准。
          </p>
        </div>
      )}
    </div>
  );
};

export default ShuifuCalculator;
