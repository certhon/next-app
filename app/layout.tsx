import './globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';
import Header from './components/header';
import Footer from './components/footer';
import FloatContact from './components/float-contact';
import VisitTracker from './components/visit-tracker';
import { siteConfig } from './lib/site-config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: '上海代理记账_公司注册代办_财税服务公司_礼乘财税官网',
    template: '%s',
  },
  description:
    '礼乘财税是持代理记账许可证的上海一站式财税服务机构：公司注册、代理记账、企业注销、解除异常、税务疑难处理，资深财务团队直接对接，无销售中间环节。',
  keywords:
    '礼乘, 礼乘财税, 公司注册, 注册公司, 上海代理记账, 代理记账, 企业注销, 解除经营异常, 灵活用工, 财税服务, 财税咨询, 纳税筹划, 社保代缴',
  icons: {
    icon: '/logo.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'KyIYj10h883WZPzCGXgYuFrMhnw8SyfR-Zemb_aY4Vw',
    ...(siteConfig.baiduSiteVerification
      ? { other: { 'baidu-site-verification': siteConfig.baiduSiteVerification } }
      : {}),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-slate-50 text-slate-800 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatContact />
        <VisitTracker />
        {siteConfig.baiduAnalyticsId && (
          <Script id="baidu-tongji" strategy="afterInteractive">
            {`var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?${siteConfig.baiduAnalyticsId}";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`}
          </Script>
        )}
      </body>
    </html>
  );
}
