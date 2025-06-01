import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // CartContext'i import et

const Cart = () => {
    const { cartItems } = useContext(CartContext); // Sepet öğelerini CartContext'ten al

    return (
        <div>
            <h2>Sepet</h2>
            {cartItems.length === 0 ? (
                <p>Sepetiniz boş.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} width={50} height={50} />
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
