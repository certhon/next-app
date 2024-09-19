const BusinessIntro = () => {
  const services = [
    { title: "工商注册", description: "专业团队协助您快速完成公司注册流程" },
    { title: "工商变更", description: "高效处理公司信息变更,保证合规运营" },
    { title: "企业注销", description: "一站式企业注销服务,省心省力" },
    { title: "解除异常", description: "专业处理企业经营异常状态,恢复正常经营" },
    { title: "税务疑难", description: "解决各类税务问题,确保企业合规纳税" },
    { title: "代理记账", description: "专业记账服务,让您专注核心业务" },
    { title: "资质许可", description: "协助企业获取各类经营资质和许可证" },
    { title: "纳税筹划", description: "合法优化企业税负,提高经营效益" },
    { title: "社保服务", description: "全面的社保代缴和咨询服务" },
    { title: "补贴申请", description: "协助企业申请各类政府补贴和优惠政策" },
    { title: "软件开发", description: "定制化软件开发,满足企业特定需求" },
    { title: "灵活用工", description: "提供灵活用工解决方案,优化人力资源管理" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-3 text-blue-600">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessIntro;