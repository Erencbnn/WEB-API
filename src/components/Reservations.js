import React, { useState } from 'react';

function Reservations() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [reservationMade, setReservationMade] = useState(false);

    const handleReservation = () => {
        if (name && date) {
            setReservationMade(true);
        }
    };

    return (
        <div>
            <h2>Rezervasyon</h2>
            {reservationMade ? (
                <p>Rezervasyon başarıyla yapıldı! {name} için {date} tarihinde.</p>
            ) : (
                <div className="reservation-form">
                    <input
                        type="text"
                        placeholder="Adınızı girin"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <button onClick={handleReservation}>Rezervasyon Yap</button>
                </div>
            )}
        </div>
    );
}

export default Reservations;
