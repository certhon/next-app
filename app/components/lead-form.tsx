'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getVisitorIp, sendFeishuText } from '../lib/feishu';
import { siteConfig } from '../lib/site-config';
import { services } from '../lib/services-data';
import { track } from '../lib/track';

type LeadFormProps = {
  // 服务详情页预选当前服务
  defaultService?: string;
  title?: string;
  subtitle?: string;
};

// 极简留资表单：称呼 + 手机号 + 意向服务，提交推送飞书群即时跟单
const LeadForm = ({
  defaultService = '',
  title = '留下联系方式，顾问尽快回电',
  subtitle = '工作时间内 30 分钟响应；也可以直接拨打电话或添加微信',
}: LeadFormProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!/^1\d{10}$/.test(phone.trim())) {
      setError('请填写正确的 11 位手机号码');
      return;
    }
    if (!agreed) {
      setError('请先阅读并勾选同意《隐私政策》');
      return;
    }

    setSubmitting(true);
    const ip = await getVisitorIp();
    const ok = await sendFeishuText(
      '【官网留资】有新的咨询线索，请尽快回电！\n' +
        `称呼：${name.trim() || '未填写'}\n` +
        `手机：${phone.trim()}\n` +
        `意向服务：${service || '未选择'}\n` +
        `IP：${ip}\n` +
        `提交页面：${window.location.pathname}`
    );
    setSubmitting(false);

    if (ok) {
      track('contact', 'form_submit', service || 'unknown');
      setDone(true);
    } else {
      setError(`网络异常提交失败，请直接拨打 ${siteConfig.phone}`);
    }
  };

  if (done) {
    return (
      <div id="lead-form" className="rounded-2xl bg-blue-700 text-white p-8 text-center">
        <div className="text-3xl mb-3">✅</div>
        <h3 className="text-xl font-bold mb-2">已收到您的信息</h3>
        <p className="text-blue-100 mb-6">
          顾问将在工作时间 30 分钟内回电（{siteConfig.workTime}）
        </p>
        <div className="inline-block bg-white rounded-xl p-4">
          <img src="/wx.png" alt="礼乘财税微信二维码" width={140} height={140} className="mx-auto rounded" />
          <p className="mt-2 text-sm text-slate-600">着急的话，扫码加微信更快</p>
        </div>
      </div>
    );
  }

  return (
    <div id="lead-form" className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 mb-6">{subtitle}</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="怎么称呼您（选填）"
          className="rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="手机号码（必填）"
          className="rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="rounded-lg border border-slate-300 px-4 py-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">意向服务（选填）</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="其他/还不确定">其他 / 还不确定</option>
        </select>

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
            ，同意顾问通过电话/微信与我联系
          </span>
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-blue-700 text-white py-3 text-base font-semibold hover:bg-blue-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? '提交中…' : '提交，等顾问回电'}
        </button>
      </form>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default LeadForm;
