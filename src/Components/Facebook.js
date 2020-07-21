import React from 'react';
import profiles from '../data/berlin.json';
import "../facebook.css";

function Facebook() {
  return (
    <div id="profils-grid">
      {profiles.map(({firstName, lastName, country, img, isStudent}) => (
        <div className="profil-wrapper">
          <img src={img} alt="Student" />
          <div className="profil-info-wrapper">
              <p><span>First Name: </span>{firstName}</p>
              <p><span>Last Name: </span>{lastName}</p>
              <p><span>Country: </span>{country}</p>
              <p><span>Type: </span>{isStudent ? "Student" : "Teacher"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facebook;