import React, { useState, useEffect } from "react";
import "./App.css";

import PlantCanvas from "./Components/plantCanvas";

import initialisePlants from "./Plant-Utils/initialisePlants";
import checkPlants from "./Plant-Utils/checkPlants";

function App() {
  const [winHeight, setWinHeight] = useState(window.innerHeight);
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  //Set fish array
  const [fishArray, setFishArray] = useState([]);

  useEffect(() => {
    if (!fishArray.length) {
      //Initialise fish array
    }
  });

  //Set plant array
  const [plantArray, setPlantArray] = useState([]);

  useEffect(() => {
    if (plantArray.length === 0) {
      console.log(plantArray);
      const dimensions = { height: winHeight * 0.95, width: winWidth * 0.95 };
      //Initialise plant array
      initialisePlants(setPlantArray, dimensions);
    }
  });

  if (!winWidth || !plantArray.length) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="App">
        <PlantCanvas
          winHeight={winHeight}
          winWidth={winWidth}
          plantArray={plantArray}
        />
      </div>
    );
  }
}

export default App;
