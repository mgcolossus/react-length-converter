import React from "react";
import Unit from "./Unit";

function UnitList({ values, setChangedValueParams}) {
  
  function valueChangeHandler(e) {
    setChangedValueParams({
      value: e.target.value,
      name: e.target.nextSibling.textContent
    })
  }
  return values.map((unit) => {
    return (
      <Unit
        key={unit["name"]}
        name={unit["name"]}
        value={unit["value"]}
        valueChangeHandler={valueChangeHandler}
      />
    );
  });
}

export default UnitList;
