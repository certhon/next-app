// 转化事件埋点：封装百度统计自定义事件
// siteConfig.baiduAnalyticsId 配置后自动生效；未配置时静默跳过，不影响功能
export function track(category: string, action: string, label?: string) {
  if (typeof window === 'undefined') return;
  const hmt = (window as unknown as { _hmt?: unknown[] })._hmt;
  if (hmt) {
    hmt.push(['_trackEvent', category, action, label ?? '']);
  }
}
