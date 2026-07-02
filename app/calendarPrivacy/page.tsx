import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日历应用隐私政策',
  description: '日历应用隐私政策',
};

const sections = [
  {
    title: '一、我们收集的信息',
    content: [
      '本应用主要用于日历、日程或提醒相关功能。除实现应用基本功能所必需的信息外，我们不会主动收集能够直接识别您个人身份的信息。',
      '在使用过程中，应用可能会在您的设备本地读取或保存日程、提醒、设置偏好等数据，用于展示日历内容、创建提醒和改善使用体验。',
    ],
  },
  {
    title: '二、权限使用说明',
    content: [
      '日历权限：用于读取、创建或管理您授权范围内的日历事件。',
      '通知权限：用于在您设置提醒后发送本地通知。',
      '网络权限：用于应用基础服务、问题排查或必要的内容加载。',
      '我们只会在实现相关功能所需时请求权限，您可以在系统设置中随时关闭相应权限。',
    ],
  },
  {
    title: '三、信息的使用方式',
    content: [
      '我们使用相关信息仅用于提供、维护和改进本应用的功能，包括展示日历、保存提醒设置、发送日程提醒以及处理用户反馈。',
      '未经您的授权，我们不会将您的个人信息出售、出租或以其他方式提供给无关第三方。',
    ],
  },
  {
    title: '四、第三方服务',
    content: [
      '本应用可能会使用 Google Play、系统通知、崩溃分析或统计分析等第三方服务，以保障应用稳定运行和持续改进。',
      '第三方服务可能会根据其自身隐私政策处理必要的数据。我们会尽量选择具备合理安全保障能力的服务提供方。',
    ],
  },
  {
    title: '五、数据存储与安全',
    content: [
      '我们会采取合理的技术和管理措施保护相关数据，防止未经授权的访问、披露、修改或丢失。',
      '如果日程或提醒数据仅保存在您的设备本地，删除应用或清除应用数据可能会导致相关数据被删除。',
    ],
  },
  {
    title: '六、儿童隐私',
    content: [
      '本应用不面向 13 周岁以下儿童主动收集个人信息。如果监护人发现儿童在未取得同意的情况下向我们提供了个人信息，请及时联系我们，我们会尽快处理。',
    ],
  },
  {
    title: '七、政策更新',
    content: [
      '我们可能会根据产品功能、法律法规或运营需要更新本隐私政策。更新后，我们会在本页面发布新的隐私政策。',
    ],
  },
  {
    title: '八、联系我们',
    content: [
      '如果您对本隐私政策或个人信息保护有任何疑问、意见或请求，可以通过邮箱 business@lcfin.cn 联系我们。',
    ],
  },
];

export default function CalendarPrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <article className="rounded-2xl bg-white p-6 shadow-lg md:p-10">
          <header className="mb-10 border-b border-gray-200 pb-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
              Privacy Policy
            </p>
            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              日历应用隐私政策
            </h1>
            <p className="text-sm text-gray-500">生效日期：2026 年 7 月 2 日</p>
          </header>

          <section className="mb-8 space-y-4 text-base leading-8">
            <p>
              欢迎使用日历应用。我们非常重视您的隐私和个人信息保护。本隐私政策说明我们如何收集、使用、存储和保护与本应用相关的信息。
            </p>
            <p>
              请您在使用本应用前仔细阅读本隐私政策。您使用本应用，即表示您已了解并同意本隐私政策的内容。
            </p>
          </section>

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">
                  {section.title}
                </h2>
                <div className="space-y-3 text-base leading-8 text-gray-700">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
