import Link from 'next/link';
import { siteConfig } from '../lib/site-config';
import { services } from '../lib/services-data';

// 富页脚：全部服务内链（迷你站点地图）+ 联系方式 + 合规信息
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img
              src="/logo-white.svg"
              alt={siteConfig.siteName}
              width={116}
              height={36}
              className="h-9 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed mb-3">{siteConfig.slogan}</p>
            <p className="text-sm leading-relaxed">
              持有{siteConfig.credentials.licenseName}的一站式财税服务机构，资深财务团队直接对接，无销售中间环节。
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">服务项目</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">快捷导航</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">服务总览</Link></li>
              <li><Link href="/districts" className="hover:text-white transition-colors">上海各区注册指南</Link></li>
              <li><Link href="/tools/heming" className="hover:text-white transition-colors">免费核名查询</Link></li>
              <li><Link href="/tools/shuifu" className="hover:text-white transition-colors">税负测算器</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">财税知识</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">常见问题</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">关于我们（资质公示）</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">隐私政策</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">服务条款</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm">
              <li>
                电话：
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-white font-semibold hover:underline">
                  {siteConfig.phone}
                </a>
              </li>
              <li>微信：{siteConfig.wechatId}</li>
              <li>邮箱：{siteConfig.email}</li>
              <li>地址：{siteConfig.address}</li>
              <li className="text-slate-400">{siteConfig.workTime}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-5 text-center text-sm text-slate-400">
          <p>版权所有 © 2024-2026 {siteConfig.companyName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
