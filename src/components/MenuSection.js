import React, { useState, useContext } from 'react';
import './MenuSection.css';
import { CartContext } from '../context/CartContext'; // ← Bu önemli

const categories = ['Tümü', 'Kebap', 'Fast Food', 'Salata', 'Tatlı'];


function MenuSection({ menuItems }) {
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const { addToCart } = useContext(CartContext); // ← Sepete ekleme fonksiyonunu alıyoruz

    // Seçilen kategoriye göre filtreleme işlemi
    const filteredItems = selectedCategory === 'Tümü'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    return (
        <div className="menu-container">
            <h2>Menü</h2>

            <div className="category-buttons">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={selectedCategory === cat ? 'active' : ''}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="menu-grid">
                {filteredItems.map(item => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} className="menu-image" />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span className="price">{item.price}</span>
                        <button onClick={() => addToCart(item)}>
                            Sepete Ekle
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuSection;
