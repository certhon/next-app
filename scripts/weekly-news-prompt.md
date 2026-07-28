你在礼乘财税官网仓库（Next.js 静态导出，当前目录即仓库根目录）。执行本周的知识频道周更，只做这一件事。

步骤：

1. 读 `app/lib/news-data.ts`，了解全部既有文章主题，新主题不得与已有文章重复或高度相近。
2. 选一个与本站业务相关（上海公司注册、代理记账、企业注销、工商变更、社保公积金、资质许可、税务合规等）、中小企业主会实际搜索的新主题。
3. 参照 `app/lib/articles/guquan-zhuanrang-liucheng.ts` 的文件结构与写作风格，在 `app/lib/articles/` 新建文章文件：
   - 文件名与 slug 用拼音风格，与既有文章命名一致
   - date 用今天的日期（YYYY-MM-DD，开头已告知）
   - 篇幅、语气、专业度与既有文章保持一致；内容准确，不编造具体收费金额与办理时效承诺
4. 在 `app/lib/news-data.ts` 登记：新增 import，并把新文章加到 `articles` 数组最前面。
5. 在 `public/sitemap.xml` 为新文章追加 `<url>` 块：`lastmod` 用今天日期、`changefreq` 用 `yearly`、`priority` 用 `0.6`；插入位置在 `/news` 列表页条目之后、其他文章条目之前（保持最新在前的既有顺序），缩进与既有条目一致。
6. 运行 `npx next build`，必须通过；报错就修复直到通过。
7. `git add` 只添加本次改动的三个文件（新文章、news-data.ts、sitemap.xml），然后 commit，message 格式：`[feature][知识频道周更：<文章标题>]`。

硬性约束：

- 不修改与本次周更无关的任何文件
- 禁止执行 `git push`（由外层脚本负责）
- 任何一步无法完成时，不要 commit，直接说明原因退出
