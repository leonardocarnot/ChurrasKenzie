import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { BbcProvider } from './Providers/Bbc';
import { UserProvider } from './Providers/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BbcProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BbcProvider>
    </UserProvider>
  </React.StrictMode>
);