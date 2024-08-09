import React from 'react'
import './Pricing.css'
import { Link } from 'react-router-dom';


const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$10',
      features: ['Access to basic features', 'Weekly market insights', 'Community support'],
    },
    {
      name: 'Pro',
      price: '$30',
      features: ['Access to all features', 'Daily market insights', 'Priority support', 'Access to exclusive webinars'],
    },
    {
      name: 'Premium',
      price: '$50',
      features: ['All Pro features', 'Personalized investment advice', '24/7 dedicated support', 'Private trading sessions'],
    },
  ];

  
  return (
 <div className="pricing-container">
      <h1>Choose Your Plan</h1>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <h2>{plan.name}</h2>
            <p className="price">{plan.price} <span className="per-month">/ month</span></p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <Link to="/SignUp">
              <button className="subscribe-button">Subscribe</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;