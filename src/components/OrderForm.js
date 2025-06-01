import React, { useState, useEffect } from 'react';

const OrderForm = ({ onSave, selectedOrder, menuItems }) => {
    const [order, setOrder] = useState({ name: '', item: '' });

    useEffect(() => {
        if (selectedOrder) {
            setOrder(selectedOrder);
        } else {
            setOrder({ name: '', item: '' });
        }
    }, [selectedOrder]);

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (order.name.length < 3) {
            alert("İsim en az 3 karakter olmalıdır.");
            return;
        }

        if (!order.item) {
            alert("Lütfen bir yemek seçin.");
            return;
        }

        const url = selectedOrder
            ? `http://localhost:3001/orders/${selectedOrder.id}`
            : `http://localhost:3001/orders`;

        const method = selectedOrder ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order),
            });

            if (response.ok) {
                alert(selectedOrder ? 'Sipariş güncellendi!' : 'Sipariş gönderildi!');
                setOrder({ name: '', item: '' });
                onSave();
            } else {
                alert('Bir hata oluştu.');
            }
        } catch (error) {
            console.error(error);
            alert('Sunucuya ulaşılamadı.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                name="name"
                value={order.name}
                onChange={handleChange}
                placeholder="İsminiz"
                style={{ marginRight: '10px' }}
            />

            <select
                name="item"
                value={order.item}
                onChange={handleChange}
                style={{ marginRight: '10px' }}
            >
                <option value="">Yemek seçin</option>
                {menuItems.map(item => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>

            <button type="submit">{selectedOrder ? 'Güncelle' : 'Gönder'}</button>
        </form>
    );
};

export default OrderForm;
