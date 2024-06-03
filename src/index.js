import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM.createRoot
import 'normalize.css'; // CSS reset
import './index.css'; // Global styles
import App from './App'; // Main component
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


