import React from "react";
import Unit from "./Unit";

function UnitList({ values, setChangedValue, setChangedValueName}) {
  
  function valueChangeHandler(e) {
    setChangedValue(e.target.value);
    setChangedValueName(e.target.nextSibling.textContent);
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
