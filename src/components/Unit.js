import React from "react";

function Unit({name, value, valueChangeHandler }) {
  return (
    <div className="unit">
      <input className="unit-input" type="number" value={value} onChange={valueChangeHandler} />
      <div className="unit-name">{name}</div>
    </div>
  );
}

export default Unit;
