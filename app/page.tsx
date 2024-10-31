"use client";
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/home';
import BusinessIntro from './components/business';
import AboutUs from './components/about';
import ContactUs from './components/contact';
import { useEffect, useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const sendMessageToFeishu = async () => {
      // 飞书机器人 webhook 地址
      const webhookUrl = 'https://open.feishu.cn/open-apis/bot/v2/hook/73ba8a0e-19e0-4ba0-897e-080497c5f488';
      
      // 要发送的消息内容
      const messageData = {
        msg_type: 'text',
        content: {
          text: 'wow ! a visiter is coming to our website !'
        }
      };
  
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(messageData),
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log('Message sent successfully:', data);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    };

    sendMessageToFeishu();
  }, [])





  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'business':
        return <BusinessIntro />;
      case 'about':
        return <AboutUs />;
      // case 'contact':
      //   return <ContactUs />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default Home;