import React from 'react';
import Rating from './Rating';
import '../driver_card.css';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card-wrapper">
      <img src={img} alt="Driver" />
      <div className="driverInfoWrapper">
        <p className="driver-name">{name}</p>
        <Rating>{rating}</Rating>
        <p className="driver-car">
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;