import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Travel() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    axios.get('/api/travel')
      .then(res => setTravels(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Travel Destinations</h2>
      <ul className="list-group">
        {travels.map(travel => (
          <li key={travel.id} className="list-group-item">
            <h5>{travel.title}</h5>
            <p>{travel.description}</p>
            <p><strong>Location:</strong> {travel.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Travel;
