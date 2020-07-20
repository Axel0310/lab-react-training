import React from 'react';
import '../box_wrapper.css';

const Greetings = (props) => {
  let output = null;
  if (props.lang === 'de') {
    output = 'Hallo ';
  } else if (props.lang === 'en') {
    output = 'Hi ';
  } else if (props.lang === 'es') {
    output = 'Hola ';
  } else {
    output = 'Bonjour ';
  }
  return (
    <div className="box-wrapper">
      {output}
      {props.children}
    </div>
  );
};

export default Greetings;
