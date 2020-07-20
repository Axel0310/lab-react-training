import React from "react";
import "../credit_card.css";

const CreditCard = (props) => {
    const cardNb = `${props.number.slice(12)}`;
    const imgSrc = props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";
    return(
        <div className="card-box" style={{backgroundColor: props.bgColor, color: props.color}}>
            <img src={imgSrc} alt="Card type" className="card-type"/>
            <div className="card-nb"><span className="dots">•••• •••• •••• </span>{cardNb}</div>
            <div className="flexed-item">
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>
        </div>
    );
};

export default CreditCard;