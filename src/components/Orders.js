import React, { useEffect, useState } from 'react';
import OrderForm from './OrderForm';
import './Orders.css';

const Orders = ({ menuItems }) => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const fetchOrders = async () => {
        try {
            const res = await fetch('http://localhost:3001/orders');
            const data = await res.json();
            setOrders(data);
        } catch (err) {
            console.error('Siparişler alınamadı:', err);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Bu siparişi silmek istediğinize emin misiniz?')) {
            try {
                await fetch(`http://localhost:3001/orders/${id}`, {
                    method: 'DELETE',
                });
                fetchOrders();
            } catch (err) {
                console.error('Silme hatası:', err);
            }
        }
    };

    const handleEdit = (order) => {
        setSelectedOrder(order);
    };

    return (
        <div>
            <OrderForm
                onSave={fetchOrders}
                selectedOrder={selectedOrder}
                menuItems={menuItems}
            />

            <h2>Siparişler</h2>
            <ul className="order-list">
                {orders.map((order) => (
                    <li key={order.id}>
                        <strong>{order.name}</strong> - {order.item}
                        <div className="actions">
                            <button onClick={() => handleEdit(order)}>Düzenle</button>
                            <button onClick={() => handleDelete(order.id)}>Sil</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
