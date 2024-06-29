import React from 'react';
import PropTypes from 'prop-types'
import ICalButton from './iCal.jsx'

function Card({ img, alt, title, desc, descr, loc, jour, DDB, DDF }) {
  return (
    <div className="card">
        <h3 className="card-title">{title}</h3>
        <img src={img} alt={alt} className="card-image" />
        <p>{jour} Juillet 2024</p>
        <p className="card-description">{desc}</p>

        <ICalButton title={title} descr={descr} loc={loc} DDB={DDB} DDF={DDF}/>
    </div>
  );
}

Card.defaultProps ={
    img: "https://via.placeholder.com/",
    alt: "placeholder de substitution",
    title: "en attente de modification",
    desc: "en attente de modification"
}

export default Card;
