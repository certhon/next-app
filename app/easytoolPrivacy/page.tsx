import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EasyTool 隐私政策',
  description: 'EasyTool（PDF 工具箱）隐私政策：所有文件均在设备本地处理，不收集、不上传任何个人信息。',
};

// 要点摘要：放在正文前，方便快速了解
const highlights = [
  '不收集任何个人信息，无需注册或登录',
  '应用没有网络权限，文件不会离开您的设备',
  '不包含广告、统计或崩溃分析等第三方 SDK',
];

const sections = [
  {
    title: '一、我们收集的信息',
    content: [
      'EasyTool 是一款 PDF 工具应用，提供合并、拆分、提取与删除页面、排序旋转、压缩、PDF 与图片互转、添加水印和页码、加密与移除密码等功能。',
      '我们不收集任何能够识别您个人身份的信息，也不收集设备标识符、位置、通讯录、使用行为等数据。本应用没有账号体系，您无需注册或登录即可使用全部功能。',
    ],
  },
  {
    title: '二、文件的处理方式',
    content: [
      '所有文件处理均在您的设备本地完成。本应用未申请网络权限，技术上无法将您的文件或任何数据发送到服务器。',
      '您通过系统文件选择器主动选择文件后，应用仅能访问您选中的文件。为完成处理，应用会在自身的私有存储空间中临时保存文件副本，其他应用无法访问。',
      '临时副本会在下次启动应用时自动清除；处理结果文件会在生成 24 小时后自动清理。您也可以随时在系统设置中清除应用数据，或卸载应用以删除全部相关文件。',
    ],
  },
  {
    title: '三、密码的处理',
    content: [
      '当您打开加密的 PDF 或为 PDF 设置密码时，您输入的密码仅在本地用于解密或加密文件，不会被保存，也不会被发送到任何地方。',
    ],
  },
  {
    title: '四、权限使用说明',
    content: [
      '本应用不申请存储、网络、相机、位置等任何敏感权限。',
      '当您选择文件或保存位置时，由 Android 系统授予应用对该文件或文件夹的访问权限，范围仅限于您的选择。',
      '当您使用「分享」或「打开」功能时，应用会向您选择的目标应用临时授予读取该结果文件的权限。文件在目标应用中的处理适用该应用自身的隐私政策。',
    ],
  },
  {
    title: '五、第三方服务',
    content: [
      '本应用不集成任何广告、统计分析或崩溃上报等第三方 SDK。',
      '本应用通过 Google Play 分发。Google 可能会根据您的设备设置收集应用安装、崩溃等诊断信息，相关处理适用 Google 隐私权政策（https://policies.google.com/privacy）。',
    ],
  },
  {
    title: '六、数据存储与安全',
    content: [
      '由于所有数据均保存在您的设备本地，数据的安全性依赖于您的设备安全。建议您为设备设置锁屏密码，并妥善保管导出的文件。',
      '如果您在系统中开启了备份功能，Android 系统可能会将应用私有存储中的数据备份到您自己的 Google 账号，我们无法访问这些备份数据。',
    ],
  },
  {
    title: '七、儿童隐私',
    content: [
      '本应用不面向 13 周岁以下儿童，也不会收集任何用户（包括儿童）的个人信息。',
    ],
  },
  {
    title: '八、政策更新',
    content: [
      '我们可能会根据产品功能、法律法规或运营需要更新本隐私政策。更新后，我们会在本页面发布新的隐私政策并更新生效日期。如新版本涉及数据处理方式的重大变化，我们会在应用内以显著方式提示。',
    ],
  },
  {
    title: '九、联系我们',
    content: [
      '如果您对本隐私政策或个人信息保护有任何疑问、意见或请求，可以通过邮箱 business@lcfin.cn 联系我们。',
    ],
  },
];

export default function EasyToolPrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-10">
          <header className="mb-8 border-b border-gray-200 pb-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">
              Privacy Policy
            </p>
            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              EasyTool 隐私政策
            </h1>
            <p className="text-sm text-gray-500">生效日期：2026 年 9 月 28 日</p>
          </header>

          <section className="mb-8 space-y-4 text-base leading-8">
            <p>
              欢迎使用 EasyTool（PDF 工具箱）。我们非常重视您的隐私和个人信息保护。本隐私政策说明本应用如何处理与您相关的信息。
            </p>
            <p>
              请您在使用本应用前仔细阅读本隐私政策。您使用本应用，即表示您已了解并同意本隐私政策的内容。
            </p>
          </section>

          <section className="mb-10 rounded-xl bg-red-50 p-5 md:p-6">
            <h2 className="mb-3 text-base font-semibold text-red-700">简要说明</h2>
            <ul className="space-y-2 text-base leading-7 text-gray-700">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
    </div>
  );
}
