const HomePage = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">欢迎来到礼乘科技</h1>
        <p className="text-xl text-center mb-12">我们致力于为您提供最优质的服务</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">创新技术</h2>
            <p>我们不断追求技术创新，为客户提供最前沿的解决方案。</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">优质服务</h2>
            <p>我们的团队致力于为每一位客户提供专业、高效的服务。</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">行业领先</h2>
            <p>凭借丰富的经验和专业知识，我们在行业中保持领先地位。</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;