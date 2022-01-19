import React, { useState } from "react";
import CardGrid from "./components/CardGrid";

const App = () => {
  const [sortField, setSortField] = useState(null);

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
      </div>
      <div className="properties">
        <CardGrid sortField={sortField} />
      </div>
    </>
  );
};

export default App;
