import React, { useEffect, useState } from 'react';

function OrderList({ onEdit }) {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const res = await fetch('http://localhost:3001/orders');
        const data = await res.json();
        setOrders(data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const deleteOrder = async (id) => {
        await fetch(`http://localhost:3001/orders/${id}`, {
            method: 'DELETE',
        });
        fetchOrders();
    };

    return (
        <div>
            <h2>Siparişler</h2>
            {orders.map((order) => (
                <div key={order.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
                    <p><strong>{order.name}</strong>: {order.item}</p>
                    <button onClick={() => onEdit(order)}>Düzenle</button>
                    <button onClick={() => deleteOrder(order.id)}>Sil</button>
                </div>
            ))}
        </div>
    );
}

export default OrderList;
