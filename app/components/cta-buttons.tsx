'use client';

import Link from 'next/link';
import { siteConfig } from '../lib/site-config';
import { track } from '../lib/track';

type CtaButtonsProps = {
  // 埋点来源标记：hero / service_detail 等
  source: string;
  // 次按钮目标与文案，默认跳服务总览
  secondaryHref?: string;
  secondaryText?: string;
};

// 高低意向双 CTA：高意向直接拨号，低意向查看服务
const CtaButtons = ({
  source,
  secondaryHref = '/services',
  secondaryText = '查看服务与报价',
}: CtaButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        onClick={() => track('contact', 'tel_click', source)}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-3.5 text-white text-base font-semibold hover:bg-blue-800 transition-colors shadow-sm"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
        </svg>
        电话咨询 {siteConfig.phone}
      </a>
      <Link
        href={secondaryHref}
        className="inline-flex items-center justify-center rounded-xl border-2 border-blue-700 px-7 py-3.5 text-blue-700 text-base font-semibold hover:bg-blue-50 transition-colors"
      >
        {secondaryText}
      </Link>
    </div>
  );
};

export default CtaButtons;
