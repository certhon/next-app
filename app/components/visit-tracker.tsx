'use client';

import { useEffect } from 'react';
import { getVisitorIp, sendFeishuText } from '../lib/feishu';

// 访客到站通知：挂在根布局，任何落地页都会触发；
// sessionStorage 防重，同一会话只通知一次，避免刷新刷屏
const VisitTracker = () => {
  useEffect(() => {
    const KEY = 'lc_visit_notified';
    try {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, '1');
    } catch {
      // 隐私模式下 sessionStorage 不可用时仍继续发送
    }

    const landingPath = window.location.pathname;
    (async () => {
      const ip = await getVisitorIp();
      await sendFeishuText(
        'wow ! a visiter is coming to our website !\n' +
          `IP：${ip}\n` +
          `落地页：${landingPath}`
      );
    })();
  }, []);

  return null;
};

export default VisitTracker;
