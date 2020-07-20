import React from 'react';
import '../id_card.css';
import moment from "moment";

const IdCard = (props) => {
  return (
    <div className="id-card-wrapper">
      <img src={props.picture} alt="Id card" />
      <div className="info-wrapper">
        <p>
          <span className="id-card-label">First name: </span>
          {props.firstName}
        </p>
        <p>
          <span className="id-card-label">Last name: </span>
          {props.lastName}
        </p>
        <p>
          <span className="id-card-label">Gender: </span>
          {props.gender}
        </p>
        <p>
          <span className="id-card-label">Height: </span>
          {props.height}
        </p>
        <p>
          <span className="id-card-label">Birth: </span>
          {moment(props.birth.toString()).format("ddd MMM Do YYYY")}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
