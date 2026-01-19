import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { reduxStore } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={reduxStore}>
  <ConfigProvider >
  <App />
</ConfigProvider>
</Provider>
);
