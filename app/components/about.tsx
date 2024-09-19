
const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">关于我们</h1>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          我们成立于2023年，致力于为中小企业提供一站式财税服务，助力企业轻松创业，为企业财税保驾护航。我们是上海、北京、深圳、成都各大园区的财税合作商，内部核心成员均来自企业，人均10年以上财务工作经验，中级以上职称，熟悉主流行业的全盘财税工作，以满足中小企业老板们切实的财税需求为宗旨，让客户选的放心，用的安心！
        </p>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">联系我们</h2>
        <div className="inline-block">
          <img 
            src="/wx.png" 
            alt="微信二维码" 
            width={200} 
            height={200}
            className="rounded-lg shadow-md"
          />
          <p className="mt-2 text-gray-600">扫描二维码添加我们的微信</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;