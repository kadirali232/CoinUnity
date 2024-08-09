import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CoinContextProvider from './context/Coincontext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientId= "504555717760-cqo8iamvplpjlu0s7vmkqrrumk41fdo9.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId= {clientId}>
      <BrowserRouter>
        <CoinContextProvider>
          <App />
        </CoinContextProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
