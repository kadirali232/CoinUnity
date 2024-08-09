import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Pricing from './pages/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Features from './pages/Features/Features';
import Blog from './pages/Blog/Blog';
import LogIn from './pages/Log In/LogIn';
import SignUp from './pages/Sign Up/SignUp';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/Features' element={<Features />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
