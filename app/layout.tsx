import './globals.css';
export const metadata = {
  title: '礼乘官网',
  description: '礼乘公司官方网站',
  keywords: '礼乘, 礼乘财税, 公司注册,注册公司,灵活用工,代理记账,财税服务, 财税咨询, 财税代理, 财税顾问, 财税规划, 财税咨询服务, 财税代理服务, 财税顾问服务, 财税规划服务',

  icons: {
    icon: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
