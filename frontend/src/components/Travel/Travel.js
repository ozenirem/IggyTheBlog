import React, { useState } from 'react';
import '../Travel/Travel.css';
import { useNavigate } from 'react-router-dom';
import AddCityForm from '../Travel/AddCityForm';

const countryCities = {
  Italy: [
    { name: 'Rome', image: require('../assets/cities/rome.jpeg') },
    { name: 'Florence', image: require('../assets/cities/florence.jpeg') },
    { name: 'Pisa', image: require('../assets/cities/pisa.jpg') },
  ],
  Turkey: [
    { name: 'Istanbul', image: require('../assets/cities/istanbul.jpg') },
    { name: 'Cappadocia', image: require('../assets/cities/izmir.jpeg') },
    { name: 'Ephesus', image: require('../assets/cities/ankara.jpg') },
  ],
  France: [
    { name: 'Paris', image: require('../assets/cities/paris.jpg') },
  ],
  Portugal: [
    { name: 'Lisbon', image: require('../assets/cities/lisbon.jpg') },
    { name: 'Porto', image: require('../assets/cities/porto.jpg') },
    { name: 'Sintra', image: require('../assets/cities/sintra.jpg') },
    { name: 'Faro', image: require('../assets/cities/faro.jpg') },
    { name: 'Cascais', image: require('../assets/cities/cascais.jpg') },
  ],
  Germany: [
    { name: 'Cologne', image: require('../assets/cities/cologne.png') },
    { name: 'Aachen', image: require('../assets/cities/aachen.jpg') },
  ],
  Netherlands: [
    { name: 'Utrecht', image: require('../assets/cities/utrecht.jpg') },
    { name: 'Amsterdam', image: require('../assets/cities/amsterdam.jpg') },
    { name: 'Eindhoven', image: require('../assets/cities/eindhoven.jpg') },
  ],
  Belgium: [
    { name: 'Brugge', image: require('../assets/cities/brugge.jpg') },
    { name: 'Brussels', image: require('../assets/cities/brussels.jpg') },
    { name: 'Antwerp', image: require('../assets/cities/antwerp.jpg') },
  ],
};

const Travel = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const navigate = useNavigate();

  const countries = Object.keys(countryCities);

  const handleCityAdded = () => {
    setShowAddForm(false);

  };

  return (
    <div className="travel-page">
      <div className={`country-buttons ${selectedCountry ? 'move-up' : ''}`}>
        {countries.map((country) => (
          <button
            key={country}
            className={`country-btn ${selectedCountry === country ? 'active' : ''}`}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      {selectedCountry && (
        <>
          <div className="add-city-bar">
            <button className="add-btn" onClick={() => setShowAddForm(true)}>+ Add City</button>
          </div>

          <div className="city-grid">
            {countryCities[selectedCountry].map((city) => (
              <div
                key={city.name}
                className="city-card"
                onClick={() =>
                  navigate(`/travel/${selectedCountry.toLowerCase()}/${city.name.toLowerCase()}`)
                }
              >
                <img src={city.image} alt={city.name} />
                <h5>{city.name} Travel Guide</h5>
              </div>
            ))}
          </div>

          {showAddForm && (
            <AddCityForm
              onClose={() => setShowAddForm(false)}
              onSaved={handleCityAdded}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Travel;