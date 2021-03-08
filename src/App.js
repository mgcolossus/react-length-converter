import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import UnitList from "./components/UnitList";

function App() {
  const unitsOfMeasurement = {
    m: 1,
    km: 0.001,
    dm: 10,
    cm: 100,
    mm: 1000,
  };
  const unitsKeys = Object.keys(unitsOfMeasurement);

  const [values, setValues] = useState(
    unitsKeys.map((unitName) => {
      return {
        name: unitName,
        value: convertValueToUnit(1, "m", unitName),
      };
    })
  );
  const [changedValue, setChangedValue] = useState();
  const [changedValueName, setChangedValueName] = useState();

  function convertValueToUnit(value, fromUnitName, toUnitName) {
    return Number((value * (1 / unitsOfMeasurement[fromUnitName]) * unitsOfMeasurement[toUnitName]).toFixed(14)) || 0;
  }

  useEffect(() => {
    setValues((values) => {
      return values.map((unit) => {
        if (unit["name"] === changedValueName) {
          return { name: unit["name"], value: changedValue };
        } else {
          return {
            name: unit["name"],
            value: convertValueToUnit(changedValue, changedValueName, unit["name"]),
          };
        }
      });
    });
  }, [changedValue]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1 className="title"> Length Converter </h1>
      <UnitList values={values} setChangedValue={setChangedValue} setChangedValueName={setChangedValueName} />
    </div>
  );
}

export default App;
