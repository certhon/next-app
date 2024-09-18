const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">公司信息</h3>
              <p>礼乘科技有限公司</p>
              <p>版权所有 © 2023 礼乘科技</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <p>电话：123-456-7890</p>
              <p>邮箱：info@licheng.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">地址</h3>
              <p>中国上海市浦东新区张江高科技园区</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;