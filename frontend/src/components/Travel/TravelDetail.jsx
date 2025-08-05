import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Travel/TravelDetail.css';

const TravelDetail = () => {
  const { country, city } = useParams();
  const [travelData, setTravelData] = useState(null);

  useEffect(() => {
    const fetchTravelDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/travel/${country}/${city}`);
        setTravelData(response.data);
      } catch (error) {
        console.error('Error fetching travel data:', error);
      }
    };

    fetchTravelDetail();
  }, [country, city]);

  if (!travelData) return <div className="loading">Loading...</div>;

  return (
    <div className="travel-detail-container">
      <h2>{travelData.title}</h2>
      <p className="location">{travelData.country} / {travelData.city}</p>

      <div className="travel-contents">
        {travelData.contents.map((item, index) => (
          item.type === 'text' ? (
            <p key={index} className="travel-text">{item.content}</p>
          ) : (
            <img
              key={index}
              className="travel-image"
              src={item.content}
              alt={`Travel content ${index}`}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default TravelDetail;