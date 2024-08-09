import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>Inquiries</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li>Support Center</li>
          <li>24/7 Chat Support</li>
          <li>Fees</li>
          <li>Trading Rules</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          <li>Terms</li>
          <li>Privacy Notice</li>
          <li>Compliance</li>
          <li>Risk Warning</li>
          <li>Law Enforcement Request</li>
          <li>Licenses & Registrations</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Products</h3>
        <ul>
          <li>Spot</li>
          <li>OCBS</li>
          <li>Convert</li>
          <li>NFT</li>
        </ul>
      </div>
      <div className="footer-message">
        <hr />
        <p>KD23 Services Limited, trading as CoinUnity, is the entity ultimately responsible for the KD23 Services offered through the Platform.</p>
        <p>Trading cryptocurrencies involves significant risk and can result in the loss of your capital. You should not invest more than you can afford to lose and you should ensure that you fully understand the risks involved. Before trading, please take into consideration your level of experience, investment objectives, and seek independent financial advice if necessary. It is your responsibility to ascertain whether you are permitted to use the services of CoinUnity based on the legal requirements in your country of residence. Neither the firm nor investments in cryptoassets are regulated by the Financial Conduct Authority, nor covered by the Financial Ombudsman Service or subject to protection under the Financial Services Compensation Scheme. The information on this site is not directed at residents of the United States, Canada, Singapore, Japan, Korea, Australia, and New Zealand or any particular country or jurisdiction where such distribution or use would be contrary to local law or regulation.</p>
        <p>CoinUnity© 2024 | Cookie Preferences</p>
      </div>
    </footer>
  );
}

export default Footer;
