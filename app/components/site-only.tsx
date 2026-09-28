'use client';

import { usePathname } from 'next/navigation';

// 独立页面（如 App 隐私政策）：不显示官网导航、页脚、悬浮联系等站点元素
const STANDALONE_PATHS = ['/calendarPrivacy', '/easytoolPrivacy'];

export const isStandalonePath = (pathname: string) =>
  STANDALONE_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));

// 仅在官网常规页面渲染 children
const SiteOnly = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  if (isStandalonePath(pathname)) return null;
  return <>{children}</>;
};

export default SiteOnly;
