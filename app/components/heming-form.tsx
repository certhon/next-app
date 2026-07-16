'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getVisitorIp, sendFeishuText } from '../lib/feishu';
import { siteConfig } from '../lib/site-config';
import { track } from '../lib/track';

// 免费核名查询：工具化的留资表单，顾问人工核验后回电反馈结果
const HemingForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!companyName.trim()) {
      setError('请填写想用的公司字号，如"礼乘"');
      return;
    }
    if (!/^1\d{10}$/.test(phone.trim())) {
      setError('请填写正确的 11 位手机号码，核验结果将回电反馈');
      return;
    }
    if (!agreed) {
      setError('请先阅读并勾选同意《隐私政策》');
      return;
    }

    setSubmitting(true);
    const ip = await getVisitorIp();
    const ok = await sendFeishuText(
      '【核名查询】有新的核名请求，请尽快人工核验并回电！\n' +
        `拟用字号：${companyName.trim()}\n` +
        `行业方向：${industry.trim() || '未填写'}\n` +
        `手机：${phone.trim()}\n` +
        `IP：${ip}\n` +
        `提交页面：${window.location.pathname}`
    );
    setSubmitting(false);

    if (ok) {
      track('contact', 'heming_submit', companyName.trim());
      setDone(true);
    } else {
      setError(`网络异常提交失败，请直接拨打 ${siteConfig.phone}`);
    }
  };

  if (done) {
    return (
      <div id="lead-form" className="rounded-2xl bg-blue-700 text-white p-8 text-center">
        <div className="text-3xl mb-3">✅</div>
        <h3 className="text-xl font-bold mb-2">核名请求已收到</h3>
        <p className="text-blue-100 mb-6">
          顾问将人工核验「{companyName.trim()}」的可用性，并在工作时间 30 分钟内回电反馈结果
        </p>
        <div className="inline-block bg-white rounded-xl p-4">
          <img src="/wx.png" alt="礼乘财税微信二维码" width={140} height={140} className="mx-auto rounded" />
          <p className="mt-2 text-sm text-slate-600">加微信可直接收核验截图</p>
        </div>
      </div>
    );
  }

  return (
    <div id="lead-form" className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">输入想用的名字，免费帮您核验</h3>
      <p className="text-sm text-slate-500 mb-6">
        资深顾问对照登记规则人工核验（非机器粗查），工作时间 30 分钟内回电反馈
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder='拟用字号，如"礼乘"（必填）'
          className="rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          placeholder="行业方向，如贸易/科技（选填）"
          className="rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="手机号码（必填，用于反馈结果）"
          className="rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <label className="md:col-span-2 flex items-start gap-2 text-sm text-slate-500 select-none">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-blue-700"
          />
          <span>
            我已阅读并同意
            <Link href="/privacy" className="text-blue-700 hover:underline" target="_blank">
              《隐私政策》
            </Link>
            ，同意顾问通过电话/微信反馈核名结果
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-blue-700 text-white py-3 text-base font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? '提交中…' : '免费核名'}
        </button>
      </form>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default HemingForm;
