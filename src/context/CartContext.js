import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); // Sepet öğelerini yönetmek için useState

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]); // Sepete öğe ekleme
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
