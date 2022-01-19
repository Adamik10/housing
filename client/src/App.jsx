import React, { useState } from "react";
import data from "../../server/data.json";
import CardGrid from "./components/CardGrid";

const App = () => {
  const [dataToDisplay, setDataToDisply] = useState(data);

  return (
    <>
      <h1>Boliger</h1>
      <div className="filter">
        <button>Pris, Faldende</button>
        <button>Pris, Stigende</button>
      </div>
      <div className="properties">
        <CardGrid properties={dataToDisplay} />
      </div>
    </>
  );
};

export default App;
