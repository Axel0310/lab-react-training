import React from "react";
import "../rating.css";

const Rating = ({children}) => {
    const rating = Math.round(children)
    const starsArr = [];
    for(let i = 1; i <= 5; i++) {
        starsArr.push(
            i <= rating ? <i key={i} className="fas fa-star"></i> : <i key={i} className="far fa-star"></i>
        )
    }
    return (
        <div className="rating-wrapper">
            {starsArr}
        </div>
    )
}

export default Rating;