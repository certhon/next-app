// 知识频道文章汇总：每篇文章一个文件放在 ./articles/ 下，此处按展示顺序登记
// 列表页与详情页从这里读取；新文章加在数组最前面即可排在最新

import type { Article, ArticleBlock } from './articles/types';
import { article as shanghaiGongsiZhuceLiucheng } from './articles/shanghai-gongsi-zhuce-liucheng';
import { article as xiaoguimoVsYibanranshuiren } from './articles/xiaoguimo-vs-yibanranshuiren';
import { article as jingyingYichangJiechu } from './articles/jingying-yichang-jiechu';

export type { Article, ArticleBlock };

export const articles: Article[] = [
  shanghaiGongsiZhuceLiucheng,
  xiaoguimoVsYibanranshuiren,
  jingyingYichangJiechu,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
