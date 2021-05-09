import React, { useState, useEffect } from "react";
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
  
  const [changedValueParams, setChangedValueParams] = useState({
    value: null,
    name: null
  });

  function convertValueToUnit(value, fromUnitName, toUnitName) {
    return Number((value * (1 / unitsOfMeasurement[fromUnitName]) * unitsOfMeasurement[toUnitName]).toFixed(13)) || 0;
  }

  useEffect(() => {
    setValues((values) => {
      const newData = values.map((unit) => {
        if (unit["name"] === changedValueParams.name) {
          return { name: unit["name"], value: changedValueParams.value };
        } else {
          return {
            name: unit["name"],
            value: convertValueToUnit(changedValueParams.value, changedValueParams.name, unit["name"]),
          };
        }
      });
      return newData;
    });
  }, [changedValueParams]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1 className="title"> Length Converter </h1>
      <UnitList values={values} setChangedValueParams={setChangedValueParams} />
    </div>
  );
}

export default App;
