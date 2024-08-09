import React, { useContext, useState } from 'react';
import './Navbar.css'; // Ensure this CSS file is linked
import logo from '../../assets/logot.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/Coincontext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "gbp":
        setCurrency({ name: "gbp", symbol: "£" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
    }
  };

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt='Logo' className='navbar-logo' />
      </Link>
      <div className='menu-icon' onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={toggleMenu}><Link to={'/'}>Home</Link></li>
        <li onClick={toggleMenu}><Link to={'/Features'}>Features</Link></li>
        <li onClick={toggleMenu}><Link to={'/Pricing'}>Pricing</Link></li>
        <li onClick={toggleMenu}><Link to={'/Blog'}>Blog</Link></li>
        <li onClick={toggleMenu}><Link to={'/SignUp'}><button> Sign Up <img src={arrow_icon} alt="Arrow icon" /> </button></Link></li>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="gbp">GBP</option>
          <option value="eur">EUR</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
