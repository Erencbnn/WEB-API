import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' kullanılması gerekiyor
import App from './App';
import { CartProvider } from './context/CartContext'; // CartContext'i import et

// React 18 ve sonrası için createRoot kullanımı
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
