import React from 'react';
import "../numbers_table.css"

function NumbersTable({ limit }) {
    const cellsArr = [];
    for(let i = 0; i < limit; i++){
        cellsArr.push(<div key={i} className={`cell ${i % 2 === 0 && "even"}`}>{i}</div>)
    }
  return (
      <div id="nb-table-wrapper">
          {cellsArr}
      </div>
  )
}

export default NumbersTable;