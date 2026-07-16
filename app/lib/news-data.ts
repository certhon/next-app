// 知识频道文章汇总：每篇文章一个文件放在 ./articles/ 下，此处按展示顺序登记
// 列表页与详情页从这里读取；新文章加在数组最前面即可排在最新

import type { Article, ArticleBlock } from './articles/types';
import { article as xiaoweiShuishouYouhui } from './articles/xiaowei-shuishou-youhui';
import { article as zhuceDizhiZhuzhai } from './articles/zhuce-dizhi-zhuzhai';
import { article as getihuVsGongsi } from './articles/getihu-vs-gongsi';
import { article as daizhangYinianDuoshaoqian } from './articles/daizhang-yinian-duoshaoqian';
import { article as buZhuxiaoHouguo } from './articles/bu-zhuxiao-houguo';
import { article as nazhengHouBibandeShi } from './articles/nazheng-hou-bibande-shi';
import { article as lingshenbaoCaozuo } from './articles/lingshenbao-caozuo';
import { article as daizhangVsZhaokuaiji } from './articles/daizhang-vs-zhaokuaiji';
import { article as daizhangFuwuNeirong } from './articles/daizhang-fuwu-neirong';
import { article as jianyiVsYibanZhuxiao } from './articles/jianyi-vs-yiban-zhuxiao';
import { article as dizhiYichangJiechu } from './articles/dizhi-yichang-jiechu';
import { article as feizhengchanghuJiechu } from './articles/feizhengchanghu-jiechu';
import { article as zhuceZibenTianxie } from './articles/zhuce-ziben-tianxie';
import { article as xingongsiShebaoKaihu } from './articles/xingongsi-shebao-kaihu';
import { article as shanghaiGongsiZhuceLiucheng } from './articles/shanghai-gongsi-zhuce-liucheng';
import { article as xiaoguimoVsYibanranshuiren } from './articles/xiaoguimo-vs-yibanranshuiren';
import { article as jingyingYichangJiechu } from './articles/jingying-yichang-jiechu';

export type { Article, ArticleBlock };

export const articles: Article[] = [
  xiaoweiShuishouYouhui,
  zhuceDizhiZhuzhai,
  getihuVsGongsi,
  daizhangYinianDuoshaoqian,
  buZhuxiaoHouguo,
  nazhengHouBibandeShi,
  lingshenbaoCaozuo,
  daizhangVsZhaokuaiji,
  daizhangFuwuNeirong,
  jianyiVsYibanZhuxiao,
  dizhiYichangJiechu,
  feizhengchanghuJiechu,
  zhuceZibenTianxie,
  xingongsiShebaoKaihu,
  shanghaiGongsiZhuceLiucheng,
  xiaoguimoVsYibanranshuiren,
  jingyingYichangJiechu,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
