import React, { useState } from "react";
import CardGrid from "./components/CardGrid";

const App = () => {
  const [sortField, setSortField] = useState(null);
  const [filterField, setFilterField] = useState({ min: null, max: null });

  const handleInput = (e) => {
    let value = Number(e.target.value);
    e.target.name === "min"
      ? setFilterField({ ...filterField, min: value })
      : setFilterField({ ...filterField, max: value });
  };

  return (
    <>
      <h1>Boliger</h1>
      <div className="filter">
        <button
          onClick={() => {
            setSortField("ascending");
          }}
        >
          Pris, Faldende
        </button>
        <button
          onClick={() => {
            setSortField("descending");
          }}
        >
          Pris, Stigende
        </button>
        <div>
          <p>Størrelse:</p>
          <input
            type="number"
            min="0"
            name="min"
            placeholder="min"
            onChange={(e) => handleInput(e)}
          />
          m<span className="super">2</span>
          <input
            type="number"
            min="0"
            name="max"
            placeholder="max"
            onChange={(e) => handleInput(e)}
          />
          m<span className="super">2</span>
        </div>
      </div>
      <div className="properties">
        <CardGrid sortField={sortField} filterField={filterField} />
      </div>
    </>
  );
};

export default App;
