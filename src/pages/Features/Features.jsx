
import React from 'react'
import './Features.css' 


const features = [
  {
    title: "Real-time Market Data",
    description: "Get real-time data on cryptocurrency prices, market cap, and trading volume.",
    icon: "📊" 
  },
  {
    title: "Secure Wallet",
    description: "Store your cryptocurrencies securely with our state-of-the-art wallet.",
    icon: "🔒"
  },
  {
    title: "Low Fees",
    description: "Enjoy low transaction fees when trading cryptocurrencies on our platform.",
    icon: "💸"
  },
  {
    title: "Advanced Analytics",
    description: "Use advanced analytics tools to track and optimize your investments.",
    icon: "📈"
  },
  {
    title: "Mobile App",
    description: "Manage your portfolio on the go with our intuitive mobile app.",
    icon: "📱"
  },
  {
    title: "24/7 Support",
    description: "Our support team is available 24/7 to assist you with any queries.",
    icon: "🕒"
  }
];

const Features = () => {
  return (
    <div className="features-container">
      <h1 className="features-title">Features</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features

