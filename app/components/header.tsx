'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { siteConfig } from '../lib/site-config';
import { track } from '../lib/track';

const navItems = [
  { href: '/', name: '首页' },
  { href: '/services', name: '服务项目' },
  { href: '/news', name: '财税知识' },
  { href: '/faq', name: '常见问题' },
  { href: '/about', name: '关于我们' },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0" aria-label="礼乘财税首页">
          <img src="/logo.svg" alt="礼乘财税" width={116} height={36} className="h-9 w-auto" />
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden md:block" aria-label="主导航">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-base font-medium pb-1 border-b-2 transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-700 border-blue-700'
                      : 'text-slate-600 border-transparent hover:text-blue-700'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 置顶电话：桌面完整号码，移动端进折叠菜单 */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          onClick={() => track('contact', 'tel_click', 'header')}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-white text-sm font-semibold hover:bg-blue-800 transition-colors shrink-0"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
          </svg>
          {siteConfig.phone}
        </a>

        {/* 移动端汉堡按钮 */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* 移动端折叠菜单 */}
      {menuOpen && (
        <nav className="md:hidden border-t border-slate-100 bg-white" aria-label="移动端导航">
          <ul className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 text-base font-medium border-b border-slate-50 ${
                    isActive(item.href) ? 'text-blue-700' : 'text-slate-700'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => track('contact', 'tel_click', 'header_mobile')}
                className="block py-3 text-base font-semibold text-blue-700"
              >
                📞 {siteConfig.phone}（点击拨打）
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
