import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Travel/CityDetail.css';

const CityDetail = () => {
  const { country, city } = useParams();
  const [travelData, setTravelData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/travel/${country}/${city}`);
        setTravelData(res.data);
      } catch (err) {
        console.error('Error fetching city travel data:', err);
      }
    };

    fetchData();
  }, [country, city]);

  if (!travelData) return <div className="loading">Loading...</div>;

  return (
    <div className="city-detail">
      <h2>{travelData.title}</h2>
      <p className="city-description">{travelData.description}</p>
      <div className="city-sections">
        {travelData.sections.map((section, index) => (
          <div key={index} className="city-section">
            {section.type === 'text' ? (
              <p>{section.value}</p>
            ) : (
              <img src={`/uploads/${section.value}`} alt={`Section ${index}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityDetail;