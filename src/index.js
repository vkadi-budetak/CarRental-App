import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { store } from 'redax/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/CarRental-App'>
    <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
