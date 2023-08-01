import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 Kommunicate.init("2a71f7352ca2cf0a05f5b52cab0ecbddd", {
   automaticChatOpenOnNavigation: true,
      "popupWidget":true,
            "automaticChatOpenOnNavigation":true,
            "voiceInput":true,
            "voiceInputTimeout": 5 ,
            "language": "en-US"
 });
