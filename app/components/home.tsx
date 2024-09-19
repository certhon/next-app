const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">欢迎来到礼乘财税</h1>
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/11.jpg" alt="礼乘财税服务" className="rounded-lg shadow-lg" width={563} height={375} />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-xl text-center md:text-left mb-8">礼乘有你，礼成为安</p>
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4"> 财务无忧</h2>
              <p>我们的团队由来自企业财务行业的专业人士组成，提供一站式财务代理服务。无销售干扰，直接与专业财务对接，确保每项服务都精准到位，让您畅享高效、透明的财务管理体验。</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">创业无忧</h2>
              <p>我们致力于为创业者提供全面的财务支持，涵盖企业注册、注销和专业记账服务。由资深财务团队为您量身定制解决方案，让您在创业之路上无后顾之忧，专注实现您的商业梦想。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;