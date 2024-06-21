import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const domain='dev-6dibrt8c1lbudsge.us.auth0.com'
const client_id='L7Zr3aoFLkoMjjMPjkJwuAoy2kSRd6eM'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider domain={domain}clientId={client_id}authorizationParams={{
      redirect_uri: 'https://franklynsierra.github.io/unsplash-page-copy/'
    }} >
   <App />
   </Auth0Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
