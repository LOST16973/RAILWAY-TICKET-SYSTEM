import React, { useState } from 'react';

function TicketSearch() {
  const [searchData, setSearchData] = useState({
    source: '',
    destination: '',
    date: ''
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle ticket search (e.g., send search criteria to backend)
    console.log('Search criteria:', searchData);
  };

  return (
    <div className='ticket-search'>
      <h2 >Ticket Search</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            name="source"
            value={searchData.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={searchData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={searchData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default TicketSearch;
