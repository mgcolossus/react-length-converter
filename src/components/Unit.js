import React from "react";

function Unit({name, value, valueChangeHandler }) {
  return (
    <div className="unit">
      <input className="unit-input" maxLength={16} type="text" value={value} onChange={valueChangeHandler} />
      <div className="unit-name">{name}</div>
    </div>
  );
}

export default Unit;
