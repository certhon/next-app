# 礼乘财税官网（Next.js 静态站点）

这是一个为礼乘财税打造的企业官网。项目基于 Next.js App Router（React 18 + TypeScript）与 Tailwind CSS，采用静态导出（Static Export）方案，适合部署到任意静态托管平台（如 GitHub Pages、Vercel、OSS/CDN 等）。

## 项目功能
- 分栏（Tab）导航：包含「首页」「业务介绍」「关于我们」（可扩展「联系我们」）
- 页面模块化：Header、Footer、Home、Business、About、Contact 等组件化拆分
- 样式：使用 Tailwind CSS 构建响应式页面
- SEO 与静态资源：提供站点元信息、robots.txt、sitemap.xml、favicon/logo 等
- 运营通知：首次访问页面会向飞书机器人发送通知（位于 app/page.tsx 的 useEffect 中）

## 技术栈
- Next.js App Router（静态导出：next.config.js 中 `output: "export"`）
- React 18 + TypeScript
- Tailwind CSS

## 目录结构（关键部分）
- app/layout.tsx：全局样式与站点 metadata 配置
- app/page.tsx：客户端组件，管理 Tab 状态并渲染各模块
- app/components/：页面模块（header、footer、home、business、about、contact）
- public/：静态资源（logo、图片、robots.txt、sitemap.xml 等）

## 本地开发
1. 安装依赖：
   npm install
2. 启动开发：
   npm run dev
3. 构建静态产物：
   npm run build
4. 本地预览静态产物（serve out 目录）：
   npm run start

## 配置说明
- 飞书机器人 Webhook 在 app/page.tsx 中的 `webhookUrl`，如需替换为你自己的机器人地址，请修改该值。

## 部署
- 运行 `npm run build` 后会在项目根目录生成 out 目录，直接将 out 上传到任意静态托管平台即可。
- 也可使用 Vercel 部署（项目已支持静态导出）。

---

English summary
- A corporate landing site for a financial services firm, built with Next.js App Router (React 18 + TypeScript) and Tailwind CSS, exported as a static site for easy deployment. Sections include Home, Services, About (and optional Contact). A Feishu webhook sends a notification on first render. Build with `npm run build` and serve the `out` directory.
