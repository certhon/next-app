"use client";
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/home';
import BusinessIntro from './components/business';
import AboutUs from './components/about';
import ContactUs from './components/contact';
import { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'business':
        return <BusinessIntro />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
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