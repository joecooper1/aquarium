import React, { useState, useEffect, useRef } from "react";

import drawPlants from "../Plant-Utils/drawPlants";
import checkPlants from "../Plant-Utils/drawPlants";

export default function PlantCanvas(props) {
  const canvasRef = useRef(null);

  //Set plants as state
  const [plantArray, setPlantArray] = useState(props.plantArray);

  //Extract dimensions
  const { winHeight, winWidth } = props;

  useEffect(() => {
    if (canvasRef) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      //Draw plants
      drawPlants(ctx, plantArray, winWidth, winHeight);
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={winWidth}
      height={winHeight}
      style={{
        zIndex: -1,
        backgroundColor: "rgba(0, 0, 200, 0.5)",
        width: winWidth * 0.95,
        height: winHeight * 0.95,
      }}
    ></canvas>
  );
}
