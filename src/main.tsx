import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App'; // Updated import path to match new structure
import './index.css';

// Get root element with error handling
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Failed to find the root element");
  throw new Error("Root element with id 'root' not found in the DOM");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-xob5q2qx8z60cn13.us.auth0.com"
      clientId="TorvOF9ld8WDmVy4fev0gcof4PTUmJ4E"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// Log application startup in development mode
if (import.meta.env.DEV) {
  console.log(`Jam Analytics app started`);
}