import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './pages/App'; // Importing the main App component
import './index.css';

// Get the root DOM element where React will mount
const rootElement = document.getElementById('root');

// Log a message when starting the app in development mode for easier debugging
if (import.meta.env.DEV) {
  console.log(`Jam Analytics app started`);
}

// Error handling if root element is missing
if (!rootElement) {
  console.error("Failed to find the root element");
  throw new Error("Root element with id 'root' not found in the DOM");
}

// Render the entire app
ReactDOM.createRoot(rootElement).render(
  // Set up React Router for handling client-side routes
  <BrowserRouter>
    {/* 
      Auth0Provider wraps the app to provide authentication context 
      - domain: your Auth0 tenant domain
      - clientId: the unique identifier for your Auth0 application
      - redirect_uri: where Auth0 will redirect after login (typically your app's home page)
      - cacheLocation="localstorage" ensures auth state is persisted even after page reload 
    */}
    <Auth0Provider
      domain="dev-xob5q2qx8z60cn13.us.auth0.com" // Your Auth0 domain
      clientId="TorvOF9ld8WDmVy4fev0gcof4PTUmJ4E" // Your Auth0 client ID
      authorizationParams={{
        redirect_uri: window.location.origin // Redirects users back to the homepage after authentication
      }}
      cacheLocation="localstorage" // Persist tokens in local storage for session longevity
    >
      {/* The main app is placed inside the Auth0Provider so all child components can access authentication state */}
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
