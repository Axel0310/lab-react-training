import React from "react";
import '../box_wrapper.css';

const Random = (props) => {
    const max = props.max;
    const min = props.min;
    const value = Math.floor(Math.random() * (max - min)) + min; //L'interval est [min, max[
    return (
        <div className="box-wrapper">
            Random value between {min} and {max} => {value}
        </div>
    );
};

export default Random;