import React from 'react';
import './SignUp.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


const SignUp = () => {


  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <h3>Create your account</h3>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign Up</button>
          <div className="separator">
            <h4>Or</h4>
          </div>
          <div className='google-login-container'>
          <GoogleLogin
            onSuccess={(credentialResponse) => { 
              const decoded = jwtDecode(credentialResponse?.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            render={(renderProps) => (
              <button
                className="sign-in google-login"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Sign in with Google
              </button>
            )}
          />
          </div>
          <div className="login-prompt">
            <h5>Already have an account ?</h5>
            <h6 onClick={() => window.location.href = '/login'}>Log In</h6>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

