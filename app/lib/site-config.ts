// 站点全局配置：联系方式、域名、统计等集中在此维护
export const siteConfig = {
  siteName: '礼乘财税',
  companyName: '上海礼乘信息技术有限公司',
  siteUrl: 'https://www.licheng.tech',
  slogan: '礼乘有你，礼成为安',

  phone: '150-2166-6782',
  phoneRaw: '15021666782',
  wechatId: 'lichengcaishui666',
  email: 'business@lcfin.cn',
  address: '上海市浦东新区浦东大道535号',
  workTime: '工作日 9:00 - 18:00（微信可 24 小时留言）',

  // 飞书机器人 webhook：访客通知与表单留资共用
  feishuWebhook:
    'https://open.feishu.cn/open-apis/bot/v2/hook/73ba8a0e-19e0-4ba0-897e-080497c5f488',

  // 百度统计站点 ID（hm.baidu.com 后台获取，形如 32 位字符串）；留空则不注入统计脚本
  baiduAnalyticsId: '8a0fec12d0090afc236062a8868131f5',
  // 百度搜索资源平台站点验证码（ziyuan.baidu.com 获取）；留空则不输出验证 meta
  baiduSiteVerification: '',

  // 资质信息：证书编号不在页面直接展示，引导加微信核验
  credentials: {
    licenseName: '代理记账许可证',
    licenseNote: '证书编号及原件，添加微信即可核验查看',
    licenseIssuer: '上海市浦东新区财政局核发',
    regulatorName: '全国代理记账行业管理系统',
    regulatorUrl: 'https://dljz.mof.gov.cn',
    gsxtName: '国家企业信用信息公示系统',
    gsxtUrl: 'https://www.gsxt.gov.cn',
  },

  // 首页信任数字带：均须真实可支撑，如有更新直接改这里
  trustStats: [
    { value: '10 年+', label: '核心成员人均财务从业经验' },
    { value: '中级+', label: '核心成员均持中级以上职称' },
    { value: '4 城', label: '上海/北京/深圳/成都园区合作' },
    { value: '12 项', label: '一站式企业财税服务' },
  ],

  // 服务承诺：须真实可兑现
  promises: [
    {
      title: '持证经营',
      desc: '持有财政部门核发的代理记账许可证，资质信息可在监管平台核验。',
    },
    {
      title: '价格透明',
      desc: '报价即全价，服务前明确收费项目，无任何隐形加价。',
    },
    {
      title: '差错担责',
      desc: '因我方工作差错造成的罚款损失，由我方承担相应责任。',
    },
    {
      title: '数据安全',
      desc: '签署保密协议，票据、账册与经营数据专人加密保管。',
    },
  ],
};
