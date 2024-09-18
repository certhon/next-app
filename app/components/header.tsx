import Image from 'next/image';

type HeaderProps = {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
};

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const tabs = [
    { id: 'home', name: '首页' },
    { id: 'business', name: '业务介绍' },
    { id: 'about', name: '关于我们' },
    { id: 'contact', name: '联系我们' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="公司logo" width={150} height={50} />
        </div>
        <nav>
          <ul className="flex space-x-6">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`text-lg font-semibold ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;