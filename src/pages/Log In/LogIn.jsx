import React from 'react'
import './LogIn.css'

const LogIn = () => {
  
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Log In</h2>
        <h3>Sign In to your account</h3>
        <form>
          <div className="log-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="signin">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn
