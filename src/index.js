import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-2g5eyen0qniqwjqs.us.auth0.com"
    clientId="AfTsPiFdOQmjVwkoOrH5v0XNj0mTL0eq"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
