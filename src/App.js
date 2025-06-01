import React, { useState, useContext } from 'react';
import './App.css';
import Menu from './components/menu';
import Orders from './components/Orders';
import Reservations from './components/Reservations';
import About from './components/About';
import { CartContext } from './context/CartContext';

function App() {
  const [activeTab, setActiveTab] = useState('menu');
  const { cartItems } = useContext(CartContext);

  const menuItems = [
    { id: 1, name: 'Pizza Margherita' },
    { id: 2, name: 'Double Cheeseburger' },
    { id: 3, name: 'Akdeniz Salatası' },
    { id: 4, name: 'Adana Kebap' },
    { id: 5, name: 'Sezar Salata' },
    { id: 6, name: 'Lahmacun' },
    { id: 7, name: 'Mantı' },
    { id: 8, name: 'Tavuk Şiş' },
    { id: 9, name: 'Künefe' },
    { id: 10, name: 'Baklava' }
  ];

  return (
    <div className="App">
      <div className="tabs">
        <button onClick={() => setActiveTab('menu')}>Menü</button>
        <button onClick={() => setActiveTab('orders')}>Siparişler</button>
        <button onClick={() => setActiveTab('reservations')}>Rezervasyonlar</button>
        <button onClick={() => setActiveTab('about')}>Hakkımızda</button>
      </div>

      <div className="content">
        {activeTab === 'menu' && <Menu menuItems={menuItems} />}
        {activeTab === 'orders' && <Orders menuItems={menuItems} />}
        {activeTab === 'reservations' && <Reservations />}
        {activeTab === 'about' && <About />}
      </div>

      {activeTab === 'menu' && (
        <div className="cart">
          <h2>Sepet</h2>
          {cartItems.length === 0 ? (
            <p>Sepetiniz boş.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
