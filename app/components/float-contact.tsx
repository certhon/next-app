'use client';

import { useState } from 'react';
import { siteConfig } from '../lib/site-config';
import { track } from '../lib/track';

// 全站常驻咨询组件：桌面右侧悬浮条 + 移动端底部操作栏 + 微信二维码弹层
const FloatContact = () => {
  const [wechatOpen, setWechatOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const openWechat = (source: string) => {
    track('contact', 'wechat_open', source);
    setCopied(false);
    setWechatOpen(true);
  };

  const copyWechatId = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.wechatId);
      setCopied(true);
    } catch {
      // 剪贴板不可用时不影响展示
    }
  };

  const scrollToLeadForm = (source: string) => {
    track('contact', 'message_click', source);
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.location.href = '/#lead-form';
    }
  };

  return (
    <>
      {/* 桌面：右侧悬浮条 */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          onClick={() => track('contact', 'tel_click', 'float')}
          className="group relative flex flex-col items-center gap-1 w-16 py-3 bg-white rounded-xl shadow-lg border border-slate-100 text-slate-700 hover:text-blue-700 hover:border-blue-200 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
          </svg>
          <span className="text-xs">电话</span>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 text-white text-sm px-3 py-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            {siteConfig.phone}
          </span>
        </a>

        <button
          type="button"
          onClick={() => openWechat('float')}
          className="flex flex-col items-center gap-1 w-16 py-3 bg-white rounded-xl shadow-lg border border-slate-100 text-slate-700 hover:text-green-600 hover:border-green-200 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8.7 4C5 4 2 6.6 2 9.8c0 1.8 1 3.5 2.5 4.5l-.6 2 2.2-1.2c.6.2 1.3.3 2 .3h.4a5 5 0 0 1-.2-1.5c0-3 2.9-5.4 6.4-5.4h.3C14.5 6 11.9 4 8.7 4zM6.5 7.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm4.4 0a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zM15 10c-3 0-5.5 2.2-5.5 4.9 0 2.7 2.5 4.9 5.5 4.9.6 0 1.2-.1 1.7-.3l1.9 1-.5-1.7c1.3-.9 2.2-2.3 2.2-3.9 0-2.7-2.4-4.9-5.3-4.9zm-1.9 2.7a.8.8 0 1 1 0 1.5.8.8 0 0 1 0-1.5zm3.8 0a.8.8 0 1 1 0 1.5.8.8 0 0 1 0-1.5z" />
          </svg>
          <span className="text-xs">微信</span>
        </button>

        <button
          type="button"
          onClick={() => scrollToLeadForm('float')}
          className="flex flex-col items-center gap-1 w-16 py-3 bg-blue-700 rounded-xl shadow-lg text-white hover:bg-blue-800 transition-colors"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v10H8l-4 4V6z" />
          </svg>
          <span className="text-xs">留言</span>
        </button>
      </div>

      {/* 移动端：底部固定操作栏（配套占位符防遮挡，符合移动落地页规范） */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-white border-t border-slate-200 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          onClick={() => track('contact', 'tel_click', 'float_mobile')}
          className="flex items-center justify-center gap-1.5 py-3.5 text-sm font-semibold text-blue-700"
        >
          📞 电话咨询
        </a>
        <button
          type="button"
          onClick={() => openWechat('float_mobile')}
          className="flex items-center justify-center gap-1.5 py-3.5 text-sm font-semibold text-green-600 border-x border-slate-100"
        >
          💬 微信咨询
        </button>
        <button
          type="button"
          onClick={() => scrollToLeadForm('float_mobile')}
          className="flex items-center justify-center gap-1.5 py-3.5 text-sm font-semibold text-slate-700"
        >
          ✍️ 在线留言
        </button>
      </div>
      {/* 底栏占位：出现在页面流末尾，防止内容被固定底栏遮挡 */}
      <div className="md:hidden h-[52px]" aria-hidden="true" />

      {/* 微信二维码弹层 */}
      {wechatOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setWechatOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="微信咨询二维码"
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-xs text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setWechatOpen(false)}
              className="absolute right-3 top-3 w-8 h-8 rounded-full text-slate-400 hover:bg-slate-100"
              aria-label="关闭"
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold text-slate-900 mb-1">微信扫码咨询</h3>
            <p className="text-sm text-slate-500 mb-4">资深财务顾问直接对接，可 24 小时留言</p>
            <img
              src="/wx.png"
              alt="礼乘财税微信二维码"
              width={200}
              height={200}
              className="mx-auto rounded-lg"
            />
            <button
              type="button"
              onClick={copyWechatId}
              className="mt-4 w-full rounded-lg bg-green-600 text-white py-2.5 text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              {copied ? '已复制，去微信添加 ✓' : `复制微信号：${siteConfig.wechatId}`}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatContact;
