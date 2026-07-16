import { siteConfig } from './site-config';

// 获取访问者公网 IP：优先走 Cloudflare 同域 trace 端点（站点部署在 CF Pages），
// 失败时降级到 ipify，两者都失败返回"未知"
export async function getVisitorIp(): Promise<string> {
  try {
    const text = await fetch('/cdn-cgi/trace').then((r) => r.text());
    const ip = text.match(/^ip=(.+)$/m)?.[1]?.trim();
    if (ip) return ip;
  } catch {
    // 本地开发或非 CF 环境没有该端点，走降级
  }
  try {
    const data = await fetch('https://api.ipify.org?format=json').then((r) =>
      r.json()
    );
    if (data?.ip) return String(data.ip);
  } catch {
    // 忽略，返回未知
  }
  return '未知';
}

// 向飞书群机器人发送文本消息（访客通知与表单留资共用）
export async function sendFeishuText(text: string): Promise<boolean> {
  try {
    const response = await fetch(siteConfig.feishuWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ msg_type: 'text', content: { text } }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
