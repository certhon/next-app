const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">公司信息</h3>
              <p>版权所有 © 2024 上海礼乘财务咨询服务有限责任公司</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <p>电话：150-2166-6782</p>
              <p>邮箱：business@lcfin.cn</p>
              <p>微信：lichengcaishui666</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">地址</h3>
              <p>上海市浦东新区浦东大道535号</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;