import React from 'react';
import PropTypes from 'prop-types';
import ICalButton from './iCal.jsx';
import GoogleMaps from './GoogleMaps.jsx';

function Card({ img, alt, title, desc, descr, loc, jour, DDB, DDF }) {
  // Vérifier si les props pour ICalButton sont valides
  const isICalButtonValid = title && descr && loc && DDB && DDF;

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <img src={img} alt={alt} className="card-image" />

      <p>
        {jour ? `${jour} Juillet 2024` : <i>🚧 choix de la date en cours 🚧</i>}
      </p>

      <p className="card-description">{desc}</p>

      <div className="buttons">
      {isICalButtonValid && <ICalButton className="ical-button" title={title} descr={descr} loc={loc} DDB={DDB} DDF={DDF} />}
      <GoogleMaps className="google-maps-button" loc={loc}/>
      </div>
      
    </div>
  );
}

Card.defaultProps ={
  img: "https://via.placeholder.com/",
  alt: "placeholder de substitution",
  title: "en attente de modification",
  desc: "en attente de modification"
};

Card.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  descr: PropTypes.string,
  loc: PropTypes.string,
  jour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  DDB: PropTypes.string,
  DDF: PropTypes.string,
};

export default Card;
