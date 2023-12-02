import React, { useState } from 'react';

function Booking() {
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setBookingInfo({ ...bookingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the booking logic here
    alert('Booking submitted!');
  };

  return (
    <section>
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <input type="number" name="guests" min="1" onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default Booking;
