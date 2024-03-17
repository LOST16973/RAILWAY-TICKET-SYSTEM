import React, { useState } from 'react';

function BookingForm() {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    numberOfTickets: 1
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle ticket booking (e.g., send booking details to backend)
    console.log('Booking details:', bookingData);
  };

  return (
    <div className='ticket-search form'>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookingData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={bookingData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="numberOfTickets">Number of Tickets:</label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            value={bookingData.numberOfTickets}
            onChange={handleChange}
            min={1}
            required
          />
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;
