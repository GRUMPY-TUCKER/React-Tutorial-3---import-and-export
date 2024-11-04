import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Hello,Hello2,Bye} from './App';
import {value} from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hello/>
    <Hello2/>
    {value}
    <Bye/>
  </React.StrictMode>
);
