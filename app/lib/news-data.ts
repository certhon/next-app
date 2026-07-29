// 知识频道文章汇总：每篇文章一个文件放在 ./articles/ 下，此处按展示顺序登记
// 列表页与详情页从这里读取；新文章加在数组最前面即可排在最新

import type { Article, ArticleBlock } from './articles/types';
import { article as farenBiangengLiucheng } from './articles/faren-biangeng-liucheng';
import { article as guquanZhuanrangLiucheng } from './articles/guquan-zhuanrang-liucheng';
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
import { article as yuanquXuniDizhi } from './articles/yuanqu-xuni-dizhi';
import { article as hemingBohuiJiqiao } from './articles/heming-bohui-jiqiao';
import { article as yigerenKaiGongsi } from './articles/yigeren-kai-gongsi';
import { article as zijiBanVsDaiban } from './articles/ziji-ban-vs-daiban';
import { article as zenmeTiaoDaizhang } from './articles/zenme-tiao-daizhang';
import { article as diyiciBaoshui } from './articles/diyici-baoshui';
import { article as xiaoguimoYibanJizhangChayi } from './articles/xiaoguimo-yiban-jizhang-chayi';
import { article as luanzhangZhengli } from './articles/luanzhang-zhengli';
import { article as zhuanpiaoHongxian } from './articles/zhuanpiao-hongxian';
import { article as hefaJieshui } from './articles/hefa-jieshui';
import { article as banjiaShuiwuBiangeng } from './articles/banjia-shuiwu-biangeng';
import { article as zhuxiaoFeiyongShijian } from './articles/zhuxiao-feiyong-shijian';
import { article as diaoxiaoVsZhuxiao } from './articles/diaoxiao-vs-zhuxiao';
import { article as qingsuanBaogaoZhuyi } from './articles/qingsuan-baogao-zhuyi';
import { article as duonianWeibaoshuiZhuxiao } from './articles/duonian-weibaoshui-zhuxiao';
import { article as shebaoZengjianyuan } from './articles/shebao-zengjianyuan';
import { article as shanghaiShebaoDuoshaoqian } from './articles/shanghai-shebao-duoshaoqian';
import { article as shebaoTuoguanHegui } from './articles/shebao-tuoguan-hegui';
import { article as gongjijinBixuJiao } from './articles/gongjijin-bixu-jiao';
import { article as yiPercentZhengshoulv } from './articles/yi-percent-zhengshoulv';
import { article as xiaoxingWeiliRending } from './articles/xiaoxing-weili-rending';
import { article as yanfaJiajiKoucu } from './articles/yanfa-jiaji-koucu';
import { article as getihuGeshuiJianban } from './articles/getihu-geshui-jianban';
import { article as jianziLiucheng } from './articles/jianzi-liucheng';
import { article as shipinJingyingXukezheng } from './articles/shipin-jingying-xukezheng';
import { article as icpXukezhengBeian } from './articles/icp-xukezheng-beian';
import { article as laowuPaiqianXukezheng } from './articles/laowu-paiqian-xukezheng';
import { article as wangdianYingyeZhizhao } from './articles/wangdian-yingye-zhizhao';

export type { Article, ArticleBlock };

export const articles: Article[] = [
  farenBiangengLiucheng,
  guquanZhuanrangLiucheng,
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
  yuanquXuniDizhi,
  hemingBohuiJiqiao,
  yigerenKaiGongsi,
  zijiBanVsDaiban,
  zenmeTiaoDaizhang,
  diyiciBaoshui,
  xiaoguimoYibanJizhangChayi,
  luanzhangZhengli,
  zhuanpiaoHongxian,
  hefaJieshui,
  banjiaShuiwuBiangeng,
  zhuxiaoFeiyongShijian,
  diaoxiaoVsZhuxiao,
  qingsuanBaogaoZhuyi,
  duonianWeibaoshuiZhuxiao,
  shebaoZengjianyuan,
  shanghaiShebaoDuoshaoqian,
  shebaoTuoguanHegui,
  gongjijinBixuJiao,
  yiPercentZhengshoulv,
  xiaoxingWeiliRending,
  yanfaJiajiKoucu,
  getihuGeshuiJianban,
  jianziLiucheng,
  shipinJingyingXukezheng,
  icpXukezhengBeian,
  laowuPaiqianXukezheng,
  wangdianYingyeZhizhao,
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
