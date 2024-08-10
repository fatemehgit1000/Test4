import React, { useState } from 'react';

function SeatSelector() {
  const [seats, setSeats] = useState([
    { id: 1, available: true },
    { id: 2, available: true },
    { id: 3, available: false },
    { id: 4, available: true },
    { id: 6, available: true },
    { id: 7, available: true },
    { id: 8, available: true },
    { id: 9, available: true },
    { id: 10, available: true },
    { id: 11, available: true },
    { id: 12, available: true },
    { id: 13, available: true },
    { id: 14, available: true },
    { id: 15, available: true },
    { id: 16, available: true },
    { id: 17, available: true },
    { id: 18, available: true },
    { id: 19, available: true },
    { id: 20, available: true },
    { id: 21, available: true },
    { id: 22, available: true },
    { id: 23, available: true },
    { id: 24, available: true },
    { id: 25, available: true },
    { id: 26, available: true },
    { id: 27, available: true },
    { id: 28, available: true },
    { id: 29, available: true },
    { id: 30, available: true },
    { id: 31, available: true },
    { id: 32, available: true },
    { id: 33, available: true },
    { id: 34, available: true },
    { id: 35, available: true },
    { id: 36, available: true },
    { id: 37, available: true },
    { id: 38, available: true },
    { id: 39, available: true },
    { id: 40, available: true },
    { id: 41, available: true },
    { id: 42, available: true },
    { id: 43, available: true },
    { id: 44, available: true },
    { id: 45, available: true },
    { id: 46, available: true },
    { id: 47, available: true },
    { id: 48, available: true },
    { id: 49, available: true },
    { id: 50, available: true },
   

   
    // add more seats as needed
  ]);

  const handleSeatClick = (seatId) => {
    const updatedSeats = seats.map((seat) => {
      if (seat.id === seatId) {
        if (!seat.available) {
          alert('قبلا رزرو شده');
        } else {
          return { ...seat, available: !seat.available };
        }
      }
      return seat;
    });
    setSeats(updatedSeats);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Seat Selector</h1>
        <div className="summary">
          <div>Available Seats: {seats.filter((seat) => seat.available).length}</div>
          <div>Reserved Seats: {seats.filter((seat) => !seat.available).length}</div>
        </div>
      </div>
      {seats.length === 0 ? (
        <div className="message">No seats available.</div>
      ) : (
        <div className="seat-container">
          {seats.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${seat.available ? 'available' : 'reserved'}`}
              onClick={() => handleSeatClick(seat.id)}
            >
              {seat.id}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SeatSelector;