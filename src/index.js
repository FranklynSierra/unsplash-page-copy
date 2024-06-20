import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain=process.env.REACT_APP_AUTH0_DOMAIN
const client_id=process.env.REACT_APP_Auth_App_Auth0_Client_Id

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider domain={domain}clientId={client_id}authorizationParams={{
      redirect_uri: window.location.origin
    }} >
   <App />
   </Auth0Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
