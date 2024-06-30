import React from 'react';
import maps from '../assets/maps.png';
import '../Style/ical.css';

function GoogleMaps({ loc }) {
  const handleButtonClick = () => {
    const encodedAddress = encodeURIComponent(loc);
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(url, '_blank');  // Ouvre l'URL dans une nouvelle fenêtre/tab
  };

  return (
    <button className="image-button" onClick={handleButtonClick}>
      <img src={maps} alt="Google Maps" />
      Voir l'itinéraire
    </button>
  );
}

export default GoogleMaps;
